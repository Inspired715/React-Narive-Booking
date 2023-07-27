import React from 'react';
import { View,ImageBackground, StyleSheet, Dimensions } from 'react-native';
import background from '../assets/background/bg.png'

const screenWidth = Dimensions.get('window').width;
  
const BackgroundImg = () => {
  return (
    <View>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.img}>
      </ImageBackground>
    </View>
  );
};
  
export default BackgroundImg;
  
const styles = StyleSheet.create({
  img: {
    height: 200,
    width: screenWidth
  }
});