import GetHumidData from "../router/getRequest/GetHumidData";
import GetTempData from "../router/getRequest/GetTempData";
import GetLightData from "../router/getRequest/GetLightData";
export default function GetDataTimeInterval() {
    GetHumidData()
    GetLightData()
    GetTempData()
    
    setInterval(() => {
        GetHumidData()
        GetLightData()
        GetTempData()
    }, 60000);
}