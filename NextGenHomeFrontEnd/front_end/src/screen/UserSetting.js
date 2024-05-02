import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
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
    title: {
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }
  });

export default function UserSetting() {
    return (
      <View style={styles.container}>
        <Header title = "User Setting" ></Header>
        <View style={styles.container}>
          <Text style={{ color: "#f8f8f8" }}>This is User Setting screen!!</Text>
            <StatusBar style="auto" />
        </View>
      </View>
      
    );
  }