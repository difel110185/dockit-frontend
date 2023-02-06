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
        return <Text>We loadin</Text>;
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
                    style={styles.view}
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
        color: colors.dockitBlack,
        flex: 1,
        fontFamily: "FiraSans_900Black",
        fontSize: 100,
        paddingTop: 100,
        textAlign: "center",
        verticalAlign: "top",
    },
    
    input: {
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
        margin: 12,
        padding: 10,
        width: 300,
    },
    
    signInButton: {
        backgroundColor: colors.dockitBlue,
        borderRadius: 10,
    },
    
    signInMessage: {
        color: colors.dockitBlack,
        fontFamily: "FiraSans_400Regular",
        fontSize: 20,
    },
    view: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    welcome: {
        color: colors.dockitBlack,
        fontFamily: "FiraSans_700Bold",
        fontSize: 30,
        textAlign: "center",
        verticalAlign: "top",
    },
    
});
