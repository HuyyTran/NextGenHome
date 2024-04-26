import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import { Slider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';
import { Fan } from 'lucide-react-native';


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: "90%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    slider: {
        width: 200,
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default function FanControlContainer(
   {
    onFanStrengthChange,
    initialFanStrength}
){
    const progress = useSharedValue(initialFanStrength);
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                containerStyle={{borderRadius: 32}}
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                sliderHeight={15}
                thumbWidth={25}
                onSlidingComplete = {onFanStrengthChange}
                theme={{
                    disableMinTrackTintColor: '#f8f8f8',
                    maximumTrackTintColor: '#f8f8f8',
                    minimumTrackTintColor: '#FFB267',
                    cacheTrackTintColor: '#FFB267',
                    bubbleBackgroundColor: '#FFB267',
                    heartbeatColor: '#FABA67',
                }}
            />
            <Fan color={"#F8F8F8"}></Fan>
        </View>
    )
}