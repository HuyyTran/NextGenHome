import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Animated,} from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Bell  } from 'lucide-react-native';

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        height: 50,
        width: '100%',
        flexDirection:"row",
        backgroundColor: 'transparent',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28, 
        color: "#f8f8f8",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
    },
    button:{
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    
  });

export default function Header({title}) {
    const navigation = useNavigation();
    const goBackAnimated = new Animated.Value(1);
    const notiAnimated = new Animated.Value(1);
    const fadeIn = (animated) => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = (animated) => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
    const onGoBack = () =>
    {
        if (navigation.canGoBack())
        {
            navigation.goBack();
        }
    }
    const onGoToNotification = () =>
    {

    }
    return (
    <View style={styles.container}>
        <Pressable style= {styles.button} onPress={onGoBack} 
        onPressIn={() => {fadeIn(goBackAnimated)}} 
        onPressOut={() => {fadeOut(goBackAnimated)}}>
            <Animated.View
            style={{
                opacity: goBackAnimated,
            }}
            >
                <ChevronLeft color={"#F8F8F8"}/>
            </Animated.View>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <Pressable style= {styles.button} 
        onPress={onGoToNotification} 
        onPressIn={() => {fadeIn(notiAnimated)}} 
        onPressOut={() => {fadeOut(notiAnimated)}}>
            <Animated.View
            style={{
                opacity: notiAnimated,
            }}
            >
                <Bell  color={"#F8F8F8"}/>
            </Animated.View>
        </Pressable>
    </View>
    );
}