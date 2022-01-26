import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Pressable } from 'react-native';
import { Dimensions } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const Footer = () => {

 const navigation = useNavigation();



 const route = useRoute();


 return (
  <View style={styles.footerContainer}>
   <View onPress={() => navigation.navigate('Reports')}>
    <Text style={route.name === 'Home' ? styles.activeMenu : styles.menuIcon} onPress={() => navigation.navigate('Home')}>
     <Ionicons style={styles.arrowrightName} name="qr-code" size={22} />
    </Text>
    <Text style={route.name === 'Home' ? styles.menuIconTextActive : styles.menuIconText}>Dashboard</Text>
   </View>
   <View onPress={() => navigation.navigate('Reports')}>
    <Text style={route.name === 'Schedule' ? styles.activeMenu : styles.menuIcon} onPress={() => navigation.navigate('Schedule')}>
     <FontAwesome style={styles.arrowrightName} name="calendar" size={22} /></Text>
    <Text style={route.name === 'Schedule' ? styles.menuIconTextActive : styles.menuIconText}>Schedules</Text>
   </View>
   <View onPress={() => navigation.navigate('Reports')}>
    <Text style={route.name === 'Reports' ? styles.activeMenu : styles.menuIcon} onPress={() => navigation.navigate('Reports')}>
     <MaterialCommunityIcons style={styles.arrowrightName} name="clipboard-text-play-outline" size={22} />
    </Text>
    <Text style={route.name === 'Reports' ? styles.menuIconTextActive : styles.menuIconText}>Reports</Text>
   </View>
   <View onPress={() => navigation.navigate('Reports')}>
    <Text style={route.name === 'Accounts' ? styles.activeMenu : styles.menuIcon} onPress={() => navigation.navigate('Accounts')}>
     <FontAwesome style={styles.arrowrightName} name="user-circle-o" size={22} />
    </Text>
    <Text style={route.name === 'Accounts' ? styles.menuIconTextActive : styles.menuIconText}>Account</Text>
   </View>
  </View>
 );
};

export default Footer;



const styles = StyleSheet.create({

 footerContainer: {
  flex: 1,
  position: 'absolute',
  width: BannerWidth,
  bottom: 0,
  height: Platform.OS === 'android' ? 60 : 70,
  paddingBottom: Platform.OS === 'android' ? 5 : 15,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#BEC3D5',
  overflow: 'hidden',
  elevation: 5,
  backgroundColor: '#fff',
  borderRadius: Platform.OS === 'android' ? 5 : 0,
 },


 activeMenu: {
  textAlign: 'center',
  color: '#007AFF',
  marginBottom: 1
 },

 menuIcon: {
  textAlign: 'center',
  color: '#BEC3D5',
  marginBottom: 1

 },
 menuIconTextActive: {
  fontWeight: '600',
  color: '#007AFF',
  fontSize: 10,

 },
 menuIconText: {
  fontWeight: '600',
  color: '#BEC3D5',
  fontSize: 10
 }
})