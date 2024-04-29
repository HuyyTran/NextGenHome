import { Controller, Get, Param, Post } from '@nestjs/common';
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

  @Post('/change_fan_speed/:speed')
  changeAdaFruitFanSpeed(@Param('speed') speed: string): void {
    this.iotService.changeFanSpeed(speed);
  }

  @Post('/open_door/:password')
  openAdaFruitDoor(@Param('password') password: string): void {
    this.iotService.openDoor(password);
  }

  @Get('/get_temp_data')
  async getTemperatureData() {
    return this.iotService.getTemperatureData();
  }

  @Get('/get_humi_data')
  async getHumidityData() {
    return this.iotService.getHumidityData();
  }

  @Get('/get_light_data')
  async getLightData() {
    return this.iotService.getLightData();
  }
}
