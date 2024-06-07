import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private prisma: PrismaService,
  ) {
    console.log('Qualquer coisa')
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
