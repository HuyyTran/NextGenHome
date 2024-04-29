import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import LightControlContainer from './LightControlContainer';

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'left',
        backgroundColor: '#282424',
        borderWidth: 1,
        borderRadius: 32,
    },
    sub_container : {
        width: "90%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        flex: 0.3,
        fontSize: 16,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 25,
        color: '#F8F8F8',
    },
})
export default function LightingControl(
    {deviceName, 
    onLightChange,
    onLEDColorChange,
    initialToggleState,
    initialLEDColor}
)
{
    console.log("initialToggleState = " + initialToggleState);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{deviceName}</Text>
            <LightControlContainer 
                onLightChange={onLightChange}
                onLEDColorChange={onLEDColorChange}
                initialToggleState = {initialToggleState}
                initialLEDColor = {initialLEDColor}
            ></LightControlContainer>
        </View>
    )
}