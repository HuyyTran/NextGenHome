import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import DataLineChart from '../components/Chart/DataLineChart';
import { useSelector } from 'react-redux';
import { selectHumidList, selectTemperList, selectLightList } from '../helper/globalState/GlobalState';
import HumidChart from '../components/Chart/HumidChart';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282424',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
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
  });

export default function FindDevice() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Find Device</Text>
        <View style={styles.container}>
            <HumidChart
            />
            <StatusBar style="auto" />
        </View>
      </View>
      
    );
  }