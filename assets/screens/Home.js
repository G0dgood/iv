import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import Header from '../components/Header'
import CarouselBanner from '../components/Carousel';
import Banner from './Bsnner';
import CarouselCards from '../components/CarouselCards'
// import Carousel from 'react-native-snap-carousel';
// import sliderData from '../components/data';
import { windowWidth } from "../utils/Dimensions";
// import { BannerSlider } from "../components/BannerSlider";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Home = () => {
 // const renderBanner = ({ item, index }) => {
 //   return <BannerSlider data={item} />
 // }

 return (

  <SafeAreaView style={styles.mainContainer}>
   <View style={styles.mainScroll}>
    <View>
     <Header />
     <Text style={styles.morning} >GOOD MORNING</Text>
     <Text style={styles.UserName} >Kelechi Adekunle</Text>
    </View>
    {/* <Carousel
          ref={(c) => { _carousel = c; }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        /> */}
    {/* <CarouselBanner /> */}
    <Banner />
   </View>
   <View style={styles.Badge}>
    <Text style={styles.schedule}>New verification schedule </Text>
    <Badge value="10" status="warning" />
   </View>
   <View style={styles.verifications}>
    <Text style={styles.schedule}>Latest verifications</Text>
    <View style={styles.keyboardarrow}>
     <Text style={styles.Viewall}>View all</Text>
     <Text>
      <MaterialIcons style={styles.arrowright} name="keyboard-arrow-right" size={30} />
     </Text>
    </View>
   </View>

   <View style={styles.LatestView}>
    <View style={styles.viewIcon}>

     <Text ><AntDesign style={styles.idcard} name="idcard" size={20} /></Text>
    </View>
    <View style={styles.UpNamedownName}>
     <Text style={styles.UpName}>Desmond Kelvin</Text>
     <Text style={styles.downName}>Employee verification (2days ago)</Text>
    </View>
    <View ><Text style={styles.LatestName}> <MaterialIcons style={styles.arrowrightName} name="keyboard-arrow-right" size={30} /></Text></View>
   </View>

  </SafeAreaView >
 )
};

export default Home;

{/* <Image source={photo}
 style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
/> */}

const styles = StyleSheet.create({

 idcard: {
  color: '#0D8B8B'
 },

 UpNamedownName: {
  position: 'relative',
  left: -15
 },

 viewIcon: {
  backgroundColor: '#D9FDFB',
  padding: 18,
  borderRadius: 25,
  marginLeft: 5
 },

 downName: {
  color: '#AAA'
 },
 UpName: {
  fontSize: 16,
  fontWeight: '800'
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
  alignItems: 'center'
 },

 verifications: {
  width: '100%',
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 20,
  fontSize: 18
 },

 schedule: {
  fontSize: 18
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
  padding: 20,
  marginTop: 30,
  backgroundColor: "#FEEAEA",
  borderRadius: 5,
  marginLeft: 18,
  marginRight: 18,
  fontSize: 24,
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
 },

 mainScroll: {
  padding: 20,
  maxHeight: 280
 },
});


// <View style={{
//  flexDirection: 'row', justifyContent: 'space-between',
//  alignItems: 'center', marginBottom: 20,
// }}>
//  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
//   <Ionicons name="finger-print" size={93} />
//   <View style={{ width: windowWidth - 220 }}>
//    <Text
//     style={{
//      color: '#333',
//      fontFamily: 'Roboto-Medium',
//      fontSize: 14,
//     }}>
//     <Ionicons name="finger-print" size={93} />
//    </Text>
//    <Text
//     numberOfLines={1}
//     style={{
//      color: '#333',
//      fontFamily: 'Roboto-Medium',
//      fontSize: 14,
//      textTransform: 'uppercase',
//     }}>
//     <Ionicons name="finger-print" size={93} />
//    </Text>
//   </View>
//  </View>