import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';

const Avatar = ({image = images.avatarImages}) => {
  return (
    <View>
      <Image className="w-7 h-7 rounded-lg " source={{uri: image}} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
