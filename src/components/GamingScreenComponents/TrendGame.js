import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../utils/constants';
import HeaderText from '../CoreComponents/HeaderText';
import LightContentText from '../CoreComponents/LightContentText';
import LogoImage from '../CoreComponents/LogoImage';

const TrendGame = () => {
  return (
    <View className="relative bg-black">
      <View className="w-full" style={{height: 450}}>
        <Image
          source={{uri: images.xmen}}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
        <View className="items-center" style={{marginTop: -165, zIndex: 15}}>
          <LogoImage />
          <View
            style={{zIndex: 100, alignItems: 'center', gap: 5, marginTop: 8}}>
            <HeaderText title={'X-Men Animated'} />
            <View className="flex-row">
              <Text className="text-white" style={{fontSize: 15}}>
                Gambit Origin
              </Text>
              <LightContentText content={'.'} />
              <Text className="text-white">Fantastik</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(3, 3, 18, 0.8)',
        }}></View>
    </View>
  );
};

export default TrendGame;

const styles = StyleSheet.create({});
