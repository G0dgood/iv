import React from 'react';
import HeaderTwo from '../components/HeaderTwo';
import { StyleSheet, View, SafeAreaView } from "react-native";
import Footer from '../components/Footer';

const Schedule = () => {
    return (
        <SafeAreaView style={styles.ScheduleContainer}>
            <HeaderTwo Titles={'SCHEDULES'} />
            <Footer />
        </SafeAreaView>
    );
};

export default Schedule;


const styles = StyleSheet.create({
    ScheduleContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff'
    },
})

