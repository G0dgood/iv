import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Header = () => {
    return <View style={styles.mainContainer}>

        <Text style={styles.headerText}>
            <MaterialIcons name="notifications-on" size={40} />

        </Text>
        <ImageBackground style={styles.imageHeader} source={require('../image/john.png')} />
    </View>
};

export default Header;



const styles = StyleSheet.create({
    mainContainer: {

        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    imageHeader: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },

    headerText: {
        fontSize: 16,

    }

});