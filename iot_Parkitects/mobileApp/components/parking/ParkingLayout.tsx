//(Expo Documentation.2024)
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ParkingBay from "./ParkingBay";

export default function ParkingLayout() {
  return (
    <View style={styles.container}>

     
{/* (Racisz,  2020) */}
{/*Layout (Yilmaz,2018) */}
      <View style={styles.map}>

        <View>

          <ParkingBay id="A-01" occupied />
          <ParkingBay id="A-02" />
          <ParkingBay id="A-03" occupied />
          <ParkingBay id="A-04" />
          <ParkingBay id="A-05" />

        </View>

        <View style={styles.road}>

          <Text style={styles.roadText}>AISLE</Text>

          <Text style={styles.entry}>ENTRY</Text>

        </View>

        <View>

          <ParkingBay id="A-06" />
          <ParkingBay id="A-07" occupied />
          <ParkingBay id="A-08" />
          <ParkingBay id="A-09" occupied />
          <ParkingBay id="A-10" />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginHorizontal: 20,
    marginTop: 0,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
   
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111827",
  },

  map: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  road: {
    width: 70,
    backgroundColor: "#F5F7FA",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  roadText: {
    transform: [{ rotate: "-90deg" }],
    color: "#A3AAB8",
    fontWeight: "700",
    letterSpacing: 4,
    position: "absolute",
  },

  entry: {
    position: "absolute",
    bottom: 8,
    fontSize: 11,
    color: "#22C55E",
    fontWeight: "700",
  },

});
/**
 * References
 *  Expo Documentation.2024.Create a project. [online]  Available at: <https://docs.expo.dev/get-started/create-a-project/ > [Accessed 17 Aug. 2026].
  Racisz, T. 2020. Creating an interactive map with React and Firebase. (Version 2.0) [Source code] .Available at: <https://medium.com/@travisracisz/creating-an-interactive-map-with-react-and-firebase-fa183cef15c9 > [Accessed 5 Aug. 2026].
  Yilmaz.2018. car park. (Version 2.0) [Source code] Available at: <https://codepen.io/tenkyu/pen/zaJwaR> [Accessed 17 Aug. 2026].
  */