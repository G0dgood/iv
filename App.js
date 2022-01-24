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
import { useFonts } from './hooks/useFonts';


const Stack = createNativeStackNavigator();

const { height } = Dimensions.get('window').height;


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };


  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

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

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App




const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: ' Poppins_400Regular,',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: height

  }
});