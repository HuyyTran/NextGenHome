// Create an MQTT client instance
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useLightColor, useLightToggle,
  useLightStrength, usePurifierTemperatureCelcius, useHumidityPercentage
  , useFanStrength, useDoorToggle
} from '../helper/globalState/globalState';


const AIO_USERNAME = process.env.EXPO_PUBLIC_ADA_USERNAME;
const AIO_KEY = process.env.EXPO_PUBLIC_ADA_API_KEY;

const url = "io.adafruit.com"
init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {
  }
});

const options = {
  host: 'io.adafruit.com',
  port: 443,
  path: '/mqtts',
  username: AIO_USERNAME,
  password: AIO_KEY,
};

const topics =
  [
    'aiot-led',
    'aiot-temp',
    'aiot-humi',
    'aiot-light',
    'aiot-supporter',
    'aiot-ai',
    'aiot-fan',
    'aiot-ledcolor'
  ];
const client = new Paho.MQTT.Client(options.host, options.port, options.path);
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
function connect() {
  client.connect({
    onSuccess: onConnect,
    useSSL: true,
    // Clean session
    cleanSession: true,
    timeout: 300,
    onFailure: onFailure,
    userName: options.username,
    password: options.password
  });
}
function onConnect() {
  console.log('onConnect');
  subscribeTopic();
}

function onFailure(err) {
  console.log('Connect failed!');
  console.log(err);
}

function onDisconect() {
  console.log("Disconnected from ada");
}
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  // const [lightStrengthLux, setLightStrengthLux] = useLightStrength()
  // const [lightToggle, setLightToggle] = useLightToggle();
  // const [lightColor, setLightColor] = useLightColor();
  // const [humidityPercentage, setHumidityPercentage] = useHumidityPercentage();
  // const [fanStrength, setFanStrength] = useFanStrength();
  // const [purifierTemperatureCelcius, setPurifierTemperatureCelcius] = usePurifierTemperatureCelcius();
  // const [doorToggle, setDoorToggle] = useDoorToggle();

  const arrivedTopic = message.topic.split("/");
  const messageData = message.payloadString;
  console.log("onMessageArrived, topic:" + arrivedTopic + messageData);
  // switch (arrivedTopic) {
  //   case 'aiot-temp':
  //     setPurifierTemperatureCelcius(parseInt(messageData));
  //     break;
    
  //   case 'aiot-humi':
  //     setHumidityPercentage(parseInt(messageData));
  //     break;

  //   case 'aiot-light':
  //     setLightStrengthLux(parseInt(messageData));
  //     break;

  //   case 'aiot-supporter':
  //     break;

  //   case 'aiot-ai':
  //     setDoorToggle(messageData === "A" ? true : false);
  //     break;
    
  //   case 'aiot-fan':
  //     setFanStrength(parseInt(messageData));
  //     break;

  //   case 'aiot-ledcolor':
  //     setLightColor(messageData);
  //     break;
  //   case 'aiot-led':
  //     setLightToggle(messageData === "1" ? true : false);
  //     break;
  //   default:
  //     console.log("Unknown topic type: " + arrivedTopic);
  // }
}
function subscribeTopic() {
  topics.forEach(topic => {
    client.subscribe(options.username + "/feeds/" + topic,
      {
        onFailure: function (err) {
          if (err) {
            console.log("failed connected to topic: " + topic);
            console.log(err); ole.log(err);
          }
        },
        onSuccess: function () {
          console.log("connected to topic: " + topic);
        }
      }
    );
  }
  );
}
export function Disconnect() {
  client.disconnect();
  onDisconect();
}

export function ConnectToAda() {
  connect();
}
