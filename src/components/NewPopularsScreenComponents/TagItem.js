import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TagItem = ({label, index}) => {
  return (
    <View className="relative flex-row mr-5">
      {!index == 0 && (
        <Text
          className={'text-white absolute'}
          style={{left: -5, fontSize: 30, bottom: 0}}>
          .
        </Text>
      )}
      <Text className="text-white">{label}</Text>
    </View>
  );
};

export default TagItem;

const styles = StyleSheet.create({});
