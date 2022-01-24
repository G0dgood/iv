import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-gesture-handler';


const Notification = () => {


 const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
 ) => {
  if (Platform.OS === 'ios') {
   styles.boxShadow = {
    shadowColor: shadowColorIos,
    shadowOffset: { width: xOffset, height: yOffset },
    shadowOpacity,
    shadowRadius,
   };
  } else if (Platform.OS === 'android') {
   styles.boxShadow = {
    elevation,
    shadowColor: shadowColorAndroid,
   };
  }
 };

 generateBoxShadowStyle(-3, 1, '#171717', 0.2, 4, 4, '#171717');

 return (
  <SafeAreaView style={styles.NotificationContainer} >
   <HeaderTwo Titles={'NOTIFICATION'} />
   <ScrollView>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon}><Text style={styles.IconPadding}><MaterialCommunityIcons style={styles.notificationIcon1} name="bank" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>You have received payment of ₦2,000
        for the verification of Desmond Kelvin.</Text>
       <Text style={styles.NotifyTextdown}>Dec, 10th 2021 (2PM)</Text>
      </View>
     </View>

    </View>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon2}><Text style={styles.IconPadding}><SimpleLineIcons style={styles.notificationIcon2} name="shield" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>Employee verification for Blessing James was not approved. </Text>
       <Text style={styles.NotifyTextdown}>Dec, 8th 2021 (1PM)</Text>
      </View>
     </View>

    </View>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon3}><Text style={styles.IconPadding}><MaterialCommunityIcons style={styles.notificationIcon3} name="shield-check-outline" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>Address verification for Bola King
        was approved.</Text>
       <Text style={styles.NotifyTextdown}>Dec, 10th 2021 (2PM)</Text>
      </View>
     </View>

    </View>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon4}><Text style={styles.IconPadding}><MaterialCommunityIcons style={styles.notificationIcon4} name="bank" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>You have received payment of ₦1,500
        for the verification of Adaora Fred.</Text>
       <Text style={styles.NotifyTextdown}>Nov, 10th 2021 (2PM)</Text>
      </View>
     </View>

    </View>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon5}><Text style={styles.IconPadding}><AntDesign style={styles.notificationIcon5} name="database" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>Your Bio Data update request has
        been approved.</Text>
       <Text style={styles.NotifyTextdown}>Nov, 8th 2021 (2PM)</Text>
      </View>
     </View>

    </View>
    <View style={[styles.NotifyHead, styles.boxShadow]} >

     <View style={styles.Notify}>
      <View style={styles.NotifyIcon6}><Text style={styles.IconPadding}><MaterialCommunityIcons style={styles.notificationIcon6} name="bank" size={30} /> </Text>
      </View>
      <View style={styles.NotifyText}>

       <Text style={styles.NotifyTextLeft}>You have received payment of ₦2,000
        for the verification of Desmond Kelvin.</Text>
       <Text style={styles.NotifyTextdown}>Dec, 10th 2021 (2PM)</Text>
      </View>
     </View>

    </View>
   </ScrollView>
  </SafeAreaView>

 );
};

export default Notification;

const styles = StyleSheet.create({

 notificationIcon1: {
  color: '#007AFF'
 },
 notificationIcon2: {
  color: '#FC5E3B'
 },
 notificationIcon3: {
  color: '#0D8B8B'
 },
 notificationIcon4: {
  color: '#007AFF'
 },
 notificationIcon5: {
  color: '#CF56FA'
 },
 notificationIcon6: {
  color: '#007AFF'
 },

 NotifyTextdown: {
  color: '#aaa',
  paddingTop: 5
 },

 NotifyText: {
  marginRight: 40
 },


 IconPadding: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 5,
  height: 35,
  position: 'relative',
  left: 0,
  right: 0,
  top: 2,
  bottom: 0,
 },
 NotifyTextLeft: {
  paddingRight: 25,
 },
 immerTextLeft: {
 },

 NotificationContainer: {
  backgroundColor: '#fff',
  flex: 1,
 },

 TitleHead: {
  textAlign: 'center',
  fontWeight: '600',
 },

 Notify: {
  flexDirection: 'row',
  // marginRight: 20,
  borderRadius: 5,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 12
 },

 NotifyIcon: {
  backgroundColor: '#D9E8FD',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },
 NotifyIcon2: {
  backgroundColor: '#FEEAEA',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },
 NotifyIcon3: {
  backgroundColor: '#D9FDFB',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },
 NotifyIcon4: {
  backgroundColor: '#D9E8FD',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },
 NotifyIcon5: {
  backgroundColor: '#F1D9FD',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },
 NotifyIcon6: {
  backgroundColor: '#D9E8FD',
  marginRight: 15,
  // marginLeft: 50,
  padding: 10,
  borderRadius: 50,
 },

 NotifyHead: {
  marginTop: 20,
  backgroundColor: 'white',
  // shadowRadius: 10,
  // padding: 25,
  borderRadius: 5,
  elevation: 5,
  marginLeft: 20,
  marginRight: 20,

  // padding: 30
  // paddingVertical: 30,
 }

})