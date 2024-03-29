import React, {useEffect, useRef} from 'react';
import {View, Animated, ImageBackground} from 'react-native';

const Points = ({onNext, points}: any) => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim3, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim4, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      onNext();
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://assets.playgen.io/trivia_bg/ziosk/cover.jpeg',
      }}
      resizeMode="cover"
      className="items-center justify-end flex-1 pb-4">
      <View className="items-center justify-center flex-1 p-6 center">
        <Animated.Image
          className="w-[200px] h-[180px]"
          source={{
            uri: 'https://logo-assets.playgen.io/playgen/text_redhouse.png',
          }}
          style={{
            opacity: fadeAnim1,
            transform: [
              {
                translateY: fadeAnim1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}
        />

        <Animated.Text
          className="text-xl z-[100] -mt-2   text-black font-cursive text-center"
          style={{
            opacity: fadeAnim2,
            transform: [
              {
                translateY: fadeAnim2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}>
          You scored
        </Animated.Text>
        <Animated.Text
          className="text-4xl z-[100] font-heading tracking-tighter text-black  text-center"
          style={{
            opacity: fadeAnim2,
            transform: [
              {
                translateY: fadeAnim2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}>
          {points} points
        </Animated.Text>
        <Animated.View
          style={{
            opacity: fadeAnim3,
            transform: [
              {
                translateY: fadeAnim3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          }}></Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Points;
