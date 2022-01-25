import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const HeaderThree = ({ Titles }) => {



 const navigation = useNavigation();

 return (
  <SafeAreaView style={styles.mainContainerHeaderThree}>
   <View>
    <Text style={styles.headerText} onPress={() => navigation.navigate('Home')}>
     <AntDesign style={styles.arrowleft} name="arrowleft" size={30} />
    </Text>
   </View>
   <View>
    <Text style={styles.headerTitle}>{Titles}</Text>
   </View>
   <TouchableOpacity >
    <AntDesign style={styles.imageHeader} name="infocirlce" size={30} onPress={() => navigation.navigate('AboutUs')} />
   </TouchableOpacity>

  </SafeAreaView>
 )
};

export default HeaderThree;


const styles = StyleSheet.create({

 headerTitle: {
  marginTop: 30,
  textAlign: 'center',
  fontWeight: '600',

 },

 arrowleft: {
  marginLeft: 20,
 },
 mainContainerHeaderThree: {
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 20,
  paddingTop: Platform.OS === 'android' ? 25 : 0,
 },

 imageHeader: {
  width: 40,
  height: 40,
  color: '#007AFF'
 },



});