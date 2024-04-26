import PostRequest from "./PostRequest";
import { puriChangeRoute } from "../APIRoute";
export default async function PostPuriToggle(isEnable){
    console.log("Purifier Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    try {
        PostRequest(
            puriChangeRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}