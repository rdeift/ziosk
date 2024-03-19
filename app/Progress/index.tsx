import React, {useRef, useState} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';

const Progress = ({onNavigate}: any) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  function triggerConfetti() {
    Animated.timing(progress, {
      toValue: 200,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }

  return (
    <View className="space-y-5 items-center justify-center p-6 bg-[#1f1f1d] h-full">
      <View className="">
        <Text className="text-5xl font-bold text-white font-heading">
          Animation
        </Text>
      </View>
      <TouchableOpacity
        onPress={triggerConfetti}
        className="z-[100] flex-row items-center gap-3">
        <Text className="text-lg font-light text-white underline font-heading">
          {`>>  Press to animate  <<`}
        </Text>
      </TouchableOpacity>

      <View className="h-[20px] w-[200px] m-2 bg-white rounded-full">
        <Animated.View
          className={'h-[20px] bg-orange-300 rounded-full'}
          style={{width: progress}}
        />
      </View>

      <View className="z-[100] pt-6">
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

export default Progress;
