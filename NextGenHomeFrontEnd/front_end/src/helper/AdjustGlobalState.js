import { changeLightColor,changeLightToggle,changeLightStrength,
    changePurifierTemperatureCelcius, 
    changeHumidityPercentage,changeFanStrength,changeDoorToggle, 
    addToNotificationList} 
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
        const newDate = new Date();
        const dateTime = newDate.getDate() + "/"
        + (newDate.getMonth()+1)  + "/" 
        + newDate.getFullYear() + " at "  
        + newDate.getHours() + ":"  
        + newDate.getMinutes() + ":" 
        + newDate.getSeconds();
        const data = {
          value: messageData,
          date: dateTime
        }
        store.dispatch(addToNotificationList(data));
        break;

      case 'aiot-ai':
        store.dispatch(changeDoorToggle(messageData === "A" ? true : false));
        break;
      
      case 'aiot-fan':
        store.dispatch(changeFanStrength(parseInt(messageData)));
        break;

      case 'aiot-ledcolor':
        let color = messageData;
        if (color.charAt(0) !== "#") { 
          store.dispatch(changeLightColor("#" + messageData));
        }
        break;
      case 'aiot-led':
        store.getState()
        store.dispatch(changeLightToggle(messageData === "0" ? false : true));
        break;
      default:
        console.log("Unknown topic type: " + arrivedTopic);
    }
  return
}