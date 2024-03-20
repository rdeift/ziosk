import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import Sound from 'react-native-sound';

const Question = ({
  question,
  onAnswer,
  onNavigate,
  allPoints,
  currentQuestion,
  totalQuestions,
  isLandscape,
}: any) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<any>(null);
  const [gameActive, setGameActive] = useState(true);
  const [wrongAnswerIndex1, setWrongAnswerIndex1] = useState<number | null>(
    null,
  );
  const [wrongAnswerIndex2, setWrongAnswerIndex2] = useState<number | null>(
    null,
  );

  const confettiRef = useRef<LottieView>(null);
  const [progress] = useState<any>({
    0: new Animated.Value(0),
    1: new Animated.Value(0),
    2: new Animated.Value(0),
    3: new Animated.Value(0),
  });
  const [counter, setCounter] = useState<any>(20);
  const [score, setScore] = useState(1000);
  const [finalScore, setFinalScore] = useState<any>(null);
  const timer = useRef(new Animated.Value(170)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    if (gameActive) {
      Animated.timing(timer, {
        toValue: 0,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      const counterInterval = setInterval(() => {
        setCounter((prevCounter: any) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            // Counter has reached 0
            if (selectedAnswerIndex === null) {
              const correctAnswerIndex = question.answers.findIndex(
                (answer: any) => answer.correct,
              );
              handleAnswerPress(
                question.answers[correctAnswerIndex],
                correctAnswerIndex,
                true,
              );
            }
            return 0;
          }
        });
      }, 1000);

      let startTime = Date.now();
      const targetTime = 20000; // 20 seconds
      const startScore = 1000;

      const updateScore = () => {
        const elapsedTime = Date.now() - startTime;
        const newScore = Math.max(
          0,
          startScore - startScore * (elapsedTime / targetTime),
        );
        setScore(Math.round(newScore));

        if (elapsedTime < targetTime) {
          requestAnimationFrame(updateScore);
        } else {
          setScore(0); // Ensure the score is exactly 0 at the end
        }
      };

      requestAnimationFrame(updateScore);

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
      };
    }
  }, [gameActive, question]);

  useEffect(() => {
    if (counter === 12) {
      // Select a wrong answer to remove when counter reaches 12
      const wrongAnswers = question.answers.filter(
        (answer: any, index: number) => !answer.correct,
      );
      if (wrongAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const wrongAnswerIndex = question.answers.findIndex(
          (answer: any) => answer === wrongAnswers[randomIndex],
        );
        setWrongAnswerIndex1(wrongAnswerIndex);
      }
    }

    if (counter === 7) {
      // Select another wrong answer to remove when counter reaches 7
      const wrongAnswers = question.answers.filter(
        (answer: any, index: number) =>
          !answer.correct && index !== wrongAnswerIndex1,
      );
      if (wrongAnswers.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
        const wrongAnswerIndex = question.answers.findIndex(
          (answer: any) => answer === wrongAnswers[randomIndex],
        );
        setWrongAnswerIndex2(wrongAnswerIndex);
      }
    }
  }, [counter]);

  function handleAnswerPress(
    answer: any,
    index: number,
    automatic: boolean = false,
  ) {
    const sound = new Sound('click.mp3', Sound.MAIN_BUNDLE, error => {
      sound.play();
    });

    new Sound('timer.mp3', Sound.MAIN_BUNDLE, error => {
      sound.play();
    });
    setSelectedAnswerIndex(index);
    setGameActive(false);
    setFinalScore(score);
    // @ts-ignore
    Animated.timing(timer).stop();

    const isCorrect = answer.correct && !automatic;

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      confettiRef.current?.play(0);
      const sound = new Sound('win.mp3', Sound.MAIN_BUNDLE, error => {
        sound.play();
      });
    } else {
      setFinalScore(0);
    }

    for (let i = 0; i < question.answers.length; i++) {
      Animated.timing(progress[i], {
        toValue: question.answers[i].probability * 3,
        duration: 1200,
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
      setCounter(20);
      setGameActive(true);
      setSelectedAnswerIndex(null);
      setScore(automatic ? 0 : 1000);
      onAnswer(isCorrect ? score : 0);
    }, 4000);
  }

  return (
    <View
      className={`relative flex ${
        isLandscape ? 'flex-row items-end' : 'flex-col items-center'
      } bg-[#1f1f1d] gap-4 h-screen p-4 py-6 `}>
      <Animated.View
        className={`${
          isLandscape ? 'w-[48%] h-full' : 'w-full h-[200px]'
        } relative rounded-xl object-top`}
        id="question-cover"
        style={{opacity: fadeAnim}}>
        <Image
          source={{uri: question.cover}}
          className="absolute top-0 left-0 right-0 object-top w-full h-full rounded-xl"
          resizeMode="cover"
        />
        <Text className="absolute z-10 text-2xl font-black leading-6 tracking-tighter text-white left-4 bottom-10 font-heading">
          {`Question ${currentQuestion + 1} / ${totalQuestions}`}
        </Text>
        <View className="absolute z-10 flex flex-row items-center justify-between space-x-2 bottom-3 left-4">
          <Icon name="clock" size={16} color="#ffffff" />
          <Text className="text-white">
            {counter < 10 && counter > 0 ? `0${counter}` : counter}
          </Text>
          <Animated.View
            className="h-1.5 mt-[1px] rounded-md bg-[#ffcc02]"
            style={{width: timer}}
          />
        </View>
        {counter > 12 && (
          <View className="absolute z-10 w-4 h-4 bg-[#ffcc02] rounded-full bottom-[14px] right-[140px]" />
        )}
        {counter > 7 && (
          <View className="absolute z-10 w-4 h-4 bg-[#ffcc02] rounded-full bottom-[14px] right-[180px]" />
        )}
        <Text className="absolute text-[#ffcc02] bottom-[10px] right-[10px] z-10 text-xl font-black">
          {finalScore !== null ? finalScore : score}
        </Text>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          className="absolute rounded-b-xl  bottom-0 left-0 right-0 h-[170px] "
        />
        <LottieView
          ref={confettiRef}
          source={require('../../assets/confetti.json')}
          autoPlay={false}
          loop={false}
          style={styles.lottie}
          resizeMode="cover"
        />
      </Animated.View>
      <View
        className={`${
          isLandscape ? 'w-[48%]' : 'w-full'
        }  h-full flex flex-col z-[2]`}>
        <View className="rounded-lg bg-[#2A2A28] h-[40px] mb-2 px-4 flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => onNavigate('Intro')}>
            <Icon name="arrow-left" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text className="text-[#eaeaeb] font-bold text-[15px]">
            {allPoints?.toLocaleString()} points
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
            {question?.answers?.map((answer: any, index: any) => {
              const isDisabled =
                selectedAnswerIndex !== null ||
                index === wrongAnswerIndex1 ||
                index === wrongAnswerIndex2;

              return (
                <TouchableOpacity
                  className="flex items-center overflow-hidden flex-row justify-between h-10 w-full p-2 px-3 rounded-md bg-[#3A3B3A]"
                  key={index}
                  onPress={() => handleAnswerPress(answer, index)}
                  disabled={
                    (isDisabled && !answer.correct) ||
                    selectedAnswerIndex !== null
                  }
                  style={
                    selectedAnswerIndex === null &&
                    isDisabled &&
                    !answer.correct
                      ? {opacity: 0.2}
                      : {}
                  }>
                  <Text className="text-[#eaeaeb] font-medium text-[15px] z-10">
                    {answer.text}
                  </Text>
                  {selectedAnswerIndex !== null ? (
                    <Text className="text-[#eaeaeb] font-bold text-[15px] z-10">
                      {answer.probability}%
                    </Text>
                  ) : (
                    <Text />
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
              );
            })}
          </View>
        </Animated.View>
      </View>
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
    zIndex: 1,
    pointerEvents: 'none',
  },
});

export default Question;
