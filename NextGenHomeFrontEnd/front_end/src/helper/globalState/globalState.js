import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    lightStrengthLux: 50,
    lightToggle: false,
    lightColor: '#ffffff',
    humidityPercentage : 10,
    fanStrength: 0,
    purifierTemperatureCelcius: 24,
    doorToggle: false,
    humidList: [],
    temperList: [],
    lightList: [],
    notificationList:[]
}
export const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        changeLightStrength: (state, action) => {
            state.lightStrengthLux = action.payload
        },
        changeLightToggle: (state, action) => {
            state.lightToggle = action.payload
        },
        changeLightColor: (state, action) => {
            state.lightColor = action.payload
        },
        changeHumidityPercentage: (state, action) => {
            state.humidityPercentage = action.payload
        },
        changeFanStrength: (state, action) => {
            state.fanStrength = action.payload
        },
        changePurifierTemperatureCelcius: (state, action) => {
            state.purifierTemperatureCelcius = action.payload
        },
        changeDoorToggle: (state, action) => {
            state.doorToggle = action.payload
        },
        changeHumidList: (state, action) => {
            state.humidList = action.payload
        },
        changeLightList: (state, action) => {
            state.lightList = action.payload
        },
        changeTemperList: (state, action) => {
            state.temperList = action.payload
        },
        addToNotificationList: (state, action) => {
            state.notificationList.push(action.payload)
            // console.log(state.notificationList[0] === action.payload)
        },
        removeFromNotificationListByIndex: (state, action) => {
            state.notificationList.splice(action.payload, 1)
        },
    },
})

export const {changeLightStrength, changeLightToggle,
    changeLightColor,changeHumidityPercentage,
    changeFanStrength,changePurifierTemperatureCelcius,
    changeDoorToggle, changeHumidList, changeLightList, 
    changeTemperList, addToNotificationList, removeFromNotificationListByIndex
} = globalStateSlice.actions

export const selectLightStrength = state => state.lightStrengthLux
export const selectLightToggle = state => state.lightToggle
export const selectLightColor = state => state.lightColor
export const selectHumidityPercentage = state => state.humidityPercentage
export const selectFanStrength = state => state.fanStrength
export const selectPurifierTemperatureCelcius = state => state.purifierTemperatureCelcius
export const selectDoorToggle = state => state.doorToggle
export const selectHumidList = state => state.humidList
export const selectTemperList = state => state.temperList
export const selectLightList = state => state.lightList
export const selectNotificationList = state => state.notificationList

export default globalStateSlice.reducer