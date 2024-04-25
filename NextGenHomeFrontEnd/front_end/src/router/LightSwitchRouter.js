import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function onLightChange(isEnable){
    console.log("Light Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    //put the appropriate IP address of the backend server
    const apiUrl = 'http://10.130.208.74:5000/iot/publish/' + sendData;
    console.log(apiUrl);
    const postToggleChange = () => fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }) // replace with your actual data
    });
    const call = postToggleChange();
}