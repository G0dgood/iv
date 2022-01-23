import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import sliderData from '../components/data';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;



const images = [
  "../image/dark-logo.png",
  "../favicon.png",
  "../image/fingerprint.png"
];

const title = [
  {
    title: 'Amount Earned',
    amount: '105,000',
    image: '../image/fingerprint.png'
  },
  {
    title: 'Total Verifications',
    amount: '75',
    image: '../image/fingerprint.png'
  },
  {
    title: 'Pending Verifications',
    amount: '10',
    image: '../image/fingerprint.png'
  },
]

console.log(title)
export default class CarouselBanner extends React.Component {



  renderPage(item, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight }} source={require('../image/fingerprint.png')} />

        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          autoplay={false}
          loop
          data={title}
          index={0}
          pageSize={BannerWidth}
          activePageIndicatorStyle={styles.Indicator} >
          {title.map((item, index) => this.renderPage(item, index))}
        </Carousel>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    borderRadius: 10,
    height: 150,
    color: 'white'
  },

  Indicator: {
    backgroundColor: 'white'
  }
});