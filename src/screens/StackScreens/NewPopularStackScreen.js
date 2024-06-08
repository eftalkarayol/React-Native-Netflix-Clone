import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewPopularsScreen from '../AppScreens/NewPopularsScreen';
import SearchStackScreen from './SearchStackScreen';
import DetailScreen from '../AppScreens/DetailScreen';

const NewPopularStackScreen = () => {
  const NPStack = createNativeStackNavigator();
  return (
    <NPStack.Navigator screenOptions={{headerShown: false}}>
      <NPStack.Screen name="NewPopularsScreen" component={NewPopularsScreen} />
      <NPStack.Screen name="SearchStackScreen" component={SearchStackScreen} />
      <NPStack.Screen name="DetailScreen" component={DetailScreen} />
    </NPStack.Navigator>
  );
};

export default NewPopularStackScreen;

const styles = StyleSheet.create({});
