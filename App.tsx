import * as React from 'react';

import {StatusBar, Dimensions} from 'react-native';
import {useEffect, useState} from 'react';
import Intro from './app/Intro';
import Question from './app/Question';
import End from './app/End';
import Points from './app/Points';
import Tip from './app/Tip';

const questions = [
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/buns.jpeg',
    category: 'Food',
    answers: [
      {
        text: 'A dipping sauce',
        correct: false,
        probability: 13,
      },
      {
        text: 'Honeycomb butter',
        correct: false,
        probability: 19,
      },
      {
        text: 'Honey cinnamon butter',
        correct: true,
        probability: 47,
      },
      {
        text: 'Chopped peanuts',
        correct: false,
        probability: 21,
      },
    ],
    question:
      'Texas Roadhouse is known for its fresh rolls delivered to your table. What are they served with?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/armadillo.jpeg',
    category: 'General Knowledge',
    answers: [
      {
        text: 'Bull',
        correct: false,
        probability: 14,
      },
      {
        text: 'Armadillo',
        correct: true,
        probability: 39,
      },
      {
        text: 'Rattlesnake',
        correct: false,
        probability: 25,
      },
      {
        text: 'Longhorn Steer',
        correct: false,
        probability: 22,
      },
    ],
    question: 'Which animal is the mascot of Texas Roadhouse?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/first_open.jpeg',
    category: 'History',
    answers: [
      {
        text: 'Louisville, Kentucky',
        correct: false,
        probability: 13,
      },
      {
        text: 'Clarksville, Indiana',
        correct: true,
        probability: 41,
      },
      {
        text: 'Austin, Texas',
        correct: false,
        probability: 24,
      },
      {
        text: 'Denver, Colorado',
        correct: false,
        probability: 22,
      },
    ],
    question: 'Where was the very first Texas Roadhouse opened?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/dubai_2.webp',
    category: 'General Knowledge',
    answers: [
      {
        text: 'Toronto, Canada',
        correct: false,
        probability: 12,
      },
      {
        text: 'Dubai, United Arab Emirates',
        correct: true,
        probability: 42,
      },
      {
        text: 'Mexico City, Mexico',
        correct: false,
        probability: 23,
      },
      {
        text: 'London, England',
        correct: false,
        probability: 23,
      },
    ],
    question:
      'Texas Roadhouse started in the USA, but what was their first international location in 2011?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/hq.jpeg',
    category: 'General Knowledge',
    answers: [
      {
        text: 'Louisville, Kentucky',
        correct: true,
        probability: 51,
      },
      {
        text: 'Austin, Texas',
        correct: false,
        probability: 27,
      },
      {
        text: 'Denver, Colorado',
        correct: false,
        probability: 13,
      },
      {
        text: 'Nashville, Tennessee',
        correct: false,
        probability: 9,
      },
    ],
    question: 'Where is the headquarters of Texas Roadhouse located?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/mascot.jpeg',
    category: 'History',
    answers: [
      {
        text: 'Willy the Wombat',
        correct: false,
        probability: 8,
      },
      {
        text: 'Andy the Armadillo',
        correct: true,
        probability: 63,
      },
      {
        text: 'Tex the Tumbleweed',
        correct: false,
        probability: 17,
      },
      {
        text: 'Bucky the Bull',
        correct: false,
        probability: 12,
      },
    ],
    question: "What is the name of Texas Roadhouse's mascot?",
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/dancing.webp',
    category: 'Entertainment',
    answers: [
      {
        text: 'Square dancing',
        correct: false,
        probability: 13,
      },
      {
        text: 'Tap dancing',
        correct: false,
        probability: 9,
      },
      {
        text: 'Line dancing',
        correct: true,
        probability: 57,
      },
      {
        text: 'Salsa dancing',
        correct: false,
        probability: 21,
      },
    ],
    question:
      'What type of dancing entertainment is offered at Texas Roadhouse restaurants?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/competition.jpeg',
    category: 'Food',
    answers: [
      {
        text: 'Meat Hero Competition',
        correct: true,
        probability: 48,
      },
      {
        text: 'Grill Master Showdown',
        correct: false,
        probability: 24,
      },
      {
        text: 'Steak Slicer Challenge',
        correct: false,
        probability: 16,
      },
      {
        text: "Butcher's Brawl",
        correct: false,
        probability: 12,
      },
    ],
    question:
      'What is the name of the annual competition for Texas Roadhouse meat cutters?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/community.jpeg',
    category: 'History',
    answers: [
      {
        text: 'Habitat for Humanity',
        correct: true,
        probability: 38,
      },
      {
        text: 'Doctors Without Borders',
        correct: false,
        probability: 13,
      },
      {
        text: 'American Red Cross',
        correct: false,
        probability: 26,
      },
      {
        text: 'The Salvation Army',
        correct: false,
        probability: 23,
      },
    ],
    question: 'Which homebuilding program does Texas Roadhouse support?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/singer.jpeg',
    category: 'Entertainment',
    answers: [
      {
        text: 'Garth Brooks',
        correct: false,
        probability: 19,
      },
      {
        text: 'George Strait',
        correct: false,
        probability: 21,
      },
      {
        text: 'Willie Nelson',
        correct: true,
        probability: 48,
      },
      {
        text: 'Johnny Cash',
        correct: false,
        probability: 12,
      },
    ],
    question:
      'Which famous country singer is an official partner of Texas Roadhouse?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/cuisine.jpeg',
    category: 'Food',
    answers: [
      {
        text: 'Italian',
        correct: false,
        probability: 7,
      },
      {
        text: 'Mexican',
        correct: false,
        probability: 14,
      },
      {
        text: 'Chinese',
        correct: false,
        probability: 4,
      },
      {
        text: 'Texan and American',
        correct: true,
        probability: 75,
      },
    ],
    question: 'What type of cuisine does Texas Roadhouse primarily serve?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/expansion.jpeg',
    category: 'History',
    answers: [
      {
        text: '2004',
        correct: false,
        probability: 18,
      },
      {
        text: '2011',
        correct: true,
        probability: 45,
      },
      {
        text: '2015',
        correct: false,
        probability: 25,
      },
      {
        text: '2018',
        correct: false,
        probability: 12,
      },
    ],
    question:
      'In what year did Texas Roadhouse begin its international expansion?',
  },
  {
    cover: 'https://assets.playgen.io/trivia_bg/ziosk/founder.jpeg',
    category: 'History',
    answers: [
      {
        text: 'W. Kent Taylor',
        correct: true,
        probability: 61,
      },
      {
        text: 'John Y. Brown, Jr.',
        correct: false,
        probability: 22,
      },
      {
        text: 'Jim Broyles',
        correct: false,
        probability: 8,
      },
      {
        text: 'Jerry Morgan',
        correct: false,
        probability: 9,
      },
    ],
    question: 'Who was the founder of Texas Roadhouse?',
  },
];

const tips = [
  {
    title: 'Tip',
    text: 'Texas Roadhouse bakes their own bread from scratch using a proprietary mixture of honey, cinnamon, and sugar',
  },
  {
    title: 'Tip',
    text: 'The atmosphere at Texas Roadhouse is heavily inspired by Texas and country music, right down to a jukebox filled with country favorites',
  },
  {
    title: 'Tip',
    text: 'Texas Roadhouse was founded in 1993 in Clarksville, Indiana, by W. Kent Taylor, aiming to create an affordable, Texas-style dining experience',
  },
  {
    title: 'Tip',
    text: 'Texas Roadhouse has expanded its unique dining experience globally, with locations in countries such as Kuwait, Saudi Arabia, the Philippines, and Taiwan',
  },
  {
    title: 'Tip',
    text: 'Texas Roadhouse serves over 300,000 meals per day across all its locations, offering a variety of options to suit different dietary needs',
  },
  {
    title: 'Tip',
    text: 'The atmosphere at Texas Roadhouse is heavily inspired by Texas and country music, right down to a jukebox filled with country favorite',
  },
  {
    title: 'Tip',
    text: `Texas Roadhouse's mascot is an armadillo named Andy, symbolizing the restaurant's fun, Texan spirit and commitment to family-friendly dining`,
  },
  {
    title: 'Tip',
    text: 'The restaurant hand-cuts their steaks in-house daily to ensure freshness and quality. Lean cuts of beef can provide essential nutrients like protein, iron, and zinc',
  },
  {
    title: 'Tip',
    text: 'Texas Roadhouse is committed to community service, offering special discounts and meals to veterans and active military members on Veterans Day',
  },
  {
    title: 'Tip',
    text: "One of Texas Roadhouse's signature drinks, 'Kenny’s Cooler,' is inspired by country music artist Kenny Chesney and features a delicious mix of blue curacao, peach schnapps, and lemonade",
  },
  {
    title: 'Tip',
    text: 'The ribs at Texas Roadhouse are known for being "fall-off-the-bone" tender, thanks to a slow cooking process and a special blend of seasonings',
  },
  {
    title: 'Tip',
    text: 'Texas Roadhouse started with a single location in 1993 and has grown to over 600 restaurants worldwide.',
  },
  {
    title: 'Tip',
    text: "W. Kent Taylor, the founder of Texas Roadhouse, donated his entire salary and bonus in 2020 to support the restaurant's frontline workers during the pandemic",
  },
];

const App = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [allPoints, setAllPoints] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<any>([]);
  const [currentScreen, setCurrentScreen] = React.useState('Intro');

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(
        Dimensions.get('window').width > Dimensions.get('window').height,
      );
    };

    Dimensions.addEventListener('change', updateLayout);
    //selectRandomQuestions();
    setSelectedQuestions(questions);
  }, []);

  const selectRandomQuestions = () => {
    const shuffledQuestions: any = [...questions].sort(
      () => 0.5 - Math.random(),
    );
    setSelectedQuestions(shuffledQuestions.slice(0, 10));
  };

  return (
    <>
      <StatusBar backgroundColor="#1f1f1d" barStyle="light-content" />
      {currentScreen === 'Intro' && (
        <Intro
          isLandscape={isLandscape}
          onNavigate={(screen: any) => setCurrentScreen(screen)}
        />
      )}
      {currentScreen === 'trivia' && (
        <Question
          isLandscape={isLandscape}
          currentQuestion={currentQuestion}
          totalQuestions={selectedQuestions.length}
          question={selectedQuestions[currentQuestion]}
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
          isLandscape={isLandscape}
          points={allPoints}
          onNavigate={(screen: any) => {
            setCurrentQuestion(0);
            setCurrentScreen(screen);
            setAllPoints(0);
            selectRandomQuestions();
          }}
        />
      )}

      {currentScreen === 'Points' && (
        <Points
          isLandscape={isLandscape}
          currentQuestion={currentQuestion}
          totalQuestions={selectedQuestions.length}
          points={currentPoints}
          onNext={() => {
            setCurrentScreen('Tip');
          }}
        />
      )}

      {currentScreen === 'Tip' && (
        <Tip
          isLandscape={isLandscape}
          currentQuestion={currentQuestion}
          totalQuestions={selectedQuestions.length}
          currentTip={tips[currentQuestion]}
          onNext={() => {
            if (currentQuestion < selectedQuestions.length - 1) {
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
