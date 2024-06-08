import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import {DataProvider} from './src/context/context';

const App = () => {
  const theme = 'dark';

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme === 'light' ? '#fff' : '#000'}}>
      <StatusBar
        backgroundColor={theme === 'light' ? '#fff' : '#000'}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <DataProvider>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <BottomTabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </DataProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
