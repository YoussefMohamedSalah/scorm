const slides = [
  // Slide#1
  {
    number: 1,
    type: "Text",
    content: {
      title: `English Proficiency Program Module 7`,
      content: [
        {
          element: "p",
          text: `Unit 5 - World Cup`,
        },
      ],
    },
  },
  // Slide#2
  {
    number: 2,
    type: "Text",
    content: {
      title: `Objectives`,
      content: [
        {
          element: "video",
          text: "Video 1",
        },
      ],
    },
  },
  // Slide#3 --------
  {
    number: 3,
    type: "Text",
    content: {
      title: `The FIFA World Host Countries`,
      content: [
        {
          element: "video",
          text: "Video 2",
        },
      ],
    },
  },
  // Slide#4
  {
    number: 4,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) China was the __________for the 2008 Summer Olympic Games.`,
    correctAnswer: "host country",
    questionOptions: [
      {
        value: "host country",
        label: "host country",
      },
      {
        value: "hosted country",
        label: "hosted country",
      },
    ],
  },
  {
    number: 5,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) Do you think our team has much chance of ______________ for the finals?`,
    correctAnswer: `qualifying`,
    questionOptions: [
      {
        value: `quality`,
        label: `quality`,
      },
      {
        value: `qualifying`,
        label: `qualifying`,
      },
    ],
  },
  {
    number: 6,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) How many Asian teams got into the ____________ this time?`,
    correctAnswer: `finals`,
    questionOptions: [
      {
        value: `finals`,
        label: `finals`,
      },
      {
        value: `finalists`,
        label: `finalists`,
      },
    ],
  },
  // Slide#5
  {
    number: 7,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) My wife won lots of ___________ when she was an athlete in high school.`,
    correctAnswer: `trophies`,
    questionOptions: [
      {
        value: `trophies`,
        label: `trophies`,
      },
      {
        value: `triumphs`,
        label: `triumphs`,
      },
    ],
  },
  {
    number: 8,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) I'm trying to get some tickets for the ____________, but they're not easy to get.`,
    correctAnswer: `finals`,
    questionOptions: [
      {
        value: `mascot`,
        label: `mascot`,
      },
      {
        value: `finals`,
        label: `finals`,
      },
    ],
  },
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `6) Winning two games in the group stage should get us into the __________ stage.`,
    correctAnswer: `knockout`,
    questionOptions: [
      {
        value: `knockout`,
        label: `knockout`,
      },
      {
        value: `semi-finals`,
        label: `semi-finals`,
      },
    ],
  },
  // Slide#6
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Decide whether the following is an advantage or a disadvantage of hosting the World Cup.",
    questionText: `1) The host country’s national team automatically qualifies for the World Cup.`,
    correctAnswer: `advantage`,
    questionOptions: [
      {
        value: `advantage`,
        label: `advantage`,
      },
      {
        value: `disadvantage`,
        label: `disadvantage`,
      },
    ],
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Decide whether the following is an advantage or a disadvantage of hosting the World Cup.",
    questionText: `2) Tourism; as fans from many countries visit the country to watch the matches. `,
    correctAnswer: `advantage`,
    questionOptions: [
      {
        value: `advantage`,
        label: `advantage`,
      },
      {
        value: `disadvantage`,
        label: `disadvantage`,
      },
    ],
  },
  {
    number: 12,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Decide whether the following is an advantage or a disadvantage of hosting the World Cup.",
    questionText: `3) Facing and dealing with anger from fans`,
    correctAnswer: `disadvantage`,
    questionOptions: [
      {
        value: `advantage`,
        label: `advantage`,
      },
      {
        value: `disadvantage`,
        label: `disadvantage`,
      },
    ],
  },
  // Slide#7
  {
    number: 13,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Decide whether the following is an advantage or a disadvantage of hosting the World Cup.",
    questionText: `4) Gives the national team a chance to shine on the world stage`,
    correctAnswer: `advantage`,
    questionOptions: [
      {
        value: `advantage`,
        label: `advantage`,
      },
      {
        value: `disadvantage`,
        label: `disadvantage`,
      },
    ],
  },
  {
    number: 14,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Decide whether the following is an advantage or a disadvantage of hosting the World Cup.",
    questionText: `5) Spending large amounts of money on building world class facilities for teams and their security`,
    correctAnswer: `disadvantage`,
    questionOptions: [
      {
        value: `advantage`,
        label: `advantage`,
      },
      {
        value: `disadvantage`,
        label: `disadvantage`,
      },
    ],
  },
  //Slide#8
  {
    number: 15,
    type: "Text",
    content: {
      title: `World Cup Interesting Facts/The Impact and Importance of the World Cup/The Impact and Importance of the World Cup`,
      content: [
        {
          element: "video",
          text: "Video 3",
        },
      ],
    },
  },
  //Slide#9
  {
    number: 16,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) In your opinion, what are some of the pros and cons of hosting the World Cup that were not mentioned earlier?",
        },
      ],
    },
  },
  //Slide#10
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) We were very ______________ watching the match, as our team played a tough game. `,
    correctAnswer: `tense`,
    questionOptions: [
      {
        value: `tense`,
        label: `tense`,
      },
      {
        value: `thrilled`,
        label: `thrilled`,
      },
    ],
  },
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) This is one of the most _____________ football matches I’ve ever watched. I can’t believe we lost! `,
    correctAnswer: `frustrating`,
    questionOptions: [
      {
        value: `frustrating`,
        label: `frustrating`,
      },
      {
        value: `incredible`,
        label: `incredible`,
      },
    ],
  },
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) Global brands often collaborate with ________ football players to make advertisements. `,
    correctAnswer: `iconic`,
    questionOptions: [
      {
        value: `tense`,
        label: `tense`,
      },
      {
        value: `iconic`,
        label: `iconic`,
      },
    ],
  },
  //Slide#11
  {
    number: 20,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) Maradona, Pele, and Zidan are _____________ football players. `,
    correctAnswer: `legendary`,
    questionOptions: [
      {
        value: `frustrating`,
        label: `frustrating`,
      },
      {
        value: `legendary`,
        label: `legendary`,
      },
    ],
  },
  {
    number: 21,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) It was a _______________ result for the team to lose, given the poor performance of the players.`,
    correctAnswer: `predictable`,
    questionOptions: [
      {
        value: `legendary`,
        label: `legendary`,
      },
      {
        value: `predictable`,
        label: `predictable`,
      },
    ],
  },
  //Slide#12
  {
    number: 22,
    type: "Text",
    content: {
      title: `Answer the following questions.`,
      content: [
        {
          element: "p",
          text: "1) Are you rooting for a certain team?",
        },
        {
          element: "p",
          text: "2) Do you have a favorite player?",
        },
        {
          element: "p",
          text: "3) Have you ever been to a World Cup?",
        },
        {
          element: "p",
          text: "4) Are you going to this World Cup?",
        },
        {
          element: "p",
          text: "5) Where will you be watching the World Cup?",
        },
      ],
    },
  },
  //Slide#13
  {
    number: 23,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "1. The World Cup is only important for the economy.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" },
    ],
  },
  {
    number: 24,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "2. The World Cup offers a great opportunity for people to come together and unite.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" },
    ],
  },
  {
    number: 25,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "3. Only football fanatics can watch the World Cup.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" },
    ],
  },
  {
    number: 26,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "4. A global event like the World Cup can have an impact on different factors of life.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" },
    ],
  },
  {
    number: 27,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "5. The impact of the World Cup “off the field” means the effect of the World Cup outside the soccer field.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" },
    ],
  },
  //Slide#14
  {
    number: 28,
    type: "Text",
    content: {
      title: `It’s Pronunciation Time!`,
      content: [
        {
          element: "video",
          text: "Video 4",
        },
      ],
    },
  },
  // Slide#15
  {
    number: 29,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        // style: { fontWeight: 700 },
        {
          element: "p",
          text: "* In this unit, we learned about the following:",
          style: { fontWeight: 700 },
        },
        {
          element: "p",
          text: "1) The FIFA World Cup.",
        },
        {
          element: "p",
          text: "2) Host countries and the criteria of choosing them.",
        },
        {
          element: "p",
          text: "3) Pros and cons of hosting the World Cup.",
        },
        {
          element: "p",
          text: "4) World Cup interesting facts.",
        },
        {
          element: "p",
          text: "5) The impact and importance of the World Cup .",
        },
        {
          element: "p",
          text: "* We will also learn how to use phrasal verbs in sentences and their different meanings.",
          style: { fontWeight: 700 },
        },
      ],
    },
  },
  // Slide#16
  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) The company will need to start using more advanced technologies in order to _____________ its competitors in the industry. `,
    correctAnswer: `catch up with`,
    questionOptions: [
      {
        value: `catch on`,
        label: `catch on`,
      },
      {
        value: `catch up with`,
        label: `catch up with`,
      },
    ],
  },
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) She spends hours on the telephone, ____________  old friends.`,
    correctAnswer: `catching up with`,
    questionOptions: [
      {
        value: `catching up with`,
        label: `catching up with`,
      },
      {
        value: `chatting up`,
        label: `chatting up`,
      },
    ],
  },
  {
    number: 32,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) You’ll have to work harder to _____________ the top students in your class.`,
    correctAnswer: `catch up with`,
    questionOptions: [
      {
        value: `catch at`,
        label: `catch at`,
      },
      {
        value: `catch up with`,
        label: `catch up with`,
      },
    ],
  },
  // Slide#17
  {
    number: 33,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) She used the day to ________________ administrative tasks.`,
    correctAnswer: `catch up with/on`,
    questionOptions: [
      {
        value: `catch up with/on`,
        label: `catch up with/on`,
      },
      {
        value: `catch up with`,
        label: `catch up with`,
      },
    ],
  },
  {
    number: 34,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) It may seem strange at first, but it will soon_________ with people.`,
    correctAnswer: `catch on`,
    questionOptions: [
      {
        value: `catch at`,
        label: `catch at`,
      },
      {
        value: `catch on`,
        label: `catch on`,
      },
    ],
  },
  // Slide#18
  {
    number: 35,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Checking for Understanding",
    subTitle: "Match the definition to its correct term.",
    matchOptions: [
      `1. the stage of a tournament in which player or teams compete in groups`,
      `2. a player or team that comes second in a tournament or race`,
      `3. a round of four matches, the winners of which qualify for the semi-finals`,
      `4. a round of two matches, the winner of which qualify for the final`,
      `5. the stage of a tournament in which competitors are eliminated if they lose`,
    ],
    matchAnswers: [
      `a. knockout stage`,
      `b. quarterfinals`,
      `c. group stage`,
      `d. runner-up`,
      `e. semi-finals`,
    ],
    correctMatch: {
      "1. the stage of a tournament in which player or teams compete in groups": "c. group stage",
      "2. a player or team that comes second in a tournament or race": "d. runner-up",
      "3. a round of four matches, the winners of which qualify for the semi-finals": "b. quarterfinals",
      "4. a round of two matches, the winner of which qualify for the final": "e. semi-finals",
      "5. the stage of a tournament in which competitors are eliminated if they lose":
        "a. knockout stage",
    },
    correction: "The correct match is (1c, 2d, 3b, 4e, 5a)",
  },
  // Slide#19
  {
    number: 36,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) In the Olympic Games, the ____________ are awarded a silver medal.`,
    correctAnswer: `runner-ups`,
    questionOptions: [
      {
        value: `winners`,
        label: `winners`,
      },
      {
        value: `runner-ups`,
        label: `runner-ups`,
      },
    ],
  },
  {
    number: 37,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) The guys were really upset about being ____________ before the semi-finals.`,
    correctAnswer: `eliminated`,
    questionOptions: [
      {
        value: `qualified`,
        label: `qualified`,
      },
      {
        value: `eliminated`,
        label: `eliminated`,
      },
    ],
  },
  {
    number: 38,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) The ____________ will be held about a week before the finals.`,
    correctAnswer: `semi-finals`,
    questionOptions: [
      {
        value: `semi-finals`,
        label: `semi-finals`,
      },
      {
        value: `runner-ups`,
        label: `runner-ups`,
      },
    ],
  },
  // Slide#20
  {
    number: 39,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) The _______________ for the FIFA World Cup Qatar 2022 is set to take place on Sunday, November 20.`,
    correctAnswer: `opening ceremony`,
    questionOptions: [
      {
        value: `opening ceremony`,
        label: `opening ceremony`,
      },
      {
        value: `host country`,
        label: `host country`,
      },
    ],
  },
  {
    number: 40,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) Being an athlete can be very ___________ sometimes, given the intense hours of training.`,
    correctAnswer: `frustrating`,
    questionOptions: [
      {
        value: `frustrating`,
        label: `frustrating`,
      },
      {
        value: `legendary`,
        label: `legendary`,
      },
    ],
  },
  // Slide#21
  {
    number: 41,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) The ______________ skills of Mohamed Salah make him unique.`,
    correctAnswer: `incredible`,
    questionOptions: [
      {
        value: `tense`,
        label: `tense`,
      },
      {
        value: `incredible`,
        label: `incredible`,
      },
    ],
  },
  {
    number: 42,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) Attending the World Cup was one of the most __________ experiences I’ve ever had.`,
    correctAnswer: `thrilling`,
    questionOptions: [
      {
        value: `thrilling`,
        label: `thrilling`,
      },
      {
        value: `tense`,
        label: `tense`,
      },
    ],
  },
  {
    number: 43,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) Which international players is expected to shine?",
        },
        {
          element: "p",
          text: "2) Who do you think is the best player in the world now?",
        },
        {
          element: "p",
          text: "3) Who do you think was the best player of all time?",
        },
        {
          element: "p",
          text: "4) What is the best goal you have seen so far?",
        },
      ],
    },
  },
];

export default slides;
