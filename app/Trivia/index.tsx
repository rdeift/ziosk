import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  Button,
  Image,
  TouchableOpacity,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const questions = [
  {
    cover: 'https://assets.playgen.io/temp/cover_2.png',
    answers: [
      {
        text: 'Dory',
        correct: true,
        probability: 43,
      },
      {
        text: 'Marlin',
        correct: false,
        probability: 11,
      },
      {
        text: 'Bruce',
        correct: false,
        probability: 24,
      },
      {
        text: 'Coral',
        correct: false,
        probability: 22,
      },
    ],
    question: `In the movie 'Finding Nemo', what is the name of Nemo's forgetful friend?`,
  },
  {
    cover: 'https://assets.playgen.io/temp/cover_1.png',
    answers: [
      {
        text: 'Super strength',
        correct: false,
        probability: 11,
      },
      {
        text: 'Super speed',
        correct: false,
        probability: 13,
      },
      {
        text: 'Invisibility and force fields',
        correct: true,
        probability: 68,
      },
      {
        text: 'Elasticity',
        correct: false,
        probability: 8,
      },
    ],
    question: `In 'The Incredibles', what unique power does the daughter Violet have?`,
  },
];

export default function Trivia() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<any>(null); // New state to track selected answer

  const [isQuizEnded, setIsQuizEnded] = useState(false); // New state to track if the quiz has ended
  const [progress, setProgress] = useState(new Animated.Value(0));

  const question = questions[currentQuestionIndex];

  function handleAnswerPress(answer: any, index: number) {
    setSelectedAnswerIndex(index); // Record the selected answer

    if (answer.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswerIndex(null); // Reset the selection for the next question
      } else {
        setIsQuizEnded(true);
      }
    }, 3000);
  }

  function restartQuiz() {
    setCurrentQuestionIndex(0); // Reset to the first question
    setCorrectAnswers(0); // Reset the score
    setSelectedAnswerIndex(null); // Clear any selected answer highlight
    setIsQuizEnded(false); // Make sure the quiz is marked as not ended
    setIsQuizStarted(true); // Start the quiz again
  }

  // Start Screen
  if (!isQuizStarted || isQuizEnded) {
    return (
      <View className="items-center justify-center flex-1 p-4">
        {!isQuizEnded ? (
          <Button title="Start Quiz" onPress={() => setIsQuizStarted(true)} />
        ) : (
          <>
            <Text className="mb-4 text-2xl font-bold">Quiz Ended</Text>
            <Text className="text-xl">
              Your score: {correctAnswers} out of {questions.length}
            </Text>
            <Button title="Restart Quiz" onPress={restartQuiz} />
          </>
        )}

        <Button
          title="Animate"
          onPress={() => {
            Animated.timing(progress, {
              toValue: 100,
              duration: 900,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: false,
            }).start();
          }}
        />

        <View className="h-[20px] w-[120px] m-2 bg-zinc-900">
          <Animated.View
            className={'h-[20px] bg-orange-300'}
            style={{width: progress}}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      className={`flex-1 items-center md:flex-row justify-start bg-background h-full`}>
      <View className="relative flex-col w-full h-64 md:w-1/2 md:h-full">
        <Image
          source={{uri: question.cover}}
          className={`w-full h-64 md:h-full mb-4 rounded-b-xl object-top`}
          resizeMode="cover"
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          className="absolute bottom-0 left-0 right-0 h-[200px] "
        />

        <Text className="absolute z-[100] text-2xl font-black text-white md:hidden md:text-4xl bottom-[70px] md:bottom-10 left-4 right-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
      </View>

      <View className="w-full md:w-1/2 p-6 -mt-16 space-y-4 bg-[#1f1f1d] h-full rounded-t-3xl">
        <View className=" md:px-4">
          <Text className="z-10 hidden text-2xl font-black text-white md:flex md:text-4xl ">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
          <Text
            className={`text-xl tracking-tight my-0 leading-7 font-bold  text-[#eaeaeb]`}>
            {question.question}
          </Text>
        </View>
        <View className="space-y-4 md:px-4">
          {question?.answers?.map((answer, index) => (
            <TouchableOpacity
              className={`flex items-start justify-center w-full p-4 rounded-xl ${
                selectedAnswerIndex !== null // Check if an answer has been selected
                  ? index === selectedAnswerIndex // The user's selected answer
                    ? answer.correct
                      ? 'bg-green-500' // Correct answer selected
                      : 'bg-red-500' // Incorrect answer selected
                    : answer.correct
                    ? 'bg-green-500' // Highlight correct if the wrong answer was selected
                    : 'bg-[#2a2a28]' // Keep other unselected answers neutral
                  : 'bg-[#2a2a28]' // Default background before selection
              }`}
              key={index}
              onPress={() => handleAnswerPress(answer, index)}
              disabled={selectedAnswerIndex !== null}>
              <Text className="text-[#eaeaeb] font-medium text-[17px] md:text-xl">
                {answer.text}
              </Text>
              {selectedAnswerIndex && (
                <Text className="text-[#eaeaeb] font-medium text-[17px] md:text-xl">
                  {answer.probability}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
