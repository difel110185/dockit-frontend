import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import { useFonts, FiraSans_900Black } from "@expo-google-fonts/fira-sans";

export default function Login() {
  let [fontsLoaded] = useFonts({ FiraSans_900Black });

  if (!fontsLoaded) {
    return <Text>We loadin'</Text>;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.dockitLogo}>Dockit</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dockitLogo: {
    fontSize: 100,
    fontFamily: "FiraSans_900Black",
    color: colors.dockitBlack,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
