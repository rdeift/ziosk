import React, {useEffect, useRef} from 'react';
import {Text, Image, View, TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const End = ({onNavigate, points}: any) => {
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
  }, []);

  return (
    <View className="items-start justify-start flex-1 border-l-[10px] border-[#ffcc02] bg-[#1f1f1d]">
      <View className="p-6 pl-20">
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
          className="text-4xl z-[100] font-black tracking-tighter text-white font-heading text-center"
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
          {points === 0 ? 'Better luck next time!' : 'Well done!'}
        </Animated.Text>
        <Animated.Text
          className="text-lg z-[100]  font-thin tracking-tighter text-white font-heading text-center"
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
          You've scored {points.toLocaleString()} points
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
          }}>
          <TouchableOpacity
            onPress={() => onNavigate('Intro')}
            className="bg-[#ffcc02] rounded-md mt-6 flex items-center justify-center">
            <Text className="text-xl z-[100] tracking-tighter text-[#18181b] font-black p-4 py-2">
              New Game
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Image
        className="absolute top-0 right-0 w-1/2 h-full"
        source={{
          uri: 'https://logo-assets.playgen.io/playgen/end_screen_2.png',
        }}
      />
      <LinearGradient
        colors={['#1f1f1d', 'transparent']}
        start={{x: 0.05, y: 0.05}}
        end={{x: 0.4, y: 0}}
        className="absolute right-5 z-[100] h-full w-1/2"
      />
    </View>
  );
};

export default End;
