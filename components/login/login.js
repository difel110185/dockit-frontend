import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../../constants/colors";
import {
  useFonts,
  FiraSans_900Black,
  FiraSans_400Regular,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans";

export default function Login() {
  let [fontsLoaded] = useFonts({
    FiraSans_900Black,
    FiraSans_400Regular,
    FiraSans_700Bold,
  });
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  if (!fontsLoaded) {
    return <Text>We loadin'</Text>;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.dockitLogo}>Dockit</Text>
        <View
          style={{
            flex: 0,
            flexDirection: "column",
          }}
        >
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={styles.signInMessage}>Please sign in to continue</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly"
          }}>
          <Button
            style={styles.signInButton}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dockitLogo: {
    flex: 1,
    textAlign: "center",
    verticalAlign: "top",
    paddingTop: 100,
    fontSize: 100,
    fontFamily: "FiraSans_900Black",
    color: colors.dockitBlack,
  },
  welcome: {
    textAlign: "center",
    verticalAlign: "top",
    fontSize: 30,
    fontFamily: "FiraSans_700Bold",
    color: colors.dockitBlack,
  },
  signInMessage: {
    fontSize: 20,
    fontFamily: "FiraSans_400Regular",
    color: colors.dockitBlack,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  signInButton: {
    backgroundColor: colors.dockitBlue,
    borderRadius: 10,
  }
});
