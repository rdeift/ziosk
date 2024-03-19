import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({onPress, title, width}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="items-center justify-center h-10 my-2 bg-[#f97315] shadow-md rounded-md"
      style={{width: width || '100%'}}>
      <Text className="px-5 font-bold text-white text-md font-heading">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
