import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import Header from './Header/Header';
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
    subcontainer: {
      flex: 1,
      paddingTop:50,
      backgroundColor: 'transparent',
      borderColor: '#fff',
      gap:10,
    },
    title: {
      marginTop: 20,
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 20,
    },
  });

export default function ControlPanel() {
    const lightToggle = useSelector(selectLightToggle);
    const humidityPercentage  = useSelector(selectHumidityPercentage);
    const purifierTemperatureCelcius = useSelector(selectPurifierTemperatureCelcius);
    const lightColor = useSelector(selectLightColor);
    const fanStrength = useSelector(selectFanStrength);
    const doorToggle = useSelector(selectDoorToggle);
    return (
      <View style={styles.container}>
        <Header title = "Control Panel" ></Header>
        <View style={styles.subcontainer}>
          <ScrollView contentContainerStyle = {
            {
            gap:20,
            }} >
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
      </View>
      
    );
  }