import { Module } from '@nestjs/common';
import { IotController } from './iot.controller';
import { IotService } from './iot.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [IotController],
  providers: [IotService],
  imports: [ConfigModule],
})
export class IotModule {}
