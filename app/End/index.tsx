import React, {useEffect, useRef} from 'react';
import {Text, Image, View, TouchableOpacity, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

const End = ({onNavigate, points, isLandscape}: any) => {
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
    <View
      className={`items-center flex ${
        isLandscape ? 'flex-row' : 'flex-col items-center'
      } justify-start flex-1 border-b-[10px] border-[#ffcc02] bg-[#1f1f1d]`}>
      {!isLandscape && (
        <Image
          className="absolute top-0 right-0 w-full h-[230px]"
          source={{
            uri: 'https://logo-assets.playgen.io/playgen/trivia_cover.webp',
          }}
        />
      )}

      {!isLandscape && (
        <LinearGradient
          colors={['transparent', '#1f1f1d']}
          className="absolute top-0 z-[100] h-[230px] w-screen"
        />
      )}

      <View
        className={`z-[110] h-ufull flex items-center justify-center p-6 ${
          isLandscape ? 'pl-10' : 'pl-6 mt-20'
        }`}>
        <Animated.Text
          className="text-xl z-[100] tracking-tighter text-white font-heading text-center w-[80%]"
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
          {`You have scored ${points.toLocaleString()} points`}
        </Animated.Text>
        <Animated.Text
          className="text-xl z-[100]   tracking-tighter text-white font-body text-center"
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
              // const sound = new Sound('click.mp3', Sound.MAIN_BUNDLE, error => {
              //   sound.play();
              // });
              onNavigate('Intro');
            }}
            className="bg-[#ffcc02] rounded-[4px] mt-6 flex items-center justify-center border border-[#111]">
            <Text className="text-xl z-[100] tracking-tighter text-[#18181b] font-heading p-4 py-1 pt-2">
              New Game
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      {isLandscape && (
        <Image
          className="absolute top-0 right-0 w-1/2 h-full"
          source={{
            uri: 'https://assets.playgen.io/trivia_bg/ziosk/cover.jpeg',
          }}
        />
      )}

      {isLandscape && (
        <LinearGradient
          colors={['#1f1f1d', 'transparent']}
          start={{x: 0.05, y: 0.05}}
          end={{x: 0.4, y: 0}}
          className="absolute bottom-0 right-5 z-[100] h-full w-1/2"
        />
      )}

      <Animated.Image
        className="absolute z-[120] object-contain right-10 top-[22%] w-[220px] h-[190px]"
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
    </View>
  );
};

export default End;

// import React, {useEffect, useRef} from 'react';
// import {Text, Image, View, TouchableOpacity, Animated} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const End = ({onNavigate, points}: any) => {
//   const fadeAnim1 = useRef(new Animated.Value(0)).current;
//   const fadeAnim2 = useRef(new Animated.Value(0)).current;
//   const fadeAnim3 = useRef(new Animated.Value(0)).current;
//   const fadeAnim4 = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim1, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(fadeAnim2, {
//       toValue: 1,
//       duration: 700,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(fadeAnim3, {
//       toValue: 1,
//       duration: 900,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(fadeAnim4, {
//       toValue: 1,
//       duration: 1100,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <View className="items-start justify-start flex-1 border-l-[10px] border-[#ffcc02] bg-[#1f1f1d]">
//       <View className="p-6 pl-20">
//         <Animated.Image
//           className="w-[200px] h-[180px]"
//           source={{
//             uri: 'https://logo-assets.playgen.io/playgen/text_redhouse.png',
//           }}
//           style={{
//             opacity: fadeAnim1,
//             transform: [
//               {
//                 translateY: fadeAnim1.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [100, 0],
//                 }),
//               },
//             ],
//           }}
//         />
//         <Animated.Text
//           className="text-4xl z-[100] font-black tracking-tighter text-white font-heading text-center"
//           style={{
//             opacity: fadeAnim2,
//             transform: [
//               {
//                 translateY: fadeAnim2.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [100, 0],
//                 }),
//               },
//             ],
//           }}>
//           {points === 0 ? 'Better luck next time!' : 'Well done!'}
//         </Animated.Text>
//         <Animated.Text
//           className="text-lg z-[100]  font-thin tracking-tighter text-white font-heading text-center"
//           style={{
//             opacity: fadeAnim2,
//             transform: [
//               {
//                 translateY: fadeAnim2.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [100, 0],
//                 }),
//               },
//             ],
//           }}>
//           You've scored {points.toLocaleString()} points
//         </Animated.Text>
//         <Animated.View
//           style={{
//             opacity: fadeAnim3,
//             transform: [
//               {
//                 translateY: fadeAnim3.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [100, 0],
//                 }),
//               },
//             ],
//           }}>
//           <TouchableOpacity
//             onPress={() => onNavigate('Intro')}
//             className="bg-[#ffcc02] rounded-md mt-6 flex items-center justify-center">
//             <Text className="text-xl z-[100] tracking-tighter text-[#18181b] font-black p-4 py-2">
//               New Game
//             </Text>
//           </TouchableOpacity>
//         </Animated.View>
//       </View>
//       <Image
//         className="absolute top-0 right-0 w-1/2 h-full"
//         source={{
//           uri: 'https://logo-assets.playgen.io/playgen/end_screen_2.png',
//         }}
//       />
//       <LinearGradient
//         colors={['#1f1f1d', 'transparent']}
//         start={{x: 0.05, y: 0.05}}
//         end={{x: 0.4, y: 0}}
//         className="absolute right-5 z-[100] h-full w-1/2"
//       />
//     </View>
//   );
// };

// export default End;
