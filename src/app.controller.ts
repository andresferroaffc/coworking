import { JwtAuthGuard } from './auth/strategy/jwt-auth.guard';
import { RolesGuard } from './auth/strategy/roles.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { Controller, Get,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Role } from 'src/common/enum/role.enum';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(Role.Administrador)
  @UseGuards(JwtAuthGuard, RolesGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
