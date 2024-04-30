import { EpochToDate } from "./EpochToDate";

export default function GetResponseAdapter(responseArray){
    let resultArray = []
    for (var i=0; i<responseArray.length; i++) {
        const newValue = responseArray[i].value;
        const newTime = EpochToDate(responseArray[i].created_epoch)
        var newData = {"value": newValue, "date": newTime}
        console.log(newData);
        resultArray.push(newData);
    }
    return resultArray;
}