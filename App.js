import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordEmail from "./assets/screens/PasswordEmail";
import Home from "./assets/screens/Home.js";
import PasswordReset from "./assets/screens/PasswordReset";
import Login from "./assets/screens/Login";
import AboutUs from "./assets/screens/AboutUs";
import Notification from './assets/screens/Notification';
import { Dimensions } from "react-native";
import Schedule from './assets/screens/Schedule';
import Reports from './assets/screens/Reports';
import Accounts from './assets/screens/Accounts';
import PersonalInformation from './assets/screens/PersonalInformation';
import PasswordSecurity from './assets/screens/PasswordSecurity';
import Support from './assets/screens/Support';

import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'


const Stack = createNativeStackNavigator();

const { height } = Dimensions.get('window').height;


const App = () => {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });


    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer initialRouteName="Login" style={styles.container}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="PasswordReset" component={PasswordReset} />
                    <Stack.Screen name="PasswordEmail" component={PasswordEmail} />
                    <Stack.Screen name="AboutUs" component={AboutUs} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="Schedule" component={Schedule} />
                    <Stack.Screen name="Reports" component={Reports} />
                    <Stack.Screen name="Accounts" component={Accounts} />
                    <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
                    <Stack.Screen name="PasswordSecurity" component={PasswordSecurity} />
                    <Stack.Screen name="Support" component={Support} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};


export default App




const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: ' Roboto_400Regular',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: height

    }
});