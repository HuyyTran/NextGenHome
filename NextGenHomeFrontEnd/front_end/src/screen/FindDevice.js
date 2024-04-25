import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

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
          <Text style={{ color: "#f8f8f8" }}>This is Find Device screen!</Text>
            <StatusBar style="auto" />
        </View>
      </View>
      
    );
  }