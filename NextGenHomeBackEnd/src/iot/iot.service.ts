/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mqtt from 'mqtt';

//OnModuleInit will help connect to server right after yarn start:dev,
//but i will use connect() in controller
// export class IotService implements OnModuleInit {
@Injectable()
export class IotService {
  private client: mqtt.MqttClient;

  constructor(private configService: ConfigService) {}

  //   onModuleInit() {
  //     this.connect();
  //   }

  connect() {
    const username = this.configService.get<string>('ADAFRUIT_IO_USERNAME');
    const password = this.configService.get<string>('ADAFRUIT_IO_KEY');
    const MQTT_URL = `mqtts://io.adafruit.com`;

    this.client = mqtt.connect(MQTT_URL, {
      username: username,
      password: password,
    });

    this.client.on('connect', () => {
      console.log('Connected to Adafruit IO MQTT broker');
      const feeds = [
        'aiot-led',
        'aiot-temp',
        'aiot-humi',
        'aiot-light',
        'aiot-supporter',
        'aiot-ai',
        'aiot-fan',
        'aiot-ledcolor',
      ];
      feeds.forEach((feed) => {
        this.client.subscribe(`huynguyenducbao2003/feeds/${feed}`);
        console.log('Subscribed to feed:', feed);
      });
    });

    this.client.on('message', (topic, message) => {
      console.log(
        'Received data:',
        message.toString(),
        'from [feed] <-',
        topic,
      );
    });

    this.client.on('error', (error) => {
      console.error('Connection error:', error);
    });
  }

  publish(message: string) {
    const feed = 'aiot-led';
    this.client.publish(
      `huynguyenducbao2003/feeds/${feed}`,
      message.toString(),
      (err) => {
        if (err) {
          console.error('Error publishing message:', err);
        } else {
          console.log('Published message to ${feed}:', message.toString());
        }
      },
    );
  }

  changeLEDcolor(color: string) {
    const feed = 'aiot-ledcolor';
    console.log(color);
    this.client.publish(
      `huynguyenducbao2003/feeds/${feed}`,
      color.toString(),
      (err) => {
        if (err) {
          console.error('Error publishing message:', err);
        } else {
          console.log('Published message to ${feed}:', color.toString());
        }
      },
    );
  }

  changeFanSpeed(speed: string) {
    const feed = 'aiot-fan';
    this.client.publish(
      `huynguyenducbao2003/feeds/${feed}`,
      speed.toString(),
      (err) => {
        if (err) {
          console.error('Error publishing message:', err);
        } else {
          console.log('Published message to ${feed}:', speed.toString());
        }
      },
    );
  }

  openDoor(password: string) {
    const feed = 'aiot-ai';
    if (password == '123') {
      this.client.publish(`huynguyenducbao2003/feeds/${feed}`, 'A', (err) => {
        if (err) {
          console.error('Error publishing message:', err);
        } else {
          console.log('Published message to ${feed}:', password.toString());
        }
      });
    } else {
      console.log('Wrong password!!!');
    }
  }
}

// what left to do is publish data to Adafruit via mqtt
// research about method .on()
