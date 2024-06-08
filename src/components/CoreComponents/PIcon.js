import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const PIcon = ({name, size, color, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className={style}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default memo(PIcon);

const styles = StyleSheet.create({});
