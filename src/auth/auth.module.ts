import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { LoggerModule } from 'src/logger/logger.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from 'src/user/ENTITIES';
import { Roles } from './entities';
@Module({
  imports: [
    PassportModule,
    LoggerModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        algorithm: 'RS256',
        expiresIn: '60s',
      }),
    }),
    TypeOrmModule.forFeature([usuario, Roles]),
  ],
  providers: [JwtStrategy, AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
