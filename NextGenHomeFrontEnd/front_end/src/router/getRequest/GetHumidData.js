import GetRequest from "./GetRequest";
import { humidDataRoute } from "../APIRoute";
import GetResponseAdapter from "../../helper/GetResponseAdapter";
import store from "../../helper/ReduxStore";
import { changeHumidList } from "../../helper/globalState/GlobalState";

export default async function GetHumidData()
{
    const dataJson = await GetRequest(humidDataRoute);
    const newData = GetResponseAdapter(dataJson);
    store.dispatch(changeHumidList(newData));
}