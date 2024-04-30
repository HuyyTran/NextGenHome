import { EpochToDate, EpochToDateString } from "./EpochToDate";

export default function GetResponseAdapter(responseArray){
    let resultArray = []
    for (var i=0; i<responseArray.length; i++) {
        const newValue = responseArray[i].value;
        const newTime = EpochToDateString(responseArray[i].created_epoch)
        var newData = {"value": newValue, "date": newTime}
        resultArray.push(newData);
    }
    return resultArray;
}