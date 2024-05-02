import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';
import PostColorChange from '../router/postRequest/PostColorChange';
import PostLightChange from '../router/postRequest/PostLightSwitch';
import PostFanChange from '../router/postRequest/PostFanChange';
import PostDoorToggle from '../router/postRequest/PostDoorToggle';
import BedroomBG from '../constants/BedroomBG';
import FanControl from '../components/FanControl/FanControl';
import HumidifierControl from '../components/HumidifierControl/HumidifierControl';
import PurifierControl from '../components/PurifierControl/PurifierControl';
import DoorControl from '../components/DoorControl/DoorControl';
import LightStrengthCard from '../components/LightStrength/LightStregthCard';
import { selectLightColor, selectLightToggle, 
  selectLightStrength, selectPurifierTemperatureCelcius, selectHumidityPercentage 
, selectFanStrength, selectDoorToggle } from '../helper/globalState/GlobalState';
import { useSelector } from 'react-redux'
import HumidChart from '../components/Chart/HumidChart';
import LightStrengthChart from '../components/Chart/LightStrengthChart';
import TemperatureChart from '../components/Chart/TemperatureChart';
import Header from './Header/Header';
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
      marginTop: 150,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      borderColor: '#fff',
    },
    title: {
      marginTop: 20,
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
    const lightStrengthLux = useSelector(selectLightStrength);
    const lightToggle = useSelector(selectLightToggle);
    const lightColor = useSelector(selectLightColor);
    const humidityPercentage  = useSelector(selectHumidityPercentage);
    const fanStrength = useSelector(selectFanStrength);
    const purifierTemperatureCelcius = useSelector(selectPurifierTemperatureCelcius);
    const doorToggle = useSelector(selectDoorToggle);

    console.log(lightToggle);
    return(
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={BedroomBG}
            >
          </Image >
          <Header title = "Home" ></Header>
          <ScrollView 
          style={styles.subcontainer}
          contentContainerStyle = {
            {
              flexDirection:"column",
              alignItems: 'center',
              justifyContent: 'space-between',
              gap:10,
            }
          }>
            <View style={{flex: 0.6,
                backgroundColor: "transparent",
                flexDirection:"row",
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,}
            }>
              <HumidifierControl
                deviceName="Humidifier" 
                HumidifierPercentage={humidityPercentage}
              ></HumidifierControl>
              <PurifierControl
                deviceName="Purifier" 
                Temperature={purifierTemperatureCelcius}
              ></PurifierControl>
            </View>
            <LightStrengthCard
              deviceName="Illuminance" 
              initialLightStrength={lightStrengthLux}
            >
            </LightStrengthCard>
            <LightingControl 
                deviceName="LED Light" 
                lightStrength={lightStrengthLux}
                initialLEDColor={lightColor}
                initialToggleState={lightToggle}
                onLightChange={PostLightChange}
                onLEDColorChange={PostColorChange}
              ></LightingControl>
            <FanControl
              deviceName="Fan"
              initialFanStrength={fanStrength}
              onFanStrengthChange={PostFanChange}
            ></FanControl>
            <DoorControl
              deviceName="Door Lock"
              initialToggleState={doorToggle}
              onToggleChange={PostDoorToggle}
            ></DoorControl>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      );
    }