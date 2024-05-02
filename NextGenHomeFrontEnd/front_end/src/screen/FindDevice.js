import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HumidChart from '../components/Chart/HumidChart';
import LightStrengthChart from '../components/Chart/LightStrengthChart';
import TemperatureChart from '../components/Chart/TemperatureChart';
import Header from './Header/Header';
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
      flex: 0.8,
      backgroundColor: 'transparent',
      borderColor: '#fff',
    },
    title: {
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }
  });

export default function FindDevice() {
    return (
      <View style={styles.container}>
        <Header title = "Find Device" ></Header>
        
        <ScrollView style={styles.subcontainer}
          contentContainerStyle = {
            {
            flexDirection:"row",
            alignItems: 'center',
            justifyContent: 'space-around',
            gap:10,
            }}>
            <View style={{flexDirection: "column"}}>
            <HumidChart/> 
            <LightStrengthChart/>
            <TemperatureChart></TemperatureChart>
            </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
      
    );
  }