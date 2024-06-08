import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import VideoHeader from './VideoHeader';
import {images} from '../../utils/constants';
import VideoInfo from './VideoInfo';
import FastImage from 'react-native-fast-image';
const TrailerCard = ({movieInfo, onPress}) => {
  // console.log(movieInfo);
  return (
    <TouchableOpacity onPress={onPress} className="flex-row">
      <View className="" style={{maxWidth: '15%', minWidth: '10%'}}>
        <Text className="text-white" style={{fontWeight: 500}}>
          AĞU
        </Text>
        <Text className="text-white" style={{fontWeight: 900, fontSize: 40}}>
          24
        </Text>
      </View>
      <View style={{width: '80%'}} className="p-3">
        <View className=" rounded-lg" style={{height: 300}}>
          {/* <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`,
            }}
            style={{height: 300, width: '100%', resizeMode: 'cover'}}
            className="rounded-lg"
          /> */}
          <FastImage
            style={{height: 300, width: '100%', borderRadius: 15}}
            source={{
              uri: `https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View>
          <VideoHeader videoName={movieInfo.title} />
          <VideoInfo
            overview={movieInfo.overview}
            releasedate={movieInfo.release_date}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TrailerCard;

const styles = StyleSheet.create({});
