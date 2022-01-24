import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import Footer from '../components/Footer';


const Reports = () => {
    return (
        <SafeAreaView style={styles.ReportsContainer}>
            <HeaderTwo Titles={'REPORTS'} />
            <Text>
                page in progress!
            </Text>
            <Footer />
        </SafeAreaView>
    );
};

export default Reports;


const styles = StyleSheet.create({
    ReportsContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff'
    },
})