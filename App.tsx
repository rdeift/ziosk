import * as React from 'react';

import {StatusBar, Dimensions} from 'react-native';
import {useEffect, useState} from 'react';
import Intro from './app/Intro';
import Question from './app/Question';
import End from './app/End';
import Points from './app/Points';

const questions = [
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216311707027116143/rnstudio_various_colorful_rainbows_in_movieNetflix_like_cover_m_892e35fc-cb36-4c7f-a46d-782d624df508.png?ex=65ffed8c&is=65ed788c&hm=8085c986c5a5032064fc76f84e62eaf974939ecabc6e875c13c0a84d701a52b6&',
    answers: [
      {
        text: '3',
        correct: false,
        probability: 11,
      },
      {
        text: '5',
        correct: false,
        probability: 22,
      },
      {
        text: '7',
        correct: true,
        probability: 43,
      },
      {
        text: '10',
        correct: false,
        probability: 24,
      },
    ],
    question: 'How many colors are in a rainbow?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216313709140377625/rnstudio_french_flag_in_movieNetflix_like_cover_minimalistic_bc39a414-3c03-4ca8-8bb8-101927b4b7fb.png?ex=65ffef6a&is=65ed7a6a&hm=86fb6e0c3daf1b258677b5c8c4cfc3a50d8002d429d995cecd9c9d513b2e77cc&',
    answers: [
      {
        text: 'London',
        correct: false,
        probability: 11,
      },
      {
        text: 'Berlin',
        correct: false,
        probability: 22,
      },
      {
        text: 'Paris',
        correct: true,
        probability: 43,
      },
      {
        text: 'Rome',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the capital of France?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216312621502824478/rnstudio_colorful_and_various_squares_in_movieNetflix_like_cove_62ad24b8-4d1d-4129-8c56-241d3538d91a.png?ex=65ffee66&is=65ed7966&hm=ce2fb82dfbc2698f642c6c66fcb414e0615b224eddfcb605b047b9aa7ebf2bcb&',
    answers: [
      {
        text: '3',
        correct: false,
        probability: 11,
      },
      {
        text: '4',
        correct: true,
        probability: 43,
      },
      {
        text: '5',
        correct: false,
        probability: 22,
      },
      {
        text: '6',
        correct: false,
        probability: 24,
      },
    ],
    question: 'How many sides does a square have?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216313033870278656/rnstudio_childlike_turtle_in_movieNetflix_like_cover_minimalist_1c48c399-a510-4ae8-8c1d-5bd11ffb95d9.png?ex=65ffeec9&is=65ed79c9&hm=32a98b1568b5591ec1e1836b95aece355ad5dc365f596941565d972ccc027e2b&',
    answers: [
      {
        text: 'Shell',
        correct: true,
        probability: 43,
      },
      {
        text: 'Fur',
        correct: false,
        probability: 11,
      },
      {
        text: 'Feathers',
        correct: false,
        probability: 22,
      },
      {
        text: 'Scales',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What kind of covering does a turtle have?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216313947276312581/rnstudio_various_different_and_colorful_birds_in_the_sky_in_mov_30f32fbe-bb8f-4495-9001-7fe546f044cd.png?ex=65ffefa3&is=65ed7aa3&hm=9e5fb783e3fbc57d19365ec45213806405b74ae8c52a34577377f1e12f3361ab&',
    answers: [
      {
        text: 'Cat',
        correct: false,
        probability: 11,
      },
      {
        text: 'Bat',
        correct: true,
        probability: 43,
      },
      {
        text: 'Snake',
        correct: false,
        probability: 22,
      },
      {
        text: 'Dog',
        correct: false,
        probability: 24,
      },
    ],
    question: 'Which animal can fly but is not a bird?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216315448870703104/rnstudio_childlike_lion_king_ae0e663c-1356-4473-8f9f-563c02c6f8d4.png?ex=65fff109&is=65ed7c09&hm=b81c6fec23b5d223afc56c602835acf38051e221c1d755b15c8de3201d4068bd&',
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
        probability: 22,
      },
      {
        text: 'Donald',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the name of the protagonist in The Lion King?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216315956327088138/rnstudio_great_wall_of_china_in_movieNetflix_like_cover_minimal_69e73e90-3831-46b3-8955-5b96dbbbb947.png?ex=65fff182&is=65ed7c82&hm=824474ba611c6b17e6cdc75188f93f5c07567deea8c78b26bc798cfa8c8b3657&',
    answers: [
      {
        text: 'Asia',
        correct: true,
        probability: 43,
      },
      {
        text: 'Africa',
        correct: false,
        probability: 11,
      },
      {
        text: 'Europe',
        correct: false,
        probability: 22,
      },
      {
        text: 'Oceania',
        correct: false,
        probability: 24,
      },
    ],
    question: 'On which continent is the Great Wall of China?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216316020470448198/rnstudio_childlike_spider_56b70e6d-9c4d-4715-86e8-be2d4768fcf9.png?ex=65fff191&is=65ed7c91&hm=ea17f2b078188eb54a8918beaad476483702ef9c9ce1bd97d9ee5102c6a7e489&',
    answers: [
      {
        text: '4',
        correct: false,
        probability: 11,
      },
      {
        text: '8',
        correct: true,
        probability: 43,
      },
      {
        text: '6',
        correct: false,
        probability: 22,
      },
      {
        text: '10',
        correct: false,
        probability: 24,
      },
    ],
    question: 'How many legs does a spider have?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216316482540277821/rnstudio_childlike_knights_and_castles_a03b2e01-0c90-4c4f-b024-fea2aee3c9e1.png?ex=65fff1ff&is=65ed7cff&hm=ba3e1e0499a90ae8e97bf2e4b6408976c0cdfd5528bd0978623bd2386cdfec94&',
    answers: [
      {
        text: 'The Middle Ages',
        correct: true,
        probability: 43,
      },
      {
        text: 'The Future',
        correct: false,
        probability: 11,
      },
      {
        text: 'Space Age',
        correct: false,
        probability: 22,
      },
      {
        text: 'Modern Times',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What period is known for its knights and castles?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1218807701157711973/rnstudio_people_communicating_9f620ed9-edea-4bf9-93da-0a54d6498c14.png?ex=66090220&is=65f68d20&hm=cf5c7970c232f7b24f240fcbb1babdffe4f8094f7f3eb5ab336c78611afd153f&',
    answers: [
      {
        text: 'Telephone',
        correct: true,
        probability: 43,
      },
      {
        text: 'Telescope',
        correct: false,
        probability: 11,
      },
      {
        text: 'Microscope',
        correct: false,
        probability: 22,
      },
      {
        text: 'X-ray Machine',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'Which invention first allowed people to communicate directly by voice with each other over long distances?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216317275708330034/rnstudio_childlike_colorful_mountain_range_f3f538ad-0d36-464f-9d80-c126b721ca86.png?ex=65fff2bc&is=65ed7dbc&hm=2d21a0612aa40290ca1e090ef9c6374149ceb19b9be749708dda02bbbdb46161&',
    answers: [
      {
        text: 'France',
        correct: false,
        probability: 11,
      },
      {
        text: 'Canada and the United States',
        correct: true,
        probability: 43,
      },
      {
        text: 'Peru',
        correct: false,
        probability: 22,
      },
      {
        text: 'Switzerland',
        correct: false,
        probability: 24,
      },
    ],
    question: 'Where are the Rocky Mountains located?',
  },
];

const App = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [allPoints, setAllPoints] = useState(0);

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
      {currentScreen === 'Intro' && (
        <Intro onNavigate={(screen: any) => setCurrentScreen(screen)} />
      )}
      {currentScreen === 'trivia' && (
        <Question
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          question={questions[currentQuestion]}
          allPoints={allPoints}
          onAnswer={(points: any) => {
            setCurrentPoints(points);
            setCurrentScreen('Points');
            setAllPoints(allPoints + points);
          }}
          onNavigate={(screen: any) => setCurrentScreen(screen)}
        />
      )}
      {currentScreen === 'End' && (
        <End
          points={allPoints}
          onNavigate={(screen: any) => {
            setCurrentQuestion(0);
            setCurrentScreen(screen);
            setAllPoints(0);
          }}
        />
      )}

      {currentScreen === 'Points' && (
        <Points
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          points={currentPoints}
          onNext={() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
              setCurrentScreen('trivia');
            } else {
              setCurrentScreen('End');
            }
          }}
        />
      )}
    </>
  );
};

export default App;
