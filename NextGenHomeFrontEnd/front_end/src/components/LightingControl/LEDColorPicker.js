import ColorPicker, { colorKit, Panel1, Swatches, Preview , HueSlider } from 'reanimated-color-picker';
import { StyleSheet, View, Text, Modal, Button} from 'react-native';
import {useState, useRef} from 'react';

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10,
        width: "90%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    modalView: {
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 15,
        padding: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
    lightLEDChanger:{
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
})
export default function LEDColorPicker({onColorChange, initialLEDColor}) {
    const pickerRef = useRef("white");
    const [showModal, setShowModal] = useState(false);

    const onPickedColor = (color) => {
        console.log(color.hex);
        pickerRef.current = color.hex;
        onColorChange(color);
    }
    
    if (initialLEDColor != undefined)
    {
        console.log("1" + initialLEDColor);
        pickerRef.current = colorKit.HEX(initialLEDColor);
    }
    return (
        <View style={styles.container}>
            <Button color={'#FFB267'} title='Change LED Color' onPress={() => setShowModal(true)} />

            <Modal transparent={true} visible={showModal} animationType='slide'>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ColorPicker 
                    value={pickerRef.current}
                    style={styles.lightLEDChanger} 
                    onComplete={onPickedColor}
                    boundedThumb={true}
                    >
                        <Preview />
                        <Panel1 />
                        <HueSlider />
                        <Swatches />
                        <Button color={'#FFB267'} 
                        title='Confirm' onPress={() => setShowModal(false)} />
                    </ColorPicker>
                </View>
                </View>
            </Modal>
        </View>
    )
}