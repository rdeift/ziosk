import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';

const Ruler = ({onNavigate}: any) => {
  return (
    <View className="space-y-5 bg-[#1f1f1d] h-full">
      <View className="w-full h-full p-5 border border-white">
        <View className="w-full h-full p-5 border border-red-500">
          <View className="w-full h-full p-5 border border-green-500">
            <View className="w-full h-full p-5 border border-blue-500">
              <View className="items-center justify-center">
                <Text className="text-5xl font-bold text-center text-white font-heading">
                  Field of View
                </Text>
              </View>

              <View className="z-[100] pt-6">
                <Button
                  title="Back"
                  onPress={() => {
                    onNavigate('Intro');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ruler;
