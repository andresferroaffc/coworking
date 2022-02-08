import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../logger/logger.service';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { usuario } from '../user/ENTITIES';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Roles } from './entities';
import { userdto } from 'src/user/DTO';

@Injectable()
export class AuthService {
  constructor(
    private logger: LoggerService,
    private jwtService: JwtService,
    @InjectRepository(usuario) private usersRepository: Repository<usuario>,
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
  ) {}

  async rolesAll(): Promise<Roles[]> {
    return this.rolesRepository.find({
      select: ['code'],
    });
  }

  async login(user: AuthLoginDto): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new AuthLoginDto();
    userDTO.email = user.email;
    userDTO.password = user.password;

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });
   


    if (isOk) {
      // Get user information
      const userDetails = await this.usersRepository.findOne({
        email: user.email,
      });
      console.log(userDetails);
     

      if (userDetails === null) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }

      // Check if the given password match with saved password
      console.log(user.password);
      console.log(userDetails.password);
      const isValid = bcrypt.compareSync(user.password, userDetails.password);
      //const isValid = bcrypt.compare(user.password,userDetails.password);

      if (isValid) {
        return {
          status: 200,
          msg: {
            email: user.email,
            expiresIn: process.env.JWT_EXPIRES_IN,
            access_token: this.jwtService.sign(
              {
                email: user.email,
                role: userDetails.role.code,
                id: userDetails.id,
                username: userDetails.user,
              },
              { expiresIn: process.env.JWT_EXPIRES_IN },
            ),
          },
        };
      } else {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Invalid fields.' } };
    }
  }

  async createUser(body: userdto): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;
    // Transform body into DTO
    const userDTO = new userdto();
    userDTO.email = body.email;
    userDTO.role = body.role;
    userDTO.user = body.user;
    userDTO.password = bcrypt.hashSync(body.password, 10);

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        console.log(errors);
        this.logger.debug(`${errors}`, AuthService.name);
      } else {
        isOk = true;
      }
    });
    
    if (isOk) {
      await this.usersRepository.save(userDTO).catch((error) => {
        this.logger.debug(error.message, AuthService.name);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: `User created with success` } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }
}
