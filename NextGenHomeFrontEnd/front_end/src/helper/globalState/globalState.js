import { useState } from "react"

//*****************/
//* global State  */
//*****************/
//* Lighting Control
export function useLightStrength(){
    const [lightStrengthLux, setLightStrengthLux] = useState(50);
    return [lightStrengthLux, setLightStrengthLux]
}
export function useLightToggle(){
    const [lightToggle, setLightToggle] = useState(false);
    return [lightToggle, setLightToggle]
}

export function useLightColor(){
    const [lightColor, setLightColor] = useState("#ffffff");
    return [lightColor, setLightColor]
}

//*Humidity Control
export function useHumidityPercentage(){
    const [humidityPercentage, setHumidityPercentage] = useState(10);
    return [humidityPercentage, setHumidityPercentage]
}

//*Fan Control
export function useFanStrength(){
    const [fanStrength, setFanStrength] = useState(10);
    return [fanStrength, setFanStrength]
}
//*Purifier Control
export function usePurifierTemperatureCelcius(){
    const [purifierTemperatureCelcius, setPurifierTemperatureCelcius] = useState(10);
    return [purifierTemperatureCelcius, setPurifierTemperatureCelcius]
}

//*Door Control
export function useDoorToggle(){
    const [doorToggle, setDoorToggle] = useState(false);
    return [doorToggle, setDoorToggle]
}


