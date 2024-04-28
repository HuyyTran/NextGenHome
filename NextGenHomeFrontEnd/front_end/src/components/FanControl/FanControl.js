import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import FanControlContainer from './FanControlContainer';


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
    slider: {
        width: 200,
        height: 100,
        marginLeft: 25,
        backgroundColor: '#282424',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 0.25,
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 25,
        color: '#F8F8F8',
    },
})

export default function FanControl(
   {deviceName,
    onFanStrengthChange,
    initialFanStrength}
){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{deviceName}</Text>
            <FanControlContainer
                onFanStrengthChange={onFanStrengthChange}
                initialFanStrength={initialFanStrength}
            ></FanControlContainer>
        </View>
    )
}