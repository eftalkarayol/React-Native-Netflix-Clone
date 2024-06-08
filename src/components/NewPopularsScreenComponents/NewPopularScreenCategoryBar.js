import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import CategoryItem from './CategoryItem';
import {PopularsCategory} from '../../utils/constants';
import {DataContext} from '../../context/context';

const NewPopularScreenCategoryBar = () => {
  const {setCatIndex} = useContext(DataContext);
  return (
    <View className={' w-full '}>
      <FlatList
        data={PopularsCategory}
        horizontal
        renderItem={({item, index}) => (
          <CategoryItem
            source={item.categoryImage}
            catName={item.categoryName}
            onPress={() =>
              setCatIndex({name: item.categoryName, url: item.categoryUrl})
            }
          />
        )}
      />
    </View>
  );
};

export default NewPopularScreenCategoryBar;

const styles = StyleSheet.create({});
