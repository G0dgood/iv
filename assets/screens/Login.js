import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {


  return (
    <KeyboardAvoidingView style={styles.container1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="auto" />


      <View style={styles.logColor1} >
        <Ionicons style={styles.fingerPrint} name="finger-print" size={93} />
        <Image style={styles.loginLogo} source={require('../image/logo-white.png')} />
        <Text style={styles.text2}>We're more than just a workplace.
          We're an evolving family</Text>
      </View>


      <View style={styles.logColor2} >
        <Text style={styles.logintext1}>Account Login</Text>
        <Text style={styles.logintext2}>Login using correct credentials</Text>
        <TextInput placeholder='Agent ID' placeholderTextColor="#20549D" style={styles.logininput} />
        <TextInput placeholder='Password' placeholderTextColor="#20549D" style={styles.logininput2} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.text3} onPress={() => navigation.navigate('PasswordReset')}>Forgot Password?</Text>
      </View>


    </KeyboardAvoidingView>
  );
}
export default Login


const styles = StyleSheet.create({
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
    top: -50
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
    marginTop: 26,
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
    marginTop: 32,
    fontFamily: 'Poppins_600SemiBold'
  },
  inputView: {
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
  },

  input: {
    height: 40,
    fontSize: 13,
    padding: 4,
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
    marginTop: 27,
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
