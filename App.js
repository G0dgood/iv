// import React from "react";
// import AppLoading from 'expo-app-loading';
// import {
//  useFonts, Poppins_400Regular
// } from '@expo-google-fonts/poppins'
// import { StyleSheet, Text, View } from "react-native";
// import { NativeRouter, Switch, Route } from "react-router-native";
// import PasswordEmail from "./assets/screens/PasswordEmail";
// import Products from "./assets/screens/Products";
// import PasswordReset from "./assets/screens/PasswordReset";
// import Login from "./assets/screens/Login";
// import AboutUs from "./assets/screens/AboutUs";

// export default function App() {

//  let [fontsLoaded] = useFonts({
//   Poppins_400Regular,
//  });
//  if (!fontsLoaded) {
//   return <AppLoading />;
//  } else {
//   return (
//    <NativeRouter>
//     <View style={styles.container}>
//      <Switch>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/passwordemail" exact component={PasswordEmail} />
//       <Route exact path="/passwordreset" component={PasswordReset} />
//       <Route exact path="/aboutus" component={AboutUs} />
//      </Switch>
//     </View>
//    </NativeRouter>
//   );
//  }

// }


// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//   fontFamily: 'Poppins_400Regular',
//   flexDirection: 'column',
//   backgroundColor: '#fff',
//   height: 100
//  }
// });



import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordEmail from "./assets/screens/PasswordEmail";
import Home from "./assets/screens/Home.js";
import PasswordReset from "./assets/screens/PasswordReset";
import Login from "./assets/screens/Login";
import AboutUs from "./assets/screens/AboutUs";
const Stack = createNativeStackNavigator();
import {
 useFonts,
 Poppins_300Light,
 Poppins_400Regular,
 Poppins_400Regular_Italic,
 Poppins_500Medium,
 Poppins_700Bold,
 Poppins_900Black,
} from "@expo-google-fonts/poppins";

const App = ({ navigation }) => {

 const [IsReady, SetIsReady] = useState(false);

 // let [fontsLoaded] = useFonts({
 //  ' Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf')
 // });

 const LoadFontsAndRestoreToken = async () => {
  await useFonts();
 };


 let [fontsLoaded] = useFonts({
  "Poppins-Light": Poppins_300Light,
  "Poppins-Regular": Poppins_400Regular,
  "Poppins-Regular-Italic": Poppins_400Regular_Italic,
  "Poppins-Medium": Poppins_500Medium,
  "Poppins-Bold": Poppins_700Bold,
  "Poppins-Black": Poppins_900Black,
 });
 if (!fontsLoaded) {
  return <AppLoading />;
 }
 else {
  return (
   <NavigationContainer style={styles.container}>
    <Stack.Navigator screenOptions={{
     headerShown: false
    }}>
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="PasswordReset" component={PasswordReset} />
     <Stack.Screen name="PasswordEmail" component={PasswordEmail} />
     <Stack.Screen name="AboutUs" component={AboutUs} />
     <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  );
 };
};

export default App




const styles = StyleSheet.create({
 container: {
  flex: 1,
  fontFamily: ' Poppins_400Regular,',
  flexDirection: 'column',
  backgroundColor: '#fff',
  height: 100
 }
});