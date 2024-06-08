import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import PIcon from '../CoreComponents/PIcon';
import {images} from '../../utils/constants';
import {DataContext} from '../../context/context';

const SearchCard = ({onPress, searchInfo}) => {
  const {searchedMovie, setSearchedMovie} = useContext(DataContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-between items-center m-2">
      <View className="flex-row items-center" style={{gap: 10}}>
        <Image
          source={{
            uri: searchInfo
              ? `https://image.tmdb.org/t/p/original${searchInfo?.backdrop_path}`
              : images.posterOne,
          }}
          className="w-28 h-16 rounded-lg "
        />
        <Text className="text-white text-lg font-semibold">
          {searchInfo ? searchInfo?.title : 'X-Men'}
        </Text>
      </View>
      <PIcon name={'play-circle-outline'} color={'white'} size={30} />
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({});
