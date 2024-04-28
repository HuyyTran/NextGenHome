import { doorOpenRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostDoorToggle(isEnable){
    console.log("Door Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "A" : "B";
    try {
        PostRequest(
            doorOpenRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
    
}