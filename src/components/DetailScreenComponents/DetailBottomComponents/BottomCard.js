import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../../utils/constants';
import PIcon from '../../CoreComponents/PIcon';

const BottomCard = () => {
  return (
    <View style={{gap: 10}}>
      <View className="flex-row justify-between">
        <View className="flex-row" style={{gap: 15}}>
          <Image
            source={{uri: images.dailyTrend}}
            style={{
              width: 150,
              height: 75,
              resizeMode: 'stretch',
              borderRadius: 4,
            }}
          />
          <View>
            <Text className="text-white">1. Yeni Çocuk</Text>
            <Text className="text-gray-400">46 dk.</Text>
          </View>
        </View>
        <View style={{marginRight: 15}}>
          <PIcon name={'download-outline'} color={'white'} size={25} />
        </View>
      </View>
      <View className="w-18">
        <Text className="text-gray-400">
          Başlığın diğer anlamları için The Walking Dead sayfasına bakınız. The
          Walking Dead, Robert Kirkman, Tony Moore ve Charlie Adlard'ın aynı
          adlı çizgi roman serisine dayanan bir Amerikan kıyamet sonrası
          korku-dram televizyon dizisidir.
        </Text>
      </View>
    </View>
  );
};

export default BottomCard;

const styles = StyleSheet.create({});
