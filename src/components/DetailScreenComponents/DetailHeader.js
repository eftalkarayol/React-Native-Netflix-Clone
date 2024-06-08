import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PIcon from '../CoreComponents/PIcon';

const DetailHeader = ({header}) => {
  return (
    <View className="" style={{gap: 5}}>
      <View className="flex-row  ">
        <Image
          source={require('../../assets/images/netflixlogo.png')}
          className="w-6 h-6"
        />
        <Text className="text-gray-400 " style={{letterSpacing: 4}}>
          Dizi
        </Text>
      </View>
      <Text className="text-white text-3xl font-extrabold">{header}</Text>

      <View className=" flex-row " style={{gap: 12}}>
        <Text className="text-gray-400 ">2021</Text>
        <Text className="text-gray-400 bg-gray-700 px-1 rounded ">18+</Text>
        <Text className="text-gray-400 ">2 Sezon</Text>
        <View className="border border-gray-400 ">
          <Text
            style={{fontSize: 12, padding: 2, marginTop: -1}}
            className="text-gray-400 ">
            HD
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({});
