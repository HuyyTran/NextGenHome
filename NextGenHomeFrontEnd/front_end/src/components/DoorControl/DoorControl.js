import { StyleSheet, View, Text, TextInput} from 'react-native';
import * as React from 'react';
import {Switch} from 'react-native-paper';
import {useState} from 'react';
import AuthChecker from '../../helper/AuthChecker';
import PasswordContainer from './PasswordContainer';
import DoorControlContainer from './DoorControlContainer';

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
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20,
        marginHorizontal: 25,
        color: '#F8F8F8',
    },
})

export default function DoorControl(
    {deviceName,
    onToggleChange,
    initialToggleState}
)
{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{deviceName}</Text>
            <DoorControlContainer></DoorControlContainer>
        </View>
    )
}