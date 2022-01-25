import React from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const HeaderTwo = ({ Titles }) => {



    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>

                <Text style={styles.headerText} onPress={() => navigation.navigate('Home')}>
                    <AntDesign style={styles.arrowleft} name="arrowleft" size={30} />
                </Text>
            </View>
            <View>
                <Text style={styles.headerTitle}>{Titles}</Text>
            </View>
            <TouchableOpacity style={styles.profileImage} onPress={() => navigation.navigate('Accounts')}>
                <ImageBackground style={styles.imageHeader} source={require('../image/john.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default HeaderTwo;


const styles = StyleSheet.create({
    headerTitle: {
        marginTop: 30,
        textAlign: 'center',
        fontWeight: '600',

    },

    arrowleft: {
        marginLeft: 20,
    },
    mainContainer: {

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
    },


    profileImage: {
        borderRadius: 5,
        width: 40,
        height: 40,
        overflow: 'hidden'
    }

});