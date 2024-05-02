import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        
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

export default function Header({title}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
      
    );
}