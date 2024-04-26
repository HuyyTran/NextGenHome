import { StyleSheet, View, Text, TextInput, Pressable, Animated} from 'react-native';
import * as React from 'react';
import {Switch} from 'react-native-paper';
import {useState} from 'react';
import AuthChecker from '../../helper/AuthChecker';
import { EyeOff, Eye} from 'lucide-react-native';

const styles = StyleSheet.create({ 
    container: { 
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        backgroundColor:"#f3f3f3",
        borderRadius: 8, 
        paddingHorizontal: 20, 
        marginBottom: 10,
        marginHorizontal: 20,
    }, 
    input: { 
        flex: 1, 
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
    }, 
    icon: { 
        marginLeft: 10, 
    }, 
    button:{
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
}); 

export default function PasswordContainer(
   {password,
    setPassword,}
){
    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false); 
        
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    let renderIcon = <EyeOff></EyeOff>
    if (showPassword) {
        renderIcon = <Eye></Eye>
    }
    const animated = new Animated.Value(1);
    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
        toggleShowPassword()
    };
    return (
    <View style={styles.container}> 
        <TextInput 
            // Set secureTextEntry prop to hide  
            //password when showPassword is false 
            secureTextEntry={!showPassword} 
            value={password} 
            onChangeText={setPassword} 
            style={styles.input} 
            placeholder="Enter Password"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
        /> 
        <Pressable style= {styles.button} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View
            style={{
                opacity: animated,
            }}
            >
                {renderIcon}
            </Animated.View>
        </Pressable>
    </View> 
    )
}