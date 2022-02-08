import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
import SplashScreen from './assets/screens/SplashScreen';
import Verification from './assets/screens/Verification';
import ReportStatus from './assets/screens/ReportStatus';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

const { height } = Dimensions.get('window').height;


const App = () => {

 let [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_800ExtraBold

 });

 if (!fontsLoaded) {
  return <AppLoading />;
 } else {
  return (
   <NavigationContainer initialRouteName="SplashScreen" style={styles.container}>
    <SafeAreaProvider>


     <Stack.Navigator screenOptions={{
      headerShown: false
     }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ReportStatus" component={ReportStatus} />

     </Stack.Navigator>
    </SafeAreaProvider>
   </NavigationContainer>
  );
 };
};


export default App




const styles = StyleSheet.create({

 container: {
  flex: 1,
  fontFamily: ' Poppins_400Regular',
  flexDirection: 'column',
  backgroundColor: '#fff',
  height: height

 }
});