import DataLineChart from "./DataLineChart";
import { StyleSheet,Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { selectLightList } from "../../helper/globalState/GlobalState";

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
export default function LightStrengthChart() {
    const lightData = useSelector(selectLightList);
    console.log(lightData);
    return (
        <View styles ={styles.container}>
            <DataLineChart
                chartData={lightData}
                chartSuffix="LX"
            />
            <Text style={styles.title}>Illuminance</Text>
        </View>
    )
}