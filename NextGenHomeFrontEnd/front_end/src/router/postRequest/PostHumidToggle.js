import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default async function PostHumidToggle(isEnable){
    console.log("Humidifier Toggle Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    try {
        const postToggleChange = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isEnable : sendData
            }),
        })
        postToggleChange().then(response => response.json())
    } catch (err) {
        //Maybe return error here so that front_end can inform user?
        console.log(err);
    }
    
}