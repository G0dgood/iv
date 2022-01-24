import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import Header from '../components/Header'
import BannerSlider from './BannerSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/Footer'

const Home = () => {

 return (

  <SafeAreaView style={styles.mainContainer}>
   <View style={styles.mainScroll}>
    <View>
     <Header />
     <Text style={styles.morning} >GOOD MORNING</Text>
     <Text style={styles.UserName} >Kelechi Adekunle</Text>
    </View>

    <BannerSlider />
   </View>
   <View style={styles.Badge}>
    <Text style={styles.schedule}>New verification schedule </Text>
    <Badge value="10" status="warning" />
   </View>
   <View style={styles.verifications}>
    <Text style={styles.schedule1}>Latest verifications</Text>
    <View style={styles.keyboardarrow}>
     <Text style={styles.Viewall}>View all</Text>
     <Text>
      <MaterialIcons style={styles.arrowright} name="keyboard-arrow-right" size={25} />
     </Text>
    </View>
   </View>
   {/* Address Section */}
   <ScrollView style={styles.ViewLast}>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon}>
      <Text ><AntDesign style={styles.idcard} name="idcard" size={17} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Desmond Kelvin</Text>
      <Text style={styles.downName}>Employee verification (2days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon2}>
      <Text ><Entypo style={styles.idcard2} name="location" size={15} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Fegor Bola</Text>
      <Text style={styles.downName}>Tenant verification (2days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon3}>
      <Text ><Ionicons style={styles.idcard3} name="business" size={17} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Blessing King</Text>
      <Text style={styles.downName}>PWA verification (2days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon2}>
      <Text ><Entypo style={styles.idcard2} name="location" size={15} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Kenneth Jennifer</Text>
      <Text style={styles.downName}>Tenant verification (2days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon}>
      <Text ><AntDesign style={styles.idcard} name="idcard" size={15} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Grace Adora</Text>
      <Text style={styles.downName}>Employee verification (3days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
    <View style={styles.LatestView}>
     <View style={styles.viewIcon4}>
      <Text ><FontAwesome5 style={styles.idcard4} name="people-arrows" size={15} /></Text>
     </View>
     <View style={styles.UpNamedownName}>
      <Text style={styles.UpName}>Bukola Adenike</Text>
      <Text style={styles.downName}>Guarantor verification (3days ago)</Text>
     </View>
     <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
    </View>
   </ScrollView>
   <Footer />
  </SafeAreaView >
 )
};

export default Home;



const styles = StyleSheet.create({
 ViewLast: {
  marginBottom: 28,
 },

 idcard: {
  color: '#0D8B8B'
 },
 idcard2: {
  color: '#51A3FF'
 },
 idcard3: {
  color: '#FD937C'
 },
 idcard4: {
  color: '#D777FB'
 },

 UpNamedownName: {
  position: 'absolute',
  left: 80
 },

 viewIcon: {
  backgroundColor: '#D9FDFB',
  padding: 15,
  borderRadius: 25,
  marginLeft: 5
 },
 viewIcon2: {
  backgroundColor: '#D9E8FD',
  padding: 15,
  borderRadius: 25,
  marginLeft: 5
 },
 viewIcon3: {
  backgroundColor: '#FEEAEA',
  padding: 15,
  borderRadius: 25,
  marginLeft: 5
 },
 viewIcon4: {
  backgroundColor: '#F1D9FD',
  padding: 15,
  borderRadius: 25,
  marginLeft: 5
 },

 downName: {
  color: '#AAA'
 },
 UpName: {
  fontSize: 14,
  fontWeight: '700'
 },

 LatestName: {
  paddingTop: 5
 },

 LatestView: {
  flexDirection: 'row',
  justifyContent: "space-between",
  marginLeft: 18,
  marginRight: 18,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#BEC3D5',
  padding: 5,
  alignItems: 'center',
  marginBottom: 10,
 },

 verifications: {
  width: '100%',
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 15,
 },

 schedule: {
  fontSize: 15
 },
 arrowrightName: {
  color: '#BEC3D5',
 },
 arrowright: {
  color: '#007AFF',
 },
 Viewall: {
  color: '#007AFF',
  fontWeight: '800'
 },
 keyboardarrow: {

  justifyContent: "space-between",
  flexDirection: 'row',
  alignItems: 'center',
 },

 Badge: {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 18,
  marginTop: 5,
  backgroundColor: "#FEEAEA",
  borderRadius: 5,
  marginLeft: 18,
  marginRight: 18,
  fontSize: 20,
  fontWeight: 'bold'
 },

 UserName: {
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
 },

 morning: {
  textAlign: 'center',
  fontSize: 16,

 },

 morning: {
  textAlign: 'center',
  fontSize: 16,

 },

 mainContainer: {
  flex: 1,
  backgroundColor: "#fff",
  paddingTop: Platform.OS === 'android' ? 25 : 0,
 },

 mainScroll: {
  padding: 20,
  maxHeight: 270,
 },
});


