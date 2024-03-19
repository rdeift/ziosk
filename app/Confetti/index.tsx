import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button';
import LottieView from 'lottie-react-native';

const Colors = ({onNavigate}: any) => {
  const confettiRef = useRef<LottieView>(null);

  function triggerConfetti() {
    confettiRef.current?.play(0);
  }

  return (
    <View className="space-y-5 items-center justify-center p-6 bg-[#1f1f1d] h-full">
      <View className="">
        <Text className="text-5xl font-bold text-white font-heading">
          Confetti
        </Text>
      </View>
      <TouchableOpacity
        onPress={triggerConfetti}
        className="z-[100] flex-row items-center gap-3">
        <Text className="text-lg font-light text-white underline font-heading">
          {`>>  Press to deliver joy  <<`}
        </Text>
      </TouchableOpacity>

      <View className="z-[100] pt-6">
        <Button
          title="Back"
          width={150}
          onPress={() => {
            onNavigate('Intro');
          }}
        />
      </View>

      <LottieView
        ref={confettiRef}
        source={require('../../assets/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    pointerEvents: 'none',
  },
});

export default Colors;
