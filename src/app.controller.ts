import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// req, res 에 대해 암  
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hi')
  getHi(): string {
    return this.appService.getHi();
  }
}
