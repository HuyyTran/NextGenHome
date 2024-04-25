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
    title: {
        flex: 0.25,
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