import DataLineChart from "./DataLineChart";
import { StyleSheet,Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { selectTemperList } from "../../helper/globalState/GlobalState";

const styles = StyleSheet.create({
    container: {
        height: 500,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#282424",
        borderWidth: 1,
        borderRadius: 32,
    },
    title: {
        flex: 1,
        fontSize: 25,
        textAlign: "center",
        paddingTop:20,
        color: "#F8F8F8",
    },
});
export default function TemperatureChart() {
    const temperData = useSelector(selectTemperList);
    // console.log(temperData);
    return (
        <View styles ={styles.container}>
            <DataLineChart
                chartData={temperData}
                chartSuffix="°C"
            />
            <Text style={styles.title}>Temperature</Text>
        </View>
    )
}