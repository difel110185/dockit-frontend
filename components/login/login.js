import React, { useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {StyleSheet, Text, View, TextInput, Button, Pressable } from "react-native";
import {Shadow} from "react-native-shadow-2";
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
    useEffect(() => {
        LocalAuthentication.authenticateAsync();
    }, []);

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
                    <Text style={styles.loginMessage}>Please sign in to continue</Text>
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
                    <Shadow style={styles.dropShadow} 
                        distance={3} 
                        containerViewStyle={{marginVertical: 20}}
                        offset={[-1,3]}
                    >
                        <Pressable 
                            onPress={()=>{console.log("do the login auth here");}}
                            style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </Pressable>
                    </Shadow>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                }}>
                    <Button
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
    loginButton: {
        alignItems: "center",
        backgroundColor: colors.dockitNavy,
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        width: 200,
    },
    loginButtonText: {
        color: colors.dockitWhite,
        fontFamily: "FiraSans_700Bold",
        fontSize: 20,
    },
    loginMessage: {
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
