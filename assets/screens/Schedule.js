import React from 'react';
import HeaderTwo from '../components/HeaderTwo';
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import Footer from '../components/Footer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dimensions } from "react-native";
export const WIDTH2 = Dimensions.get('window').width - 40
export const arrow2 = Dimensions.get('window').width - 125



const Schedule = () => {
    return (
        <SafeAreaView style={styles.ScheduleContainer}>
            <HeaderTwo Titles={'SCHEDULES'} />
            <ScrollView style={styles.ScheduleScrollView}>

                <View style={styles.ScheduleView}>
                    <View style={styles.ScheduleNameUp}>
                        <Text style={styles.ScheduleTextAlign}>
                            <AntDesign style={styles.idcard} name="idcard" size={10} />
                        </Text>
                    </View>
                    <View style={styles.ScheduleNameContainer}>
                        <View>
                            <Text style={styles.ScheduleNameTop}>Desmond Kelvin
                                <Text style={styles.ScheduleNameTop2}>₦2,500</Text>
                            </Text>
                            <Text style={styles.ScheduleNameBottom}>Employee verification (2hrs ago)</Text>
                        </View>
                        <View style={styles.ScheduleNameArrow}>
                            <Text>
                                <MaterialIcons style={styles.ScheduleArrowright} name="keyboard-arrow-right" size={25} />
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.ScheduleView}>
                    <View style={styles.ScheduleNameUp2}>
                        <Text style={styles.ScheduleTextAlign2}>
                            <Entypo style={styles.idcard2} name="location" size={10} />
                        </Text>
                    </View>
                    <View style={styles.ScheduleNameContainer}>
                        <View>
                            <Text style={styles.ScheduleNameTop}>Bukola Henry
                                <Text style={styles.ScheduleNameTop2}>₦2,500</Text>
                            </Text>
                            <Text style={styles.ScheduleNameBottom}>Address verification (2hrs ago)</Text>
                        </View>
                        <View style={styles.ScheduleNameArrow}>
                            <Text>
                                <MaterialIcons style={styles.ScheduleArrowright} name="keyboard-arrow-right" size={25} />
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
};

export default Schedule;


const styles = StyleSheet.create({

    ScheduleArrowright: {
        color: '#B1B5C5',
    },

    ScheduleTextAlign: {
        textAlign: 'center',
        color: '#0D8B8B'
    },
    ScheduleTextAlign2: {
        textAlign: 'center',
        color: '#007AFF'
    },

    ScheduleScrollView: {
        marginTop: 20
    },

    ScheduleNameTop2: {
        fontSize: 10,
        fontWeight: '400',
        paddingEnd: 10,
        // paddingLeft: 10
        color: 'red',
        backgroundColor: '#FEEAEA',

    },
    ScheduleNameTop: {
        fontSize: 11,
        fontWeight: 'bold',
        marginRight: '5%'
    },


    ScheduleNameBottom: {
        color: '#BEC3D5',
    },

    ScheduleNameArrow: {
        position: 'absolute',
        left: arrow2,
        marginTop: 4
    },

    ScheduleNameUp2: {
        height: 30,
        width: 30,
        backgroundColor: '#D9E8FD',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    ScheduleNameUp: {
        height: 30,
        width: 30,
        backgroundColor: '#D9FDFB',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    ScheduleNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    ScheduleView: {
        height: 42,
        borderColor: '#aaa',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        width: WIDTH2,
    },

    ScheduleContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff'
    },
})

