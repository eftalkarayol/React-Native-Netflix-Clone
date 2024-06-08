import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';

const LogoImage = ({style}) => {
  return (
    <View
      style={[
        {
          width: 100,
          height: 100,
          borderRadius: 10,
          position: 'relative',
        },
        style,
      ]}>
      <Image
        source={{uri: images.xmen}}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
      <Image
        source={require('../../assets/images/netflixlogo.png')}
        style={{
          width: 20,
          height: 20,
          position: 'absolute',
          top: 10,
          left: 5,
        }}
      />
    </View>
  );
};

export default LogoImage;

const styles = StyleSheet.create({});
