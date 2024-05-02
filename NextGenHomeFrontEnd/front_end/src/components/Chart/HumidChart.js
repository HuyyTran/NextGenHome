import DataLineChart from "./DataLineChart";
import { StyleSheet,Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { selectHumidList } from "../../helper/globalState/GlobalState";

const styles = StyleSheet.create({
    container: {
        height: 500,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#282828",
        borderWidth: 1,
        borderRadius: 32,
        borderColor: "#F8F8F8",
    },
    title: {
        flex: 1,
        fontSize: 25,
        textAlign: "center",
        paddingTop:20,
        color: "#F8F8F8",
    },
});
export default function HumidChart() {
    const humidData = useSelector(selectHumidList);
    // console.log(humidData);
    return (
        <View styles ={styles.container}>
            <DataLineChart
                chartData={humidData}
                chartSuffix="%"
            />
            <Text style={styles.title}>Humidity</Text>
        </View>
    )
}