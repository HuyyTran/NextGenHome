import { Module } from '@nestjs/common';
import { IotModule } from './iot/iot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [IotModule, ConfigModule.forRoot()],
})
export class AppModule {}
