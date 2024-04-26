import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';
import PostColorChange from '../router/postRequest/PostColorChange';
import PostLightChange from '../router/postRequest/PostLightSwitch';
import BedroomBG from '../constants/BedroomBG';
import FanControl from '../components/FanControl/FanControl';
import HumidifierControl from '../components/HumidifierControl/HumidifierControl';
import PurifierControl from '../components/PurifierControl/PurifierControl';
import DoorControl from '../components/DoorControl/DoorControl';
import { useLightColor, useLightToggle, 
  useLightStrength, usePurifierTemperatureCelcius, useHumidityPercentage 
, useFanStrength, useDoorToggle } from '../helper/globalState/globalState';

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
    const [isLoading, setLoading] = useState(true);
    const [lightStrengthLux, setLightStrengthLux] = useLightStrength()
    const [lightToggle, setLightToggle] = useLightToggle();
    const [lightColor, setLightColor] = useLightColor();
    const [humidityPercentage, setHumidityPercentage] = useHumidityPercentage();
    const [fanStrength, setFanStrength] = useFanStrength();
    const [purifierTemperatureCelcius, setPurifierTemperatureCelcius] = usePurifierTemperatureCelcius();
    const [doorToggle, setDoorToggle] = useDoorToggle();


    useEffect(() => {
      setTimeout(() => setLoading(false), 3000)
    }, [])
    if (isLoading)
    {
      return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#FFB267" />
          </View>
        )
    }
    else {
      return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={BedroomBG}
            >
          </Image >
          <Text style={styles.title}>Home Screen</Text>
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
            ></FanControl>
            <DoorControl
              deviceName="Door Lock"
              initialToggleState={doorToggle}
            ></DoorControl>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      );
    }
  }