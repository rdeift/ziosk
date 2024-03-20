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
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216317826558722068/rnstudio_colorful_and_various_childlike_musicians_playing_in_a__6e469a70-ae93-4b17-80e4-03cc81de908e.png?ex=65fff33f&is=65ed7e3f&hm=03b573bf2051d9d05c2f8725c292c9d4bb8de688b0bc62e677aa600eec05ed27&',
    answers: [
      {
        text: 'A team',
        correct: false,
        probability: 11,
      },
      {
        text: 'A crew',
        correct: false,
        probability: 22,
      },
      {
        text: 'A band',
        correct: true,
        probability: 43,
      },
      {
        text: 'A pack',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What do you call a group of musicians playing together?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216318763243143238/rnstudio_white_bowling_pins_2e1296df-75b1-41c4-a7f0-2a655cdb2e6a.png?ex=65fff41f&is=65ed7f1f&hm=48958c776bf187cc9145b760dc97c708777c270b55041d398749f5b784e28047&',
    answers: [
      {
        text: 'Bowling',
        correct: true,
        probability: 43,
      },
      {
        text: 'Golf',
        correct: false,
        probability: 11,
      },
      {
        text: 'Ping Pong',
        correct: false,
        probability: 22,
      },
      {
        text: 'Darts',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What is the name of the game where you try to knock down pins with a ball?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216336804526030938/rnstudio_various_colorful_people_running_a_marathon_minimalisti_78825f11-0959-4ba0-99fb-cce4d1af364e.png?ex=660004ec&is=65ed8fec&hm=39cf7860163aa841317cd07c395531b6496de013d47d83db7fe8bb56a31973a7&',
    answers: [
      {
        text: 'Lungs',
        correct: true,
        probability: 43,
      },
      {
        text: 'Heart',
        correct: false,
        probability: 11,
      },
      {
        text: 'Stomach',
        correct: false,
        probability: 22,
      },
      {
        text: 'Brain',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What do you use to breathe?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216319834829226066/rnstudio_childlike_london_minimalistic_1ba3d060-f553-400d-9644-d6138f2ab7ab.png?ex=65fff51e&is=65ed801e&hm=c6c0c158059b91e015526b151259e9a885ab38916c4fd48484fdeb43abc6855a&',
    answers: [
      {
        text: 'Buckingham Palace',
        correct: false,
        probability: 11,
      },
      {
        text: 'Big Ben',
        correct: true,
        probability: 43,
      },
      {
        text: 'London Eye',
        correct: false,
        probability: 22,
      },
      {
        text: 'Tower Bridge',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the famous bell tower landmark in London?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216320601518506065/rnstudio_childlike_colorful_new_york_city_harbor_minimalistic_cbc60011-46c3-454c-8b22-68ea2fdf300d.png?ex=65fff5d5&is=65ed80d5&hm=2f246b61a6c6b31af7fb3995c0a5d7e387c43d505187df7100c0c4e9030c560b&',
    answers: [
      {
        text: 'The Thinker',
        correct: false,
        probability: 11,
      },
      {
        text: 'The Kiss',
        correct: false,
        probability: 22,
      },
      {
        text: 'The Statue of Liberty',
        correct: true,
        probability: 43,
      },
      {
        text: 'David',
        correct: false,
        probability: 24,
      },
    ],
    question: "What famous statue stands in New York City's harbor?",
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216320548767006751/rnstudio_childlike_space_rocket_in_space_ae2b8099-f865-4b89-9ec9-5198d021b3f6.png?ex=65fff5c8&is=65ed80c8&hm=135876eaabb7a86bdd0ee6c73a30bd6d9054c16bf3a72d6c0b156f629e31a0bd&',
    answers: [
      {
        text: 'Neil Armstrong',
        correct: false,
        probability: 11,
      },
      {
        text: 'Buzz Aldrin',
        correct: false,
        probability: 22,
      },
      {
        text: 'Yuri Gagarin',
        correct: true,
        probability: 43,
      },
      {
        text: 'Laika',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the name of the first human being to travel to space?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216322087082266655/rnstudio_childlike_colorful_laboratory_3b689f96-c79c-485d-b7cf-d6d3be913b7e.png?ex=65fff737&is=65ed8237&hm=bd902081e11011ace13eb80976beb61a2bcc97221869269f279bee8b7dded4af&',
    answers: [
      {
        text: 'Microscope',
        correct: true,
        probability: 43,
      },
      {
        text: 'Telescope',
        correct: false,
        probability: 11,
      },
      {
        text: 'Compass',
        correct: false,
        probability: 22,
      },
      {
        text: 'X-ray Machine',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What invention allows us to see tiny objects?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216323998237855834/rnstudio_greek_mythology_zeus_minimalistic_807b7ae9-f35b-4fe3-ab55-4fb0d17086c5.png?ex=65fff8ff&is=65ed83ff&hm=40c4f8d91579c4d08fb61662274784cf9417c31ce163a3eaa6e12f8e6999ebd6&',
    answers: [
      {
        text: 'Zeus',
        correct: true,
        probability: 43,
      },
      {
        text: 'Poseidon',
        correct: false,
        probability: 11,
      },
      {
        text: 'Hades',
        correct: false,
        probability: 22,
      },
      {
        text: 'Ares',
        correct: false,
        probability: 24,
      },
    ],
    question: 'In Greek mythology, who is the king of the gods?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216325197033115689/rnstudio_various_money_currencies_e1080758-e77d-47fc-a5ed-6424ce4bb29e.png?ex=65fffa1d&is=65ed851d&hm=57a57ab47b87115ed87785a90713736c1ad842bdaa34133c47b0ea43214e94b1&',
    answers: [
      {
        text: 'Dollar',
        correct: false,
        probability: 11,
      },
      {
        text: 'Euro',
        correct: true,
        probability: 43,
      },
      {
        text: 'British Pound',
        correct: false,
        probability: 22,
      },
      {
        text: 'Yen',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the currency used in Italy?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216322302321491998/rnstudio_canadian_flag_a3720334-2f0e-44b8-bb32-dd6ac96246b7.png?ex=65fff76b&is=65ed826b&hm=bd18b8077597743290a883ef79eb48d789c44dda31e0742dcda79cee9e2b5349&',
    answers: [
      {
        text: 'Toronto',
        correct: false,
        probability: 11,
      },
      {
        text: 'Ottawa',
        correct: true,
        probability: 43,
      },
      {
        text: 'Montreal',
        correct: false,
        probability: 22,
      },
      {
        text: 'Vancouver',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the capital of Canada?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216323529964916746/rnstudio_childlike_colorful_long_river_9d446cc7-54c6-4474-9dc4-7f164d96a2f6.png?ex=65fff88f&is=65ed838f&hm=ba2b24937beb3652fa373f92b298d5dea50d9a8696c5bc4878d9ced826b35c8c&',
    answers: [
      {
        text: 'Nile River',
        correct: true,
        probability: 43,
      },
      {
        text: 'Amazon River',
        correct: false,
        probability: 11,
      },
      {
        text: 'Yangtze River',
        correct: false,
        probability: 22,
      },
      {
        text: 'Mississippi River',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the longest river in the world?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216324684010750043/rnstudio_dutch_flag_cb95c58a-4a71-4ca6-a793-6fcc2e9ee6e5.png?ex=65fff9a2&is=65ed84a2&hm=9b6e7b4c79844d1c3758411a64c6a7997e5c6ecd53eeabea895d96565f4d35cb&',
    answers: [
      {
        text: 'French',
        correct: false,
        probability: 11,
      },
      {
        text: 'English',
        correct: false,
        probability: 22,
      },
      {
        text: 'Spanish',
        correct: false,
        probability: 24,
      },
      {
        text: 'Dutch',
        correct: true,
        probability: 43,
      },
    ],
    question: 'What is the official language spoken in The Netherlands?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217903141278716036/rnstudio_various_olympic_flags_minimalistic_ce019f3d-fdda-486d-b07c-a11f25e1ea73.png?ex=6605b7b0&is=65f342b0&hm=1ef914055b83e0587098028b78d7d329a94fa6e07f0bd9808f95e50d95baa324&',
    answers: [
      {
        text: 'Red, white, and pink',
        correct: false,
        probability: 11,
      },
      {
        text: 'Red, white, and blue',
        correct: true,
        probability: 43,
      },
      {
        text: 'Yellow, green, and black',
        correct: false,
        probability: 22,
      },
      {
        text: 'Purple, orange, and white',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What are the colors of the flag of the United States?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216337979799507014/rnstudio_water_minimalistic_fa72fdc5-37cf-4ec5-a25d-2f178e8a7973.png?ex=66000604&is=65ed9104&hm=dd5557ad9b3a38fa18f663d03bcf0080afc434037fcba03d06250aacb5bdf3fd&',
    answers: [
      {
        text: 'H2O',
        correct: true,
        probability: 43,
      },
      {
        text: 'CO2',
        correct: false,
        probability: 11,
      },
      {
        text: 'O2',
        correct: false,
        probability: 22,
      },
      {
        text: 'He',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the chemical symbol for water?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216326748883386458/rnstudio_coloful_detective_minimalistic_32efc610-98d9-405d-9905-d1a363eaa0b0.png?ex=65fffb8f&is=65ed868f&hm=0ff408b544da35e40f50d2f118918501e11ec29ba526b9ea74fac20b9683536c&',
    answers: [
      {
        text: 'Sherlock Holmes',
        correct: true,
        probability: 43,
      },
      {
        text: 'Hercule Poirot',
        correct: false,
        probability: 11,
      },
      {
        text: 'Miss Marple',
        correct: false,
        probability: 22,
      },
      {
        text: 'Nancy Drew',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What is the name of the famous detective by Sir Arthur Conan Doyle?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216328090486050976/rnstudio_photosynthesis_leaves_7ef84f86-7139-455c-9a48-5d001ff73360.png?ex=65fffccf&is=65ed87cf&hm=2a1e291c1565d12c67b884f349a25bab89ebda92a3fd930020effc78429d1723&',
    answers: [
      {
        text: 'Respiration',
        correct: false,
        probability: 11,
      },
      {
        text: 'Transpiration',
        correct: false,
        probability: 22,
      },
      {
        text: 'Germination',
        correct: false,
        probability: 24,
      },
      {
        text: 'Photosynthesis',
        correct: true,
        probability: 43,
      },
    ],
    question:
      'What is the process called when plants turn sunlight into energy?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216327674176344105/rnstudio_various_and_colorful_traditional_dresses_minimalistic_1e22f54b-f30a-43bf-86e4-c02614106835.png?ex=65fffc6b&is=65ed876b&hm=a677b742df4399caffcd2f2f4f8cacab420c45bec9a645766505612f3a308290&',
    answers: [
      {
        text: 'Kimono',
        correct: false,
        probability: 11,
      },
      {
        text: 'Sari',
        correct: true,
        probability: 43,
      },
      {
        text: 'Cheongsam',
        correct: false,
        probability: 22,
      },
      {
        text: 'Hanbok',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the traditional clothing worn by women in India called?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216328769237815376/rnstudio_colorful_landscape_of_rio_de_janeiro_29b8bfcc-3f45-4414-b8e9-f58c189685dc.png?ex=65fffd70&is=65ed8870&hm=ed3abc7e355464ea41947c3c15f52ee37c0b0f41d42554b570b3f50ede748017&',
    answers: [
      {
        text: 'French',
        correct: false,
        probability: 11,
      },
      {
        text: 'Portuguese',
        correct: true,
        probability: 43,
      },
      {
        text: 'Spanish',
        correct: false,
        probability: 22,
      },
      {
        text: 'Italian',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the official language in Brazil?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216328937957756968/rnstudio_colorful_japanese_landscape_398b1cb7-a96f-4b2f-b3e4-1c26fff671fc.png?ex=65fffd99&is=65ed8899&hm=63f0f3671e98ff616a19ef8c6de1d5a08875ca4226f86100090eceef0fd51c77&',
    answers: [
      {
        text: '€',
        correct: false,
        probability: 11,
      },
      {
        text: '$',
        correct: false,
        probability: 22,
      },
      {
        text: '¥',
        correct: true,
        probability: 43,
      },
      {
        text: '£',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the symbol for the Japanese Yen?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216329112441061436/rnstudio_various_guacamole_dishes_minimalistic_089bd7b4-5cb6-4d62-8105-29eb3ba0663a.png?ex=65fffdc2&is=65ed88c2&hm=48d3b23275004e8f170e3526a3773410d22e4ad9b73705448d5065a24684080b&',
    answers: [
      {
        text: 'Avocado',
        correct: true,
        probability: 43,
      },
      {
        text: 'Tomato',
        correct: false,
        probability: 11,
      },
      {
        text: 'Onion',
        correct: false,
        probability: 22,
      },
      {
        text: 'Pepper',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is traditionally the main ingredient in guacamole?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216330730351890452/rnstudio_walt_disney_studios_minimalistic_514920b0-e39a-4bc4-94e6-bddacc654d2b.png?ex=65ffff44&is=65ed8a44&hm=6d77e64d25966846049df362ff3265ff76d37c4219c11fda72e92aa399d747f2&',
    answers: [
      {
        text: 'Bugs Bunny',
        correct: false,
        probability: 11,
      },
      {
        text: 'Mickey Mouse',
        correct: true,
        probability: 43,
      },
      {
        text: 'Daffy Duck',
        correct: false,
        probability: 22,
      },
      {
        text: 'Scooby-Doo',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What is the name of the famous cartoon mouse created by Walt Disney?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216330074454888528/rnstudio_typical_landscape_of_a_mega_city_in_the_united_states__e9add604-2940-469a-8c92-bc9dee19411e.png?ex=65fffea8&is=65ed89a8&hm=60f486c0a17b9f3c992bf1efcbd723f6316e209e1b3a0cad909fea2c754d3cc4&',
    answers: [
      {
        text: 'Los Angeles',
        correct: false,
        probability: 11,
      },
      {
        text: 'Washington D.C.',
        correct: true,
        probability: 43,
      },
      {
        text: 'New York City',
        correct: false,
        probability: 22,
      },
      {
        text: 'Miami',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the capital of the United States?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216332390431985776/rnstudio_various_and_colorful_flipping_calendars_minimalistic_691cd6ac-a649-4501-ab9b-502956e1398a.png?ex=660000d0&is=65ed8bd0&hm=0ab9d4ee7fecfb9d905fce5c01199e65ec2d50858d818663142cd8aebed8e424&',
    answers: [
      {
        text: 'January',
        correct: false,
        probability: 11,
      },
      {
        text: 'February',
        correct: false,
        probability: 22,
      },
      {
        text: 'March',
        correct: true,
        probability: 43,
      },
      {
        text: 'April',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What is the name of the third month of the year?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216330926246592564/rnstudio_colorful_vineyard_minimalistic_ca9591b5-8770-47cf-b611-ca7ccebed81e.png?ex=65ffff73&is=65ed8a73&hm=39c015a9f8a55c8a2379b14141bb3d7e20b5effb4daa6417b70797c0d45529b4&',
    answers: [
      {
        text: 'California',
        correct: true,
        probability: 43,
      },
      {
        text: 'Alaska',
        correct: false,
        probability: 11,
      },
      {
        text: 'New York',
        correct: false,
        probability: 22,
      },
      {
        text: 'Florida',
        correct: false,
        probability: 24,
      },
    ],
    question: 'In which State is Napa Valley?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216331615551361174/rnstudio_various_colorful_scientists_minimalistic_5c6b3d7d-5d7c-4e40-9749-c48bc7574990.png?ex=66000017&is=65ed8b17&hm=8bb21a611726f76e313844bf7bcd1717cb3e6662aa2f8d88b7a4c7df72b2505a&',
    answers: [
      {
        text: 'Marie Curie',
        correct: true,
        probability: 43,
      },
      {
        text: 'Isaac Newton',
        correct: false,
        probability: 11,
      },
      {
        text: 'Albert Einstein',
        correct: false,
        probability: 22,
      },
      {
        text: 'Leonardo da Vinci',
        correct: false,
        probability: 24,
      },
    ],
    question: 'Which scientist discovered radium and polonium?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216331933173289090/rnstudio_various_and_colorful_womens_framed_portraits_minimalis_ae1c16c9-19d0-4375-917c-f31c7efec8a3.png?ex=66000063&is=65ed8b63&hm=955e5f6b82730bd97d48e5d54ee4b36e9a53586f9c2da0e6a09b85e955494e95&',
    answers: [
      {
        text: 'The Scream',
        correct: false,
        probability: 11,
      },
      {
        text: 'Starry Night',
        correct: false,
        probability: 22,
      },
      {
        text: 'Mona Lisa',
        correct: true,
        probability: 43,
      },
      {
        text: 'The Kiss',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What is the name of the famous painting featuring a woman with a mysterious smile?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216333799986827394/rnstudio_various_and_colorful_olymic_games_sporters_a08ab9dd-f0fb-414e-8800-b9f1609b0721.png?ex=66000220&is=65ed8d20&hm=1a0e342ed143f7b705191db4f278ad651802ea24e3dfecb06c24ac24fd94150b&',
    answers: [
      {
        text: 'Red, white, and blue',
        correct: false,
        probability: 11,
      },
      {
        text: 'Yellow, green, and black',
        correct: false,
        probability: 22,
      },
      {
        text: 'Purple, orange, and white',
        correct: false,
        probability: 24,
      },
      {
        text: 'Blue, yellow, black, green, and red',
        correct: true,
        probability: 43,
      },
    ],
    question: 'What are the traditional colors used in the Olympic rings?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216333103220654110/rnstudio_various_and_colorful_cutlery_minimalistic_e66f4865-25ac-4dbe-9100-cd7fb5f931bb.png?ex=6600017a&is=65ed8c7a&hm=bee8dad40a29ba2e805f79a66c39ffb329c0f6ddc94c1e8d2d68bf70d2120ec0&',
    answers: [
      {
        text: 'Spoon',
        correct: false,
        probability: 11,
      },
      {
        text: 'Fork',
        correct: false,
        probability: 22,
      },
      {
        text: 'Knife',
        correct: true,
        probability: 43,
      },
      {
        text: 'Spatula',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What tool has a sharp blade and is used for cutting food?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1216333255037554778/rnstudio_typical_street_landscape_in_new_york_minimalistic_c7337e3c-e19a-4eb3-bde4-1707f12682d2.png?ex=6600019e&is=65ed8c9e&hm=c973a22c230e13269dcd58c8e30c2874029e72ce7e47976aeb5f63c8c4f6efb2&',
    answers: [
      {
        text: 'Main Street',
        correct: false,
        probability: 11,
      },
      {
        text: 'Hollywood Boulevard',
        correct: false,
        probability: 22,
      },
      {
        text: 'Broadway',
        correct: true,
        probability: 43,
      },
      {
        text: 'Wall Street',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What is the name of the famous street in New York City known for its bright lights and theaters?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217791187159748618/rnstudio_minimalistic_colorful_seafood_spaghetti_dish_and_steak_199f221a-01d8-43a2-aaa1-18cd9cceb81b.png?ex=66054f6c&is=65f2da6c&hm=be3429cdad76c9ad7e7ed7f4a8a32c3dba690ed0fb5b61372efec7d395ce033a&',
    answers: [
      {
        text: 'Seafood',
        correct: false,
        probability: 11,
      },
      {
        text: 'Texan and Southwestern cuisine',
        correct: true,
        probability: 43,
      },
      {
        text: 'Italian',
        correct: false,
        probability: 22,
      },
      {
        text: 'French',
        correct: false,
        probability: 24,
      },
    ],
    question: 'What type of restaurant did Texas Roadhouse specialize in?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217773225157722152/rnstudio_colorful_minimalistic_colorado_landscape_c756ec52-2a19-4184-a506-639ad184c068.png?ex=66053eb2&is=65f2c9b2&hm=72e5bc762f6bb571596c6c8a5d826202bbb0c120a803afaa4565a96651c1f793&',
    answers: [
      {
        text: 'Louisville, Kentucky',
        correct: false,
        probability: 11,
      },
      {
        text: 'Clarksville, Indiana',
        correct: true,
        probability: 43,
      },
      {
        text: 'Austin, Texas',
        correct: false,
        probability: 22,
      },
      {
        text: 'Denver, Colorado',
        correct: false,
        probability: 24,
      },
    ],
    question: 'Where was the very first Texas Roadhouse opened?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217785378287915078/rnstudio_minimalistic_magic_hat_and_white_rabbit_2c40f7b9-f105-49b9-9387-80ae23dc3f47.png?ex=66054a03&is=65f2d503&hm=913d6bfbb8fcddef31c1d95c3efcd5b6e140ffd8397df8db33970f4e5c7c730e&',
    answers: [
      {
        text: 'With a birthday song',
        correct: false,
        probability: 11,
      },
      {
        text: 'With a dream sketched on a cocktail napkin',
        correct: true,
        probability: 43,
      },
      {
        text: 'With a magic trick',
        correct: false,
        probability: 22,
      },
      {
        text: 'With a clock',
        correct: false,
        probability: 24,
      },
    ],
    question:
      "How did W. Kent Taylor today's made-from-scratch food (at a great value) and legendary service begin?",
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217787811227238510/rnstudio_minimalistic_colorful_bull_rattlesnake_longhorn_steer__441bcb03-5717-4f98-8b8c-4e2c9f003987.png?ex=66054c47&is=65f2d747&hm=6bdf9259f3ae035837b36fac03659bd70d032ff9892b0cb37ac5b427c6dd9d11&',
    answers: [
      {
        text: 'Bull',
        correct: false,
        probability: 11,
      },
      {
        text: 'Armadillo',
        correct: true,
        probability: 43,
      },
      {
        text: 'Rattlesnake',
        correct: false,
        probability: 22,
      },
      {
        text: 'Longhorn Steer',
        correct: false,
        probability: 24,
      },
    ],
    question: 'Which animal is the mascot of Texas Roadhouse?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217773594713653269/rnstudio_fresh_bread_rolls_9848aa50-d408-480e-85a8-d1fc85736630.png?ex=66053f0a&is=65f2ca0a&hm=4efbdf1d243a7a117d58408876815e7bb31767f1cb4d619d03f2dda0e457b289&',
    answers: [
      {
        text: 'A dipping sauce',
        correct: false,
        probability: 11,
      },
      {
        text: 'Honeycomb butter',
        correct: false,
        probability: 22,
      },
      {
        text: 'Honey cinnamon butter',
        correct: true,
        probability: 43,
      },
      {
        text: 'Chopped peanuts',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'Texas Roadhouse is known for its fresh rolls delivered to your table. What are they served with?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217774326640808026/rnstudio_colorful_minimalistic_birthday_cake_with_lit_candles_c8605474-f50d-4604-8971-99d757afed50.png?ex=66053fb8&is=65f2cab8&hm=a4614062a8c1db2e50cbf0e86f85c11ffa7a5deaf9bef401ba3431a789f1a632&',
    answers: [
      {
        text: 'Bring a slice of carrot cake',
        correct: false,
        probability: 11,
      },
      {
        text: 'Wear a festive sombrero',
        correct: false,
        probability: 22,
      },
      {
        text: 'Sing "Happy Birthday"',
        correct: true,
        probability: 43,
      },
      {
        text: 'Waltz with you',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'What might your server do if you are celebrating your birthday at Texas Roadhouse?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217781723480199268/rnstudio_various_colorful_world_globes_4790b622-2c25-4896-b0c7-d2c022b94e03.png?ex=6605469c&is=65f2d19c&hm=23475b6ec5efe6c773b1b2d91eb2afd754065dcd12187dbca67f60c281a1940f&',
    answers: [
      {
        text: 'Toronto, Canada',
        correct: false,
        probability: 11,
      },
      {
        text: 'Dubai, United Arab Emirates',
        correct: true,
        probability: 43,
      },
      {
        text: 'Mexico City, Mexico',
        correct: false,
        probability: 22,
      },
      {
        text: 'London, England',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'Texas Roadhouse started in the USA, but what was their first international location (in 2011)?',
  },
  // {
  //   cover:
  //     'https://cdn.discordapp.com/attachments/1133267481008545822/1217789386330996777/rnstudio_colorful_and_various_people_with_anti_corona_masks_f032ce87-d757-4122-a2c8-474382240968.png?ex=66054dbf&is=65f2d8bf&hm=274c7ee1e48776dd89d4b0aa423b138acc2d30e155357ef80f8a66c2c9e190bd&',
  //   answers: [
  //     {
  //       text: 'Offered free meals to all employees worldwide',
  //       correct: false,
  //       probability: 11,
  //     },
  //     {
  //       text: 'Donated his salary and bonus to his employees',
  //       correct: true,
  //       probability: 43,
  //     },
  //     {
  //       text: 'Provided childcare assistance worldwide',
  //       correct: false,
  //       probability: 22,
  //     },
  //     {
  //       text: 'Extended paid sick leave worldwide',
  //       correct: false,
  //       probability: 24,
  //     },
  //   ],
  //   question:
  //     'How did Texas Roadhouse founder W. Kent Taylor support his employees during the COVID-19 pandemic?',
  // },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217777276255604789/rnstudio_minimalistic_colorful_dancing_restaurant_servers_9198ffc7-0bfa-4377-9af2-9decfaf48e6c.png?ex=66054277&is=65f2cd77&hm=2d8bdb5b0399e3a1664e35cb186dc562d52293bda9b18505ef5e328b1015f02f&',
    answers: [
      {
        text: 'The Macarena',
        correct: false,
        probability: 11,
      },
      {
        text: 'The Cha Cha Slide',
        correct: false,
        probability: 22,
      },
      {
        text: 'The Cotton-Eyed Joe',
        correct: false,
        probability: 24,
      },
      {
        text: 'The Texas Two-Step',
        correct: true,
        probability: 43,
      },
    ],
    question:
      'What line-dancing move might you see servers perform at Texas Roadhouse?',
  },
  {
    cover:
      'https://cdn.discordapp.com/attachments/1133267481008545822/1217780472218783844/rnstudio_small_white_minimalistic_cozy_and_homey_traditional_fa_672b89d6-8a9d-4e33-95c6-b08917086e27.png?ex=66054571&is=65f2d071&hm=4107a28e349d34f6caeb2c5ebae04379397aaf2721510a289fc72bf5784380f2&',
    answers: [
      {
        text: 'The Salvation Army',
        correct: false,
        probability: 11,
      },
      {
        text: 'Habitat for Humanity',
        correct: false,
        probability: 22,
      },
      {
        text: 'Homes For Our Troops',
        correct: true,
        probability: 43,
      },
      {
        text: 'American Red Cross',
        correct: false,
        probability: 24,
      },
    ],
    question:
      'Texas Roadhouse is supporting a charity that builds homes for veterans. Which one is it?',
  },
];

const App = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height,
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [allPoints, setAllPoints] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentScreen, setCurrentScreen] = React.useState('Intro');

  const getRandomQuestions = (array: any, count: any) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled;
  };

  useEffect(() => {
    const updateLayout = () => {
      setIsLandscape(
        Dimensions.get('window').width > Dimensions.get('window').height,
      );
    };

    Dimensions.addEventListener('change', updateLayout);

    // Select 10 random questions from the questions array
    const randomQuestions = getRandomQuestions(questions, 10);
    setSelectedQuestions(randomQuestions);
  }, []);

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
