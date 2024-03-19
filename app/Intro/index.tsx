import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

const Intro = ({onNavigate, isLandscape}: any) => {
  return (
    <ImageBackground
      source={{uri: 'https://logo-assets.playgen.io/playgen/cover_2.png'}}
      resizeMode="cover"
      className="items-start justify-end flex-1 pb-4 pl-6">
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        className="absolute bottom-0 left-0 right-0 h-[300px] "
      />
      <View
        className="mt-5 z-[100] gap-0"
        style={{flexDirection: 'row', alignItems: 'flex-end', gap: 15}}>
        <View>
          <Button
            title="Colors"
            onPress={() => {
              onNavigate('Colors');
            }}
          />

          <Button
            title="Fonts"
            onPress={() => {
              onNavigate('Fonts');
            }}
          />
        </View>
        <View>
          <Button
            title="Animations"
            onPress={() => {
              onNavigate('Progress');
            }}
          />
          <Button
            title="Confetti"
            onPress={() => {
              onNavigate('Confetti');
            }}
          />
        </View>
        <View>
          <Button
            title="Gradient"
            onPress={() => {
              onNavigate('Gradient');
            }}
          />

          <Button
            title="FoV"
            onPress={() => {
              onNavigate('Ruler');
            }}
          />
        </View>
      </View>
      <Text className="text-4xl z-[100] font-black tracking-tighter text-white font-heading">
        playgen<Text className="font-light">.io</Text>
      </Text>
      <Text className="text-xl z-[100] tracking-tighter text-white font-heading">
        native kit
      </Text>
    </ImageBackground>
  );
};

export default Intro;
