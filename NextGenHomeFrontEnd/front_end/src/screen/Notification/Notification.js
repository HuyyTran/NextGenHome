import { StyleSheet, View, Text, Modal, Button, ScrollView} from 'react-native';
import {useState, useRef} from 'react';
import Header from '../Header/Header';
import { selectNotificationList } from '../../helper/globalState/GlobalState';
import { useSelector } from 'react-redux';
import NotificationItem from '../../components/NotificationItem/NotificationItem';
import { removeFromNotificationListByIndex } from '../../helper/globalState/GlobalState';
import store from '../../helper/ReduxStore';
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
    subcontainer: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        borderColor: '#fff',
      },
    title: {
        fontSize: 28, 
        color: "#f8f8f8",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    }
})
export default function Notification(){
    const notificationList = useSelector(selectNotificationList);
    if (notificationList.length === 0)
    {
        return (
            <View style={styles.container}>
                <Header title="Notification"></Header>
                <View style={styles.container}></View>
                <Text style={styles.title}>No Notification</Text>
                <View style={styles.container}></View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Header title="Notification"></Header>
            <View style={styles.container}>
            <ScrollView style={styles.subcontainer}>
                {
                    notificationList.map((item, index) => {
                        return(
                            <NotificationItem 
                            key={index}
                            notification={item.value}
                            date={item.date}
                            onDeleteThisNotification={() => {
                                store.dispatch(removeFromNotificationListByIndex(index))
                            }}
                            ></NotificationItem>
                        )
                    }).reverse()
                }
            </ScrollView>
            </View>
        </View>
    );
}