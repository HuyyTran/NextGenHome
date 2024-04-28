import { changeLightColor,changeLightToggle,changeLightStrength,
    changePurifierTemperatureCelcius, 
    changeHumidityPercentage,changeFanStrength,changeDoorToggle } 
from "./globalState/GlobalState";
import store from './ReduxStore';
export default function AdjustGlobalState(arrivedTopic, messageData)
{
    console.log("Adjusting global state");
    switch (arrivedTopic) {
      case 'aiot-temp':
        
        store.dispatch(changePurifierTemperatureCelcius(parseInt(messageData)));
        break;
      case 'aiot-humi':
        store.dispatch(changeHumidityPercentage(parseInt(messageData)));
        break;

      case 'aiot-light':
        store.dispatch(changeLightStrength(parseInt(messageData)));
        break;

      case 'aiot-supporter':
        break;

      case 'aiot-ai':
        store.dispatch(changeDoorToggle(messageData === "A" ? true : false));
        break;
      
      case 'aiot-fan':
        store.dispatch(changeFanStrength(parseInt(messageData)));
        break;

      case 'aiot-ledcolor':
        store.dispatch(changeLightColor("#" + messageData));
        break;
      case 'aiot-led':
        store.getState()
        store.dispatch(changeLightToggle(messageData === "1" ? true : false));
        break;
      default:
        console.log("Unknown topic type: " + arrivedTopic);
    }
  return
}