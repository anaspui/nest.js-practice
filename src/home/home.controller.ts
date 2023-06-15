import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  getHome() {
    return 'On Home';
  }
  @Get('first')
  getFirst() {
    return 'First page';
  }
}
