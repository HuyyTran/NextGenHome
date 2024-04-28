import { StyleSheet, View, Text, Modal, Pressable, Animated, Button} from 'react-native';
import * as React from 'react';
import { Switch} from 'react-native-paper';
import {useState} from 'react';
import AuthChecker from '../../helper/AuthChecker';
import PasswordContainer from './PasswordContainer';
import { DoorClosed, DoorOpen} from 'lucide-react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    button:{
        marginBottom: 10,
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
        elevation: 3,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalText: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        marginHorizontal: 5,
        color: '#F8F8F8',
    },
})

export default function DoorControlContainer(
    {
        onToggleChange,
        initialToggleState
    }
) {
    const [isEnabled, setIsEnabled] = useState(false);
    // State variable to hold the password 
    const [password, setPassword] = useState(''); 

    const [showModal, setShowModal] = useState(false);

    const [modalText, setModalText] = useState("");
    const openModal = (text) => {
        setModalText(text)
        setShowModal(true)
    }
    if (initialToggleState !== undefined)
    {
        setIsEnabled(initialToggleState)
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
        onSubmitPassword()
    };
    const onSubmitPassword = () => {
        if (isEnabled)
        {
            setIsEnabled(previousState => !previousState);
            openModal("Door locked");
            setPassword("")
            return;
        }
        if (password.length <= 0)
        {
            openModal("Please enter a password")
            return;
        }
        check_res = AuthChecker(password)
        if (check_res)
        {
            //onToggleChange()
            setIsEnabled(previousState => !previousState);
            openModal("Door opened");
        }
        else{
            openModal("Incorrect password")
        }
        setPassword("")
    }
    let lockIcon = <DoorClosed color={"#F8F8F8"}></DoorClosed>
    if (isEnabled)
    {
        lockIcon = <DoorOpen color={"#F8F8F8"}></DoorOpen>
    }
    return (
        <View style={styles.container}>
            <Modal transparent={true} visible={showModal} animationType='slide'>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText} >{modalText}</Text>
                    <Button color={'#FFB267'} 
                            title='Confirm' onPress={() => setShowModal(false)} />
                </View>
                </View>
            </Modal>
            
            <PasswordContainer 
                password={password} 
                setPassword={setPassword}
            ></PasswordContainer>
            <Pressable style= {styles.button} onPressIn={fadeIn} onPressOut={fadeOut}>
                    <Animated.View
                    style={{
                        opacity: animated,
                    }}
                    >
                        {lockIcon}
                    </Animated.View>
            </Pressable>
        </View>
    )
}