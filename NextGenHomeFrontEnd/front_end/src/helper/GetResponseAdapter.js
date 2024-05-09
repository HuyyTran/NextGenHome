import { EpochToDate, EpochToDateString } from "./EpochToDate";

export default function GetResponseAdapter(responseArray){
    responseArray = responseArray.slice(1, 30);
    let resultArray = []
    for (i in responseArray) {
        const newValue = parseFloat(responseArray[i].value);
        const newTime = EpochToDateString(responseArray[i].created_epoch)
        var newData = {value: newValue, date: newTime}
        resultArray.push(newData);
    }
    return resultArray;
}