import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeScreenComponents/HomeHeader';
import HomeFilterBar from '../../components/HomeScreenComponents/HomeFilterBar';
import DailyTrend from '../../components/HomeScreenComponents/DailyTrend';
import HomeCard from '../../components/HomeScreenComponents/HomeCard';
const HomeScreen = () => {
  return (
    <View className="bg-gray-900 flex-1">
      <HomeHeader />

      <View className="flex-1">
        <ScrollView>
          <HomeFilterBar />
          <DailyTrend />
          <HomeCard categoryTitle={`Netflix'te Popüler`} />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
