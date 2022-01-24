import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import HeaderTwo from '../components/HeaderTwo';
import Footer from '../components/Footer';

const Accounts = () => {
    return (
        <SafeAreaView style={styles.AccountsContainer}>
            <HeaderTwo Titles={'MY ACCOUNT'} />
            <Text>
                page in progress!
            </Text>
            <Footer />
        </SafeAreaView>
    );
};

export default Accounts;



const styles = StyleSheet.create({
    AccountsContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff'
    },
})