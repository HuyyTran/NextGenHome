import { lightChangeRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostLightChange(isEnable){
    console.log("Purifier Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    try {
        PostRequest(
            lightChangeRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}