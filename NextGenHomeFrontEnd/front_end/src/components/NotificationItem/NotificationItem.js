import { StyleSheet, View, Text, Pressable, Animated} from 'react-native';
import { BellRing, CheckCheck } from 'lucide-react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#282424',
        borderWidth: 1,
        borderRadius: 32,
    },
    sub_container : {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        flex: 0.4,
        fontSize: 16,
        textAlign: 'left',
        color: '#F8F8F8',
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
})

export default function NotificationItem({notification, date, onDeleteThisNotification})
{
    const animated = new Animated.Value(1);
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
    return(
        <View style={styles.container}>
            <BellRing color={"#F8F8F8"} />
            <View style={styles.sub_container}>
                <Text style={styles.title}>{notification}</Text>
                <Text style={styles.title}>{date}</Text>
            </View>
            <Pressable style= {styles.button} 
            onPress={onDeleteThisNotification} 
            onPressIn={() => {fadeIn(animated)}} 
            onPressOut={() => {fadeOut(animated)}}>
                <Animated.View
                style={{
                    opacity: animated,
                }}
                >
                    <CheckCheck  color={"#F8F8F8"}/>
                </Animated.View>
            </Pressable>
        </View>
    )
}