import React, {useEffect, useRef} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import Sound from 'react-native-sound';

const Tip = ({onNext, currentTip, currentQuestion, totalQuestions}: any) => {
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
    <View className="items-center justify-center flex-1 pb-4 bg-[#000]">
      <View className="items-center justify-center flex-1 max-w-lg p-6 center">
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
          className="text-3xl z-[100] mb-2   text-white font-cursive text-center"
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
          Did you know?
        </Animated.Text>
        <Animated.Text
          className="text-lg z-[100] font-base tracking-tighter text-white  text-center"
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
          {currentTip.text}
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
            onPress={() => {
              onNext();
              // const sound = new Sound('click.mp3', Sound.MAIN_BUNDLE, error => {
              //   sound.play();
              // });
            }}
            className="bg-[#ffcc02] rounded-[4px] mt-6 flex items-center justify-center border-2 border-[#111]">
            <Text className="text-lg z-[100] tracking-tighter text-[#18181b] font-heading p-4 py-1 pt-2">
              {currentQuestion === totalQuestions - 1
                ? 'View Score'
                : 'Next Question'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Tip;
