import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'


const Login = ({ navigation }) => {

  const [passwordShown, setPasswordShown] = useState(true);
  const [icons, setIcons] = useState('eye-off-outline');
  const togglePasswordVisiblity = () => {
    setIcons(!icons ? 'eye-outline' : 'eye-off-outline');
    if (icons === 'eye-off-outline' && passwordShown === true) {
      setIcons('eye-outline')
      setPasswordShown(false)
    }
    else {
      setIcons('eye-off-outline')
      setPasswordShown(true)
    }
  };



  return (
    <KeyboardAvoidingView style={styles.container1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>


      <View style={styles.logColor1} >
        <Animatable.View
          animation='bounceInUp'>
          <Ionicons style={styles.fingerPrint} name="finger-print" size={93} />
        </Animatable.View>
        <Image style={styles.loginLogo} source={require('../image/logo-white.png')} />
        <Text style={styles.text2}>We're more than just a workplace.
          We're an evolving family</Text>
      </View>


      <View style={styles.logColor2} >
        <Text style={styles.logintext1}>Account Login</Text>
        <Text style={styles.logintext2}>Login using correct credentials</Text>

        <View>
          <TextInput placeholder='Agent ID' placeholderTextColor="#20549D" style={styles.logininput} />
          <TextInput
            onPress={() => togglePasswordVisiblity()}
            secureTextEntry={passwordShown}
            placeholder='Password'
            placeholderTextColor="#20549D"
            style={styles.logininput2} />
          <Ionicons
            name={icons}
            size={20}
            style={styles.eyeOutline}
            onPress={() => togglePasswordVisiblity()}
            color={'#BEC3D5'} />
        </View>


        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.text3} onPress={() => navigation.navigate('PasswordReset')}>Forgot Password?</Text>
      </View>


    </KeyboardAvoidingView>
  );
}
export default Login


const styles = StyleSheet.create({

  eyeOutline: {
    position: 'absolute',
    right: 60,
    bottom: 13,
  },

  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  fingerPrint: {
    color: 'rgba(255,255,255,0.1)',
    fontSize: 214,
    transform: [{ rotate: '130deg' }],
    position: 'absolute',
    left: -100,
    top: -65
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 50,
    backgroundColor: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Poppins_600SemiBold'
  },
  text3: {
    fontSize: 16,
    textAlign: 'center',
    color: '#20549D',
    marginTop: 30,
    fontFamily: 'Poppins_600SemiBold'
  },


  logininput: {
    height: 50,
    padding: 8,
    fontSize: 16,
    borderColor: '#BEC3D5',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 25,
    fontFamily: 'Poppins_400Regular'
  },
  logininput2: {
    height: 50,
    padding: 8,
    fontSize: 16,
    borderColor: '#BEC3D5',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 25,
    fontFamily: 'Poppins_400Regular'
  },

  logintext1: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#20549D',
    fontWeight: '400',
    fontFamily: 'Poppins_800ExtraBold',
  },
  logintext2: {
    fontSize: 15,
    textAlign: 'center',
    color: '#20549D',
    fontFamily: 'Poppins_400Regular'
  },

  finger: {
    width: 250,
    height: 250,
    // marginTop: 40,
    marginLeft: 50,
  },

  text2: {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    margin: 25,
  },


  loginLogo: {
    width: 176,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 200,

  },

  logColor1: {
    flex: 1,
    backgroundColor: '#007AFF',
    width: '100%',
    height: '50%'
  },

  logColor2: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '50%'
  },
});
