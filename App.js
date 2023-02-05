import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./components/login/login";
import colors from "./constants/colors";
export default function App() {
    return (
      <View style={styles.container}>
          <Login/>
          <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.dockitWhite,
        flex: 1,
        justifyContent: "center",
    },
});
