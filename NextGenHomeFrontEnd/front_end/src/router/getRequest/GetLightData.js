import GetRequest from "./GetRequest";
import { lightDataRoute } from "../APIRoute";
import GetResponseAdapter from "../../helper/GetResponseAdapter";
import store from "../../helper/ReduxStore";
import { changeLightList } from "../../helper/globalState/GlobalState";

export default async function GetLightData()
{
    const dataJson = await GetRequest(lightDataRoute);
    const newData = GetResponseAdapter(dataJson);
    store.dispatch(changeLightList(newData));
}