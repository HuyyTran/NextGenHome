import GetRequest from "./GetRequest";
import { tempDataRoute } from "../APIRoute";
import GetResponseAdapter from "../../helper/GetResponseAdapter";
import store from "../../helper/ReduxStore";
import { changeTemperList } from "../../helper/globalState/GlobalState";

export default async function GetTempData()
{
    const dataJson = await GetRequest(tempDataRoute);
    const newData = GetResponseAdapter(dataJson);
    store.dispatch(changeTemperList(newData));
}