import { RolesGuard } from './roles/roles.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Role } from './roles/role.enum';
import { Roles } from './roles/roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
