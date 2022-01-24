import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {

    const navigation = useNavigation();

    return <View style={styles.mainContainer}>

        <Text style={styles.headerText} onPress={() => navigation.navigate('Notification')}>
            <MaterialIcons name="notifications-on" size={35} />
        </Text>
        <View style={styles.profileImage}>
            <ImageBackground style={styles.imageHeader} source={require('../image/john.png')} />
        </View>
    </View>
};

export default Header;



const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    imageHeader: {
        width: 40,
        height: 40,
    },

    headerText: {
        fontSize: 15,

    },
    profileImage: {
        borderRadius: 5,
        width: 40,
        height: 40,
        overflow: 'hidden'
    }

});