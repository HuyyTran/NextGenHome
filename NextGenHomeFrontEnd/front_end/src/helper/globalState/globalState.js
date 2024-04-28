import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    lightStrengthLux: 50,
    lightToggle: false,
    lightColor: '#ffffff',
    humidityPercentage : 10,
    fanStrength: 0,
    purifierTemperatureCelcius: 24,
    doorToggle: false,
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
    },
})

export const {changeLightStrength, changeLightToggle,
    changeLightColor,changeHumidityPercentage,
    changeFanStrength,changePurifierTemperatureCelcius,
    changeDoorToggle
} = globalStateSlice.actions

export const selectLightStrength = state => state.lightStrengthLux
export const selectLightToggle = state => state.lightToggle
export const selectLightColor = state => state.lightColor
export const selectHumidityPercentage = state => state.humidityPercentage
export const selectFanStrength = state => state.fanStrength
export const selectPurifierTemperatureCelcius = state => state.purifierTemperatureCelcius
export const selectDoorToggle = state => state.doorToggle

export default globalStateSlice.reducer