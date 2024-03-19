import * as React from 'react';

import {StatusBar, Dimensions, View} from 'react-native';
import {useEffect, useState} from 'react';
import Trivia from './app/Trivia';
import Intro from './app/Intro';
import Colors from './app/Colors';
import Fonts from './app/Fonts';
import Confetti from './app/Confetti';
import Progress from './app/Progress';
import Gradient from './app/Gradient';
import Ruler from './app/Ruler';
import Question from './app/Question';

const questions = [
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216313709140377625/rnstudio_french_flag_in_movieNetflix_like_cover_minimalistic_bc39a414-3c03-4ca8-8bb8-101927b4b7fb.png?ex=65ffef6a&is=65ed7a6a&hm=86fb6e0c3daf1b258677b5c8c4cfc3a50d8002d429d995cecd9c9d513b2e77cc&',
    answers: [
      {
        text: 'Simba',
        correct: true,
        probability: 43,
      },
      {
        text: 'Mickey',
        correct: false,
        probability: 11,
      },
      {
        text: 'Goofy',
        correct: false,
        probability: 24,
      },
      {
        text: 'Donald',
        correct: false,
        probability: 22,
      },
    ],
    question: `What is the name of the boy who befriends a lion in "The Lion King"?`,
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

const App = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(
        Dimensions.get('window').width > Dimensions.get('window').height,
      );
    };

    Dimensions.addEventListener('change', updateLayout);
  }, []);

  const [currentScreen, setCurrentScreen] = React.useState('Intro');

  return (
    <>
      <StatusBar backgroundColor="#1f1f1d" barStyle="light-content" />
      {currentScreen === 'Intro' && <Intro />}
      {currentScreen === 'Trivia' && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={() => setCurrentQuestion(currentQuestion + 1)}
        />
      )}
    </>
  );
};

export default App;
