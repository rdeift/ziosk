import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';

const Fonts = ({onNavigate, isLandscape}: any) => {
  return (
    <View className="space-y-5 items-start justify-start p-6  bg-[#1f1f1d] h-full">
      <View className="">
        <Text className="text-5xl font-bold text-white font-heading">
          Fonts
        </Text>
      </View>

      <View
        className="mt-4 space-y-0"
        style={isLandscape ? {flexDirection: 'row', gap: 25} : {}}>
        <View>
          <View className="flex-row items-center gap-3">
            <Text className="text-lg font-light text-white ">
              Enable your game strategy
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Text className="text-lg text-white font-heading">
              Enable your game strategy
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Text className="text-lg font-medium text-white font-heading">
              Enable your game strategy
            </Text>
          </View>
        </View>
        <View>
          <View className="flex-row items-center gap-3">
            <Text className="text-lg font-bold text-white font-heading">
              Enable your game strategy
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Text className="text-lg font-black text-white ">
              Enable your game strategy
            </Text>
          </View>
        </View>
      </View>
      <View className="pt-6">
        <Button
          title="Back"
          width={150}
          onPress={() => {
            onNavigate('Intro');
          }}
        />
      </View>
    </View>
  );
};

export default Fonts;
