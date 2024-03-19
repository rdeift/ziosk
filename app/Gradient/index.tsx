import React from 'react';
import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

const Intro = ({onNavigate}: any) => {
  return (
    <ImageBackground
      source={{uri: 'https://logo-assets.playgen.io/playgen/cover_1.png'}}
      resizeMode="cover"
      className="items-center justify-end flex-1 pb-4">
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        className="absolute bottom-0 left-0 right-0 h-[300px] "
      />
      <Text className="text-3xl font-bold text-white font-heading z-[100]">
        Gradient
      </Text>
      <View className="mt-5 z-[100]">
        <Button
          title="Back"
          width={200}
          onPress={() => {
            onNavigate('Intro');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Intro;
