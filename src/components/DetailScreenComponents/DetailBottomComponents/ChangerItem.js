import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ChangerItem = ({onPress, title, changer}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border-t-4 ${
        changer === title ? 'border-red-800' : null
      } items-center justify-center w-24`}
      style={{width: 80}}>
      <Text className="text-white mt-1" style={{fontSize: 15}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ChangerItem;

const styles = StyleSheet.create({});
