import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import PIcon from '../CoreComponents/PIcon';
import Avatar from '../CoreComponents/Avatar';
import {images} from '../../utils/constants';
import NewPopularScreenCategoryBar from './NewPopularScreenCategoryBar';
import {useNavigation} from '@react-navigation/native';
const NewPopularsScreenHeader = () => {
  const navigation = useNavigation();

  return (
    //Header için ana taşıyıcı
    <View>
      <View className="width-full flex-row  justify-between p-2">
        {/*sol taraf */}
        <View>
          <Text className="text-white font-bold text-xl">Yeni ve Popüler</Text>
        </View>

        <View className="flex-row " style={{gap: 20}}>
          <PIcon
            onPress={() => navigation.navigate('SearchStackScreen')}
            name={'search'}
            color={'white'}
            size={24}
          />
          <PIcon name={'notifications-outline'} color={'white'} size={24} />
          <Avatar image={images.avatarImages} />
        </View>
      </View>

      {/*Kategoriler için ana taşıyıcı */}
      <View>
        <NewPopularScreenCategoryBar />
      </View>
    </View>
  );
};

export default memo(NewPopularsScreenHeader);

const styles = StyleSheet.create({});
