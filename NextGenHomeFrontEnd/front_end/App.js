import { StatusBar } from 'expo-status-bar';
import { StyleSheet, AppState, View, ActivityIndicator} from 'react-native';
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
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState;
      if (
        appState.current !== "active"
      ) {
        console.log('App has come to the foreground!');
        Disconnect()
        setLoading(true);
      }
      else if (
        appState.current === "active"
      ) {
        ConnectToAda()
        setTimeout(() => setLoading(false), 3000);
      }
      console.log('AppState', appState.current);
    });
    ConnectToAda()
    setTimeout(() => setLoading(false), 3000);
    return () => {
      subscription.remove();
    };
  }, []);
  useEffect(() => {
      GetDataTimeInterval()
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
}



