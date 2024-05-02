import { StyleSheet, View, Text, Modal, Button} from 'react-native';
import {useState, useRef} from 'react';
import Header from '../../screen/Header/Header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#211D1D',
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
    fontSize: 28, 
    color: "#f8f8f8",
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    }
})
export default function Notification(){
    return(
        <View style={styles.container}>
            <Header title="Notification"></Header>
            <View style={styles.container}>
                <Text style={{color: "#F8F8F8"}} >Notification</Text>
                
            </View>
        </View>
    );
}