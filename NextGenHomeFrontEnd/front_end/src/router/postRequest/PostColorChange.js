import { lightColorRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostColorChange(color){
    const sendData = color.substring(1); 
    console.log("Color Changed to", sendData);
    try {
        PostRequest(
            lightColorRoute,
            sendData,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}