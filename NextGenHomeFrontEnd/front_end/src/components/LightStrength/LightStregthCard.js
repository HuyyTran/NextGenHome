import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import {Switch} from 'react-native-paper';
import {useState} from 'react';
import { Sun } from 'lucide-react-native';

const styles = StyleSheet.create({
    container: {
        flex:0.5, 
        height: 120, 
        width: 200,
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

export default function LightStrengthCard(
    {deviceName,
    initialLightStrength}
){
    if (initialLightStrength == undefined)
    {
        initialLightStrength = "50";
    }
    return (
        <View style={styles.container}>
            <View style={[styles.sub_container, {flex: 1}]}>
                <View style={{flex: 0.75}}>
                    <Text style={styles.number}>{initialLightStrength} LX</Text>
                    <Text style={[styles.sub_text, {flex: 0.3}] }>{deviceName}</Text>
                    <Text style={[styles.sub_text, {flex: 0.3}] }>Lighting</Text>
                </View>
                <Sun
                    style={{flex: 1,}} 
                    color={"#F8F8F8"}
                    size={32}
                ></Sun>
            </View>
        </View>
    )
}