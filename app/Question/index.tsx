import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const Question = ({question, onAnswer}: any) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<any>(null);
  const [gameActive, setGameActive] = useState(true);

  const [progress, setProgress] = useState<any>({
    0: new Animated.Value(0),
    1: new Animated.Value(0),
    2: new Animated.Value(0),
    3: new Animated.Value(0),
  });

  const [counter, setCounter] = useState<any>(20);
  // const [points, setPoints] = useState<any>(1000);

  const points = useRef(new Animated.Value(1000)).current;
  const timer = useRef(new Animated.Value(170)).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current; // Starting below the view by 50 units

  useEffect(() => {
    if (gameActive) {
      Animated.timing(timer, {
        toValue: 0,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      const counterInterval = setInterval(() => {
        setCounter((prevCounter: any) =>
          prevCounter > 0 ? prevCounter - 1 : 0,
        );
      }, 1000);

      // const pointsInterval = setInterval(() => {
      //   setPoints((prevPoints: any) => (prevPoints > 0 ? prevPoints - 1 : 0));
      // }, 21);

      Animated.timing(points, {
        toValue: 0,
        duration: 20000,
        useNativeDriver: true,
      }).start();

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(slideUpAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();

      return () => {
        clearInterval(counterInterval);
        // clearInterval(pointsInterval);
      };
    }
  }, [gameActive, question]);

  const [displayPoints, setDisplayPoints] = useState(1000);

  // useEffect(() => {
  //   let animationFrameId: any;

  //   const animatePoints = () => {
  //     points.addListener(({value}) => {
  //       const num: any = Number(value).toFixed(0);
  //       setDisplayPoints(Number(num));
  //     });

  //     animationFrameId = requestAnimationFrame(animatePoints);
  //   };

  //   animatePoints();

  //   return () => {
  //     points.removeAllListeners();
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, [points]);

  const pointsDisplay = points.interpolate({
    inputRange: [0, 1000],
    outputRange: [0, 1000],
    extrapolate: 'clamp',
  });

  function handleAnswerPress(answer: any, index: number) {
    setSelectedAnswerIndex(index);
    setGameActive(false);

    // @ts-ignore
    Animated.timing(timer).stop();

    if (answer.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    for (let i = 0; i < question.answers.length; i++) {
      Animated.timing(progress[i], {
        toValue: question.answers[i].probability * 3,
        duration: 900,
        useNativeDriver: false,
      }).start();
    }

    setTimeout(() => {
      Object.values(progress).forEach(progressAnimatedValue => {
        // @ts-ignore
        Animated.timing(progressAnimatedValue).stop();
      });
      // @ts-ignore
      Animated.timing(fadeAnim).stop();
      // @ts-ignore
      Animated.timing(slideUpAnim).stop();

      timer.setValue(170);
      fadeAnim.setValue(0);
      slideUpAnim.setValue(50);
      Object.keys(progress).forEach(key => {
        progress[key].setValue(0);
      });

      // setPoints(1000);

      setGameActive(true);
      setSelectedAnswerIndex(null);
      onAnswer();
    }, 5000);
  }

  return (
    <View className="flex flex-row bg-[#1f1f1d] gap-4 h-screen p-4 py-6 items-end">
      <Animated.View
        className={`relative w-[48%] h-full rounded-xl object-top`}
        id="question-cover"
        style={{opacity: fadeAnim}}>
        <Image
          source={{uri: question.cover}}
          className={`w-full h-full rounded-xl object-top`}
          resizeMode="cover"
        />

        <Text className="absolute z-10 text-2xl font-black leading-6 tracking-tighter text-white left-4 bottom-10 font-heading">
          Question 1/10
        </Text>
        <View className="absolute z-10 flex flex-row items-center justify-between space-x-2 bottom-3 left-4">
          <Icon name="clock" size={16} color="#ffffff" />
          <Text className="text-white">
            {counter < 10 ? `0${counter}` : counter}
          </Text>
          <Animated.View
            className={` h-1.5 mt-[1px] rounded-md bg-[#adfa1b]`}
            style={{width: timer}}
          />
        </View>
        {counter > 12 && (
          <View className="absolute z-10 w-4 h-4 bg-[#adfa1b] rounded-full bottom-[14px] right-[140px]"></View>
        )}

        {counter > 7 && (
          <View className="absolute z-10 w-4 h-4 bg-[#adfa1b] rounded-full bottom-[14px] right-[180px]"></View>
        )}

        {/* <Animated.Text className="absolute z-10  bottom-2.5 right-4 font-mono font-black text-xl text-[#adfa1b]">
          {pointsDisplay}
        </Animated.Text> */}

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          className="absolute rounded-b-xl  bottom-0 left-0 right-0 h-[170px] "
        />
      </Animated.View>
      <View className=" w-[48%] h-full flex flex-col">
        <View className="rounded-lg bg-[#2A2A28] h-[40px] mb-2 px-4 flex flex-row items-center justify-between">
          <Icon name="arrow-left" size={20} color="#ffffff" />
          <Text className="text-[#eaeaeb] font-bold text-[15px]">
            1,233 points
          </Text>
          <Icon name="volume-x" size={20} color="#ffffff" />
        </View>
        <Animated.View
          className="rounded-t-xl bg-[#2A2A28] w-full h-full p-4"
          id="question-container"
          style={{
            transform: [{translateY: slideUpAnim}],
          }}>
          <Text className="text-xl font-black leading-6 tracking-tighter text-white font-heading">
            {question.question}
          </Text>

          <View className="mt-4 space-y-4 md:px-4">
            {question?.answers?.map((answer: any, index: any) => (
              <TouchableOpacity
                className={`flex items-center overflow-hidden flex-row justify-between h-10 w-full p-2 px-3 rounded-md  bg-[#3A3B3A]`}
                key={index}
                onPress={() => handleAnswerPress(answer, index)}
                disabled={selectedAnswerIndex !== null}>
                <Text className="text-[#eaeaeb] font-medium text-[15px] z-10">
                  {answer.text}
                </Text>

                {selectedAnswerIndex !== null ? (
                  <Text className="text-[#eaeaeb] font-bold text-[15px]">
                    {answer.probability}%
                  </Text>
                ) : (
                  <Text></Text>
                )}

                <Animated.View
                  className={`absolute h-10 rounded-md ${
                    selectedAnswerIndex !== null
                      ? index === selectedAnswerIndex
                        ? answer.correct
                          ? 'bg-green-500'
                          : 'bg-red-500'
                        : answer.correct
                        ? 'bg-green-500'
                        : 'bg-zinc-600'
                      : 'bg-[#3A3B3A]'
                  }`}
                  style={{width: progress[index]}}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Question;
