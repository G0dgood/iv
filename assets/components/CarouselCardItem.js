import React from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
export const SLIDER_WIDTH = Dimensions.get('window').width + 130
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {

    return (
        <View style={styles.container} key={index}>
            <Text style={styles.image}><Ionicons style={styles.fingerHome} name="finger-print" size={80} /></Text>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}><Text style={styles.cent}></Text>{item.body}
                <Text style={styles.cent}></Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        width: ITEM_WIDTH,
        height: 140,
        paddingBottom: 40,
    },

    fingerHome: {
        fontSize: 220,
        overflow: 'visible',
        padding: 10,
    },
    cent: {
        fontSize: 25,
    },
    image: {
        width: 200,
        height: 190,
        color: 'rgba(255,255,255,0.05)',
        left: 200,
        bottom: -50,
        overflow: 'visible',
        position: 'absolute',
        transform: [{ rotate: ' -20deg' }],
    },
    header: {
        fontSize: 24,
        // fontWeight: "bold",
        textAlign: 'center',
        position: 'absolute',
        top: 20, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        color: '#fff'
    },
    body: {
        color: "#222",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        position: 'absolute',
        top: 55, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        color: '#fff',
    }
})

export default CarouselCardItem