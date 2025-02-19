import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../../utils/constants';

const PosterImage = ({style, source}) => {
  return (
    <View style={[{width: 130, height: 180, alignItems: 'center'}, style]}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
          resizeMode: 'contain',
        }}
        source={{uri: source}}
      />
      <Text
        style={{
          backgroundColor: 'red',
          color: 'white',
          maxWidth: 100,
          paddingHorizontal: 7,
          paddingVertical: 2,
          borderRadius: 4,
          marginTop: -15,
          fontSize: 12,
        }}>
        Yeni Bölümler
      </Text>
    </View>
  );
};

export default PosterImage;

const styles = StyleSheet.create({});
