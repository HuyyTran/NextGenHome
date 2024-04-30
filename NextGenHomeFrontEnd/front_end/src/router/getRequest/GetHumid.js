import GetRequest from "./GetRequest";
import { humidDataRoute } from "../APIRoute";
import GetResponseAdapter from "../../helper/GetResponseAdapter";

export default async function GetHumid()
{
    const dataJson = await GetRequest(humidDataRoute);
    console.log("this is get req");
    console.log(data_json);
    console.log("data: " + data);
    const newData = GetResponseAdapter(dataJson);
    return newData;
}