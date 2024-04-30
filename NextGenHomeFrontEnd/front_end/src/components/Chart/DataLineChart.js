import { StyleSheet, View, Text, TextInput } from "react-native";
import * as React from "react";
import { useState } from "react";
import { LineChart } from "react-native-gifted-charts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
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
        textAlign: "auto",
        paddingTop:20,
        color: "#F8F8F8",
    },
});

export default function DataLineChart({ chartData }) {
    let largestValue = 0
    for (value in chartData) {
        if (chartData[value].value > largestValue) {
            largestValue = chartData[value].value
        }
    }
    return (
        <View 
        style={
            {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: 250,
                width: 300,
                paddingTop: 50
            }
        }>  
            <LineChart
                width={230}
                initialSpacing={0}
                data={chartData}
                yAxisTextStyle={{ color: "#F8F8F888" }}
                spacing={15}
                thickness={5}
                maxValue={largestValue*1.5}
                showValuesAsDataPointsText
                focusEnabled
                showStripOnFocus
                showTextOnFocus
                hideDataPoints
                yAxisColor="#F8F8F888"
                animateOnDataChange
                animationDuration={1000}
                onDataChangeAnimationDuration={300}
                lineGradient
                scrollAnimation
                isAnimated
                hideRules
                showVerticalLines
                verticalLinesColor="#FABA6744"
                xAxisColor="#F8F8F888"
                pointerConfig={{
                    pointerStripHeight: 160,
                    pointerStripColor: "lightgray",
                    pointerStripWidth: 2,
                    pointerColor: "lightgray",
                    radius: 6,
                    pointerLabelWidth: 100,
                    pointerLabelHeight: 90,
                    activatePointersOnLongPress: true,
                    autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: (items) => {
                    return (
                    <View
                        style={{
                        height: 90,
                        width: 100,
                        justifyContent: "center",
                        marginTop: -10,
                        marginLeft: -40,
                        }}>
                        <View
                        style={{
                            paddingHorizontal: 14,
                            paddingVertical: 6,
                            borderRadius: 16,
                            backgroundColor: "white",
                        }}>
                        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                            {items[0].value}
                        </Text>
                        <Text
                            style={{
                            color: "black",
                            fontSize: 14,
                            marginBottom: 6,
                            textAlign: "center",
                            }}>
                            {items[0].date}
                        </Text>
                        </View>
                    </View>
                    );
                },
        }}>
            </LineChart>
        </View>
    );
}
