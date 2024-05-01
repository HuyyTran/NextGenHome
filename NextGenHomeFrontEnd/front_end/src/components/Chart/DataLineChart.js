import { StyleSheet, View, Text, TextInput, ActivityIndicator } from "react-native";
import * as React from "react";
import { useState } from "react";
import { LineChart } from "react-native-gifted-charts";

export default function DataLineChart({ chartData, chartSuffix}) {
    let largestValue = 0
    console.log(chartData);
    for (value in chartData) {
        if (chartData[value].value > largestValue) {
            largestValue = chartData[value].value
        }
    }
    if (chartData.length === 0) {
      return (
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 250,
            width: 300,
            paddingTop: 50
        }}>
            <ActivityIndicator size="large" color="#FFB267" />
          </View>
        )
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
                isAnimated
                animateOnDataChange
                animationDuration={1500}
                onDataChangeAnimationDuration={1500}
                width={230}
                initialSpacing={0}
                data={chartData}
                yAxisTextStyle={{ color: "#F8F8F888" }}
                yAxisLabelSuffix = {chartSuffix}
                spacing={15}
                thickness={5}
                maxValue={largestValue*1.5}
                focusEnabled
                hideDataPoints
                yAxisColor="#F8F8F888"
                lineGradient
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
                            {items[0].value + " " + chartSuffix}
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
