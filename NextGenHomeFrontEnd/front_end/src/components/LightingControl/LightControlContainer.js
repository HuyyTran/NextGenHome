import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {Switch} from 'react-native-paper';
import { LampCeiling  } from 'lucide-react-native';

import LEDColorPicker from './LEDColorPicker';

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10,
        width: "90%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    lightToggleButton: {
        flexDirection: 'column',
    },
    
})
export default function LightControlContainer(
    {onLightChange,
    onLEDColorChange,
    initialToggleState,
    initialLEDColor}
){
    const [isEnabled, setIsEnabled] = useState(initialToggleState);
    const [lampColor, setLampColor] = useState(initialLEDColor);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onLightChange(!isEnabled);
    }
    const onColorChange = (color) => {
        const hex = color.hex;
        setLampColor(hex);
        onLEDColorChange(hex);
    }
    if (initialToggleState !== isEnabled)
    {
        setIsEnabled(initialToggleState);
    }
    if (initialLEDColor !== lampColor)
    {
        setLampColor(initialLEDColor);
    }
    return (
        <View style={styles.container}>
            <Switch 
                style={styles.lightToggleButton}
                trackColor={{false: '#F8F8F8', true: '#FFB267'}}
                thumbColor={'#282424'}
                ios_backgroundColor="#F8F8F8"
                onValueChange={toggleSwitch}
                value={isEnabled}
            ></Switch>
            <LEDColorPicker onColorChange={onColorChange} initialLEDColor= {initialLEDColor}></LEDColorPicker>
            <LampCeiling color={lampColor}/>
        </View>
    )
}