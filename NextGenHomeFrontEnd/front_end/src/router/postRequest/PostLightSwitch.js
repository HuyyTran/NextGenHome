import { lightChangeRoute } from "../APIRoute";
import PostRequest from "./PostRequest";
import AdjustGlobalState from "../../helper/AdjustGlobalState";
export default async function PostLightChange(isEnable){
    console.log("Light Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    try {
        AdjustGlobalState('aiot-led', sendData);
        PostRequest(
            lightChangeRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}