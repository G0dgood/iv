import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 130
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}><Text style={styles.cent}>#</Text>{item.body}
                <Text style={styles.cent}>.00</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },

    cent: {
        fontSize: 25,
    },
    image: {
        width: ITEM_WIDTH,
        height: 130,
    },
    header: {
        color: "#222",
        fontSize: 24,
        // fontWeight: "bold",
        textAlign: 'center',
        position: 'absolute',
        top: 30, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        color: '#fff'
    },
    body: {
        color: "#222",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        position: 'absolute',
        top: 60, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',
        color: '#fff'
    }
})

export default CarouselCardItem