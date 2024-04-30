import { StatusBar } from 'expo-status-bar';
import { StyleSheet, AppState} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ConnectToAda, Disconnect } from './src/router/MQTTClient';
import {useRef, useState, useEffect} from 'react'
import { Provider } from 'react-redux';
import store from './src/helper/ReduxStore';

import GetDataTimeInterval from './src/helper/GetDataTimeInterval';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282424',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function App() {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      if (
        appState.current === "inactive"
      ) {
        console.log('App has come to the foreground!');
        Disconnect()
      }
      else if (
        appState.current === "active"
      ) {
        ConnectToAda()
      }
      console.log('AppState', appState.current);
    });
    ConnectToAda()
    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
    GetDataTimeInterval()
  }, [])
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      {    
        <NavigationContainer styles={styles.container}>
          {
            <NavBar></NavBar>
          }
        </NavigationContainer>
      }
      </GestureHandlerRootView>
    </Provider>
    
  );
}



