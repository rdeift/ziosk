import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';

const Colors = ({onNavigate, isLandscape}: any) => {
  return (
    <View className="items-start justify-start p-6 bg-[#1f1f1d] h-full">
      <View className="">
        <Text className="text-5xl font-bold text-white font-heading">
          Colors
        </Text>
      </View>

      <View
        className="mt-4 space-y-0"
        style={isLandscape ? {flexDirection: 'row', gap: 25} : {}}>
        <View>
          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-10 h-10 border-4 bg-[#1f1f1d] border-white rounded-full"></View>
            <Text className="text-lg font-light text-white uppercase font-heading">
              #1f1f1d
            </Text>
          </View>

          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-10 h-10 border-4 bg-[#2a2a28] border-white rounded-full"></View>
            <Text className="text-lg font-light text-white uppercase font-heading">
              #2a2a28
            </Text>
          </View>

          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-10 h-10 bg-green-500 border-4 border-white rounded-full"></View>
            <Text className="text-lg font-light text-white uppercase font-heading">
              #22c55e
            </Text>
          </View>
        </View>

        <View>
          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-10 h-10 bg-red-500 border-4 border-white rounded-full"></View>
            <Text className="text-lg font-light text-white uppercase font-heading">
              #ef4444
            </Text>
          </View>

          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-10 h-10 bg-[#fa9846] border-4 border-white rounded-full"></View>
            <Text className="text-lg font-light text-white uppercase font-heading">
              #fa9846
            </Text>
          </View>
        </View>
      </View>
      <View className="pt-0">
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

export default Colors;
