import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DownloadsScreenHeader from './DownloadsScreenHeader';
import SmartDownloads from './SmartDownloads';

const DownloadsScreenTop = () => {
  return (
    <View className="p-5" style={{gap: 30}}>
      <DownloadsScreenHeader />
      <SmartDownloads />
    </View>
  );
};

export default DownloadsScreenTop;

const styles = StyleSheet.create({});
