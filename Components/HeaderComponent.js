import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const Header = () => {
  return (
    <View>
      <Image style={styles.imageStyle} source={require('../assets/5637342.jpg')} />
    </View>
  );
};


const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  imageStyle: {
    height: 80,
    width: deviceWidth,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center'
  }
});

export default Header;