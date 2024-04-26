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
        flex: 1,
        fontSize: 16,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 25,
        color: '#F8F8F8',
    },
    number: {
        flex: 0.8,
        fontSize: 25,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 15,
        color: '#F8F8F8',
    },
})
export default function LightingControl(
    {deviceName, 
    lightStrength,
    onLightChange,
    onLEDColorChange,
    initialToggleState,
    initialLEDColor}
)
{
    if (lightStrength == undefined)
    {
        lightStrength = 50;
    }
    return (
        <View style={styles.container}>
            <View style={styles.sub_container}>
                <Text style={styles.title}>{deviceName}</Text>
                <Text style={styles.number}>{lightStrength} LX</Text>
            </View>
            <LightControlContainer 
                onLightChange={onLightChange}
                onLEDColorChange={onLEDColorChange}
                initialToggleState = {initialToggleState}
                initialLEDColor = {initialLEDColor}
            ></LightControlContainer>
        </View>
    )
}