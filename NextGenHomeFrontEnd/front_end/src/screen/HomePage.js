import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';
import onColorChange from '../router/ColorChangeRouter';
import onLightChange from '../router/LightSwitchRouter';
import BedroomBG from '../constants/BedroomBG';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#211D1D',
      flexDirection:"column",
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    subcontainer: {
      flex: 0.8,
      marginTop: 50,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      borderColor: '#fff',
    },
    title: {
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 20,
    },
    image: {
      width: 390, 
      height: 473, 
      left: -20, 
      top: 0,
      position: 'absolute', 
      backgroundColor: 'linear-gradient(180deg, rgba(25, 10, 6, 0.50) 22%, rgba(25, 10, 6, 0) 50%), linear-gradient(0deg, #211D1D 0%, rgba(33, 29, 29, 0) 100%)'    
    }, 
  });


export default function HomePage() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={BedroomBG}
          >
          </Image >
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.subcontainer}>
          <View style={{flex: 0.6,
              backgroundColor: "transparent",
              flexDirection:"row",
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,}
          }>
            <View style={{flex:0.4, height:"80%", gap:10, backgroundColor: "#fff"}}>
              <Text style={color="#fff"}>Humidity</Text>
            </View>
            <View style={{flex:0.4, height:"80%",backgroundColor: "#fff"}}>
              <Text style={color="#fff"}>Purifier</Text>
            </View>
          </View>
          <LightingControl 
              deviceName="LED Light" 
              onLightChange={onLightChange}
              onLEDColorChange={onColorChange}
            ></LightingControl>
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }