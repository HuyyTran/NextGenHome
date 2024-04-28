import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import {Switch} from 'react-native-paper';
import {useState} from 'react';
import { Droplet } from 'lucide-react-native';

const styles = StyleSheet.create({
    container: {
        flex:0.5, 
        height:180, 
        gap:5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'left',
        backgroundColor: '#282424',
        borderWidth: 1,
        borderRadius: 16,
    },
    sub_container : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    bottom_sub:{
        width: "90%",
        flex: 0.6,
        borderTopWidth: 1,
        borderTopColor: '#F8F8F855',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20
    },
    number: {
        flex: 0.5,
        fontSize: 25,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 15,
        color: '#F8F8F8',
    },
    sub_text:
    {
        opacity: 0.60,
        fontSize: 12,
        textAlign: 'left',
        marginHorizontal: 15,
        color: '#F8F8F8',
    },
    button: {
        flexDirection: 'column',
    },
})

export default function HumidifierControl(
    {deviceName,
    HumidifierPercentage,
    onToggleChange,
    initialToggleState}
){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        if (onToggleChange != undefined)
        {
            onToggleChange(!isEnabled);
        }
    }
    if (initialToggleState != undefined)
    {
        setIsEnabled(initialToggleState);
    }
    if (HumidifierPercentage == undefined)
    {
        HumidifierPercentage = "-1";
    }
    return (
        <View style={styles.container}>
            <View style={[styles.sub_container, {flex: 1}]}>
                <View style={{flex: 0.75}}>
                    <Text style={styles.number}>{HumidifierPercentage}%</Text>
                    <Text style={[styles.sub_text, {flex: 0.3}] }>{deviceName}</Text>
                    <Text style={[styles.sub_text, {flex: 0.3}] }>Air</Text>
                </View>
                <Droplet
                    style={{flex: 1,}} 
                    color={"#F8F8F8"}
                    size={32}
                ></Droplet>
            </View>
            
            <View style={[styles.sub_container, styles.bottom_sub]}>
                <Text style={[styles.sub_text, {flex: 1}] }>Mode 1</Text>
                <Switch 
                    style={styles.button}
                    trackColor={{false: '#F8F8F8', true: '#FFB267'}}
                    thumbColor={'#282424'}r
                    ios_backgroundColor="#F8F8F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                ></Switch>
            </View>
        </View>
    )
}