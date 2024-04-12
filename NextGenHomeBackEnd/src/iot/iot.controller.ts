import { Controller, Param, Post } from '@nestjs/common';
import { IotService } from './iot.service';

@Controller('iot')
export class IotController {
  constructor(private iotService: IotService) {}

  @Post('/connect')
  connectToAdaFruit() {
    this.iotService.connect();
  }

  @Post('/publish/:message')
  publishToAdaFruit(@Param('message') message: string): void {
    this.iotService.publish(message);
  }

  @Post('/change_color/:color')
  changeAdaFruitColor(@Param('color') color: string): void {
    this.iotService.changeLEDcolor(color);
  }
}
