import { connectRoute } from "../APIRoute";
import PostRequest from "./PostRequest";

export default async function PostConnect(){
    console.log("Tell back end to connect to adafruit");
    try {
        PostRequest(
            connectRoute,
        )
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
}