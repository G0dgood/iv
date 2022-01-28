import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Support = () => {
    return (
        <SafeAreaView style={styles.SupportContainer}>
            <HeaderTwo Titles={'SUPPORT'} navigate={'Home'} />

            <View style={styles.SupportImageContainer}><Text><MaterialIcons style={styles.arrowrightColor} name="keyboard-arrow-right" size={25} /></Text></View>

        </SafeAreaView>
    );
};

export default Support;


const styles = StyleSheet.create({

    SupportImageContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,

    },

    SupportContainer: {
        backgroundColor: '#fff',
        flex: 1,
    }

})