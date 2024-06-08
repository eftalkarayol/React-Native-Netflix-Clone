import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import NewPopularsScreenHeader from '../../components/NewPopularsScreenComponents/NewPopularsScreenHeader';
import TrailerCard from '../../components/NewPopularsScreenComponents/TrailerCard';
import {DataContext} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NewPopularsScreen = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {catIndex} = useContext(DataContext);
  const navigation = useNavigation();

  //Önbellek sorgulama anahtarı
  const CACHE_KEY = 'movies_cache';

  const cacheMovies = async moviesData => {
    try {
      const jsonData = JSON.stringify(moviesData);
      await AsyncStorage.setItem(catIndex.url, jsonData);
    } catch (error) {
      console.log('cacheMovies', error);
    }
  };

  const getCachedMovies = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(catIndex.url);
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.log('getCachedMovies', error);
    }
  };

  const removeCache = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('', error);
    }
  };
  const getMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmMjc2N2NiNjdhYTE1MTJjNmMyYjViYjc1ZmVjOSIsInN1YiI6IjY2Mzc1YmQ4NjY1NjVhMDEyMzE1YzczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6f2bXN_8YvW-CQY9qsTjz7TJt8_ddmzASYOuvL4c_Q',
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${catIndex.url}`,
        options,
      );
      if (!response.ok) {
        throw new Error('Bağlantı Hatası!');
      }
      const data = await response.json();
      setMovies(data.results);
      cacheMovies(data.results);
    } catch (error) {
      console.log('', error);
    } finally {
      setIsLoading(false);
    }
  };

  // prev == previous yani bir önceki demek
  const [prevCatIndexUrl, setPrevCatIndexUrl] = useState(null);

  useEffect(() => {
    if (prevCatIndexUrl !== catIndex.url) {
      setPrevCatIndexUrl(catIndex.url);
    }
    getCachedMovies().then(cachedMovies => {
      if (cachedMovies) {
        setMovies(cachedMovies);
        setIsLoading(false);
      } else {
        getMovies();
      }
    });
  }, [catIndex.url, prevCatIndexUrl]);
  // console.log(JSON.stringify(movies, null, 2));
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-black">
      <NewPopularsScreenHeader />
      {/* <Button title="cacheyi temizle" onPress={() => removeCache()} />
      <Button title="getir" onPress={() => getCachedMovies()} /> */}
      <FlatList
        data={movies}
        renderItem={({item}) => {
          return (
            <TrailerCard
              movieInfo={item}
              onPress={() => navigation.navigate('DetailScreen', {movie: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default NewPopularsScreen;

const styles = StyleSheet.create({});
