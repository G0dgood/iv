import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Footer from '../components/Footer';
import HeaderThree from '../components/HeaderThree';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const WIDTH3 = Dimensions.get('window').width - 40
export const arrow3 = Dimensions.get('window').width - 120
import { Dimensions } from "react-native";

const Accounts = ({ navigation }) => {
 return (
  <SafeAreaView style={styles.AccountsContainer}>
   <HeaderThree Titles={'MY ACCOUNT'} navigate={'Home'} />
   <View style={styles.Avater}>
    <View style={styles.AvaterImage}>
     <Avatar
      size={140}
      rounded
      source={require('../image/john.png')}
      title="Profile"
      containerStyle={{ backgroundColor: 'grey' }}>
      <View style={styles.AvaterAccessoryIcon}>
       <Text>
        <Ionicons name="camera-outline" size={25} />
       </Text>
      </View>
     </Avatar>
    </View>
   </View>

   <View style={styles.AvaterID}>
    <Text style={styles.AvaterIDText}>AGENT ID: IVA1197</Text>
   </View>

   <View style={styles.AvaterID2}>
    <Text style={styles.AvaterIDText2}>Kelechi Adekunle</Text>
   </View>


   <TouchableOpacity style={styles.AvaterIDInfo} onPress={() => navigation.navigate('PersonalInformation')}>
    <View style={styles.AvaterIDColor}>
     <Text style={styles.colorAvater}>
      <Feather name="user" size={12} />
     </Text>
    </View>
    <View style={styles.infoArrowLeft} >
     <View >
      <Text style={styles.AvaterIDColorText}>Personal information</Text>
     </View>
     <View style={styles.arrowrightMove}>
      <Text >
       <MaterialIcons style={styles.arrowrightColor} name="keyboard-arrow-right" size={25} />
      </Text>
     </View>
    </View>
   </TouchableOpacity>

   <TouchableOpacity style={styles.AvaterIDInfo} onPress={() => navigation.navigate('PasswordSecurity')}>
    <View style={styles.AvaterIDColor}>
     <Text style={styles.colorAvater}>
      <Feather name="lock" size={12} />
     </Text>
    </View>
    <View style={styles.infoArrowLeft} >
     <View >
      <Text style={styles.AvaterIDColorText}>Security</Text>
     </View>
     <View style={styles.arrowrightMove}>
      <Text >
       <MaterialIcons style={styles.arrowrightColor} name="keyboard-arrow-right" size={25} />
      </Text>
     </View>
    </View>
   </TouchableOpacity>

   <TouchableOpacity style={styles.AvaterIDInfo} onPress={() => navigation.navigate('Support')}>
    <View style={styles.AvaterIDColor}>
     <Text style={styles.colorAvater}>
      <Feather name="headphones" size={12} />
     </Text>
    </View>
    <View style={styles.infoArrowLeft}>

     <View >
      <Text style={styles.AvaterIDColorText}>Contact support</Text>
     </View>
     <View style={styles.arrowrightMove}>
      <Text >
       <MaterialIcons style={styles.arrowrightColor} name="keyboard-arrow-right" size={25} />
      </Text>
     </View>
    </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.AvaterIDInfo2} onPress={() => navigation.navigate('Login')}>

    <Text style={styles.logoutText}>LOGOUT</Text>
   </TouchableOpacity>
   <Footer />
  </SafeAreaView>
 );
};

export default Accounts;



const styles = StyleSheet.create({
 logoutText: {

  color: '#fff',
  fontSize: 16,
  fontFamily: 'Poppins_600SemiBold'
 },

 arrowrightMove: {
  position: 'absolute',
  left: arrow3,
 },

 arrowrightColor: {
  color: '#B1B5C5',
 },

 infoArrowLeft: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',

 },
 colorAvater: {
  color: '#007AFF',
 },

 AvaterIDColorText: {
  fontSize: 12,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Poppins_600SemiBold'
 },

 AvaterIDColor: {
  width: 30,
  height: 30,
  backgroundColor: '#D9E8FD',
  borderRadius: 50,
  margin: 5,
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#007AFF'
 },

 AvaterIDInfo2: {
  height: 42,
  borderColor: '#BEC3D5',
  borderWidth: 0.8,
  alignSelf: 'center',
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  width: WIDTH3,
  justifyContent: 'center',
  backgroundColor: '#007AFF'
 },
 AvaterIDInfo: {
  height: 42,
  borderColor: '#BEC3D5',
  borderWidth: 0.8,
  alignSelf: 'center',
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  width: WIDTH3,
 },


 AvaterIDText: {
  textAlign: 'center',
  fontFamily: 'Poppins_400Regular',
  color: '#007AFF'
 },
 AvaterIDText2: {
  textAlign: 'center',
  fontSize: 24,
  color: '#04224E',
  fontFamily: 'Poppins_600SemiBold'
 },

 AvaterID: {
  width: 130,
  height: 18,
  backgroundColor: '#D9E8FD',
  alignSelf: 'center',
  marginTop: 15
 },
 AvaterID2: {
  alignSelf: 'center',
  marginTop: 8,
  marginBottom: Platform.OS === 'android' ? 20 : 42,

 },


 AvaterAccessoryIcon: {
  height: 35,
  width: 35,
  position: 'absolute',
  right: -5,
  bottom: 20,
  backgroundColor: '#fff',
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center'
 },

 AvaterImage: {
  justifyContent: 'center',
  alignItems: 'center',
 },

 Avater: {
  height: 175,
  width: 175,
  backgroundColor: '#D9E8FD',
  marginTop: 8,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 100,
 },

 AccountsContainer: {

  height: '100%',
  flexDirection: 'column',
  backgroundColor: '#fff'
 },
})