import { fanStrengthRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostFanChange(value){
    const sendData = Math.round(value);
    console.log("Fan Strength change to", sendData);
    try {
        PostRequest(
            fanStrengthRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}