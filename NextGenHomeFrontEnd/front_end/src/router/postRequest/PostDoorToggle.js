import { doorOpenRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostDoorToggle(password){
    console.log("Door Toggle Changed to:", password);
    //Value to send to backend server
    const sendData = password;
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