const slides = [
  // Slide#1
  {
    number: 1,
    type: "Text",
    content: {
      title: `English Proficiency Program Module 8`,
      content: [
        {
          element: "p",
          text: `Unit 2 - Olympic Games`
        }
      ]
    }
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
          text: "Video 1"
        }
      ]
    }
  },
  // Slide#3
  {
    number: 3,
    type: "Text",
    content: {
      title: `The Olympics/Games/`,
      content: [
        {
          element: "video",
          text: "Video 2"
        }
      ]
    }
  },
  // Slide#4
  {
    number: 4,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "1. The Olympics originated in Ancient Greece.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 5,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText:
      "2. The Olympics is hosted in the same city every four years.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 6,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "3. The Olympics is held every four years.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 7,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "4. The Olympics became a global event in 1896.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#5
  {
    number: 8,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `1. The concert began with the national __________. `,
    correctAnswer: "anthem",
    questionOptions: [
      {
        value: "anthem",
        label: "anthem"
      },
      {
        value: "stamina",
        label: "stamina"
      }
    ]
  },
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `2. Canada will ___________ smoking in all offices later this year. `,
    correctAnswer: "ban",
    questionOptions: [
      {
        value: "ban",
        label: "ban"
      },
      {
        value: "broadcast",
        label: "broadcast"
      }
    ]
  },
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `3. In that year, she became a television ______________ for a show that discussed family life and family health. `,
    correctAnswer: "broadcaster",
    questionOptions: [
      {
        value: "controversy",
        label: "controversy"
      },
      {
        value: "broadcaster",
        label: "broadcaster"
      }
    ]
  },
  // Slide#6
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `4. There are excellent ______________ for sports and recreation. `,
    correctAnswer: "facilities",
    questionOptions: [
      {
        value: "standings",
        label: "standings"
      },
      {
        value: "facilities",
        label: "facilities"
      }
    ]
  },
  {
    number: 12,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `5. A _____________ signaled the entrance of the king. `,
    correctAnswer: "fanfare",
    questionOptions: [
      {
        value: "fairytale",
        label: "fairytale"
      },
      {
        value: "fanfare",
        label: "fanfare"
      }
    ]
  },
  {
    number: 13,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: ",
    questionText: `6. The team is well-known for having good _________________. `,
    correctAnswer: "sportsmanship",
    questionOptions: [
      {
        value: "craftsmanship",
        label: "craftsmanship"
      },
      {
        value: "sportsmanship",
        label: "sportsmanship"
      }
    ]
  },
  // Slide#7

  {
    number: 14,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "* Answer the below questions then hold a conversation with a friend asking them the same questions. ",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Do you enjoy watching the Olympics? "
        },
        {
          element: "p",
          text: "2) What sports do you enjoy watching the most?"
        },
        {
          element: "p",
          text: "3) If you could participate in the Olympics, which sports would it be?"
        },
        {
          element: "p",
          text: "4) What sports would you like to add to the Olympics?"
        }
      ]
    }
  },
  // Slide#8
  {
    number: 15,
    type: "Text",
    content: {
      title: `The Paralympics/Why the Paralympics Is Important/The Refugee Olympic Team`,
      content: [
        {
          element: "video",
          text: "Video 3"
        }
      ]
    }
  },
  // Slide#9
  {
    number: 16,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. The following are all summer games except:`,
    correctAnswer: `skiing`,
    questionOptions: [
      {
        value: `cycling`,
        label: `cycling`
      },
      {
        value: `swimming`,
        label: `swimming`
      },
      {
        value: `skiing`,
        label: `skiing`
      }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. The following are all winter gamed except:`,
    correctAnswer: `archery`,
    questionOptions: [
      {
        value: `skiing`,
        label: `skiing`
      },
      {
        value: `archery`,
        label: `archery`
      },
      {
        value: `biathlon`,
        label: `biathlon`
      }
    ]
  },
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. The Paralympics takes place in________________. `,
    correctAnswer: `the same city as the Olympics`,
    questionOptions: [
      {
        value: `the same city as the Olympics`,
        label: `the same city as the Olympics`
      },
      {
        value: `a different city from the Olympics`,
        label: `a different city from the Olympics`
      },
      {
        value: `the same city every year`,
        label: `the same city every year`
      }
    ]
  },
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. The International Paralympic Committee’s headquarters are in ……`,
    correctAnswer: `Germany`,
    questionOptions: [
      {
        value: `The Netherlands`,
        label: `The Netherlands`
      },
      {
        value: `Germany`,
        label: `Germany`
      },
      {
        value: `The United Kingdom `,
        label: `The United Kingdom `
      }
    ]
  },
  {
    number: 20,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `5. Many people lead productive lives despite having a physical ________________. `,
    correctAnswer: `disability`,
    questionOptions: [
      {
        value: `capabilities`,
        label: `capabilities`
      },
      {
        value: `disability`,
        label: `disability`
      }
    ]
  },
  {
    number: 21,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `6. ____________ was first included in the Paralympics in the 1992 Summer Paralympic Games.`,
    correctAnswer: `Boccia`,
    questionOptions: [
      {
        value: `Boccia`,
        label: `Boccia`
      },
      {
        value: `Swimming`,
        label: `Swimming`
      }
    ]
  },
  {
    number: 22,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `7. All these guys lost a ____________ while fighting in the war. `,
    correctAnswer: `limb`,
    questionOptions: [
      {
        value: `lamp`,
        label: `lamp`
      },
      {
        value: `limb`,
        label: `limb`
      }
    ]
  },
  // Slide#11
  {
    number: 23,
    type: "Text",
    content: {
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "* Answer the below questions then hold a conversation with a friend asking them the same questions. ",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) What comes into your mind when you hear the word “Paralympics”?"
        },
        {
          element: "p",
          text: "2) Do you think the Paralympics is as famous as the Olympics? Is it the media’s fault for not making the games available or the audience’s fault for not being interested? Why?"
        },
        {
          element: "p",
          text: "3) Have you watched any sports in the Paralympics? If so, how did you like it? If not, why?"
        }
      ]
    }
  },
  // Slide#12
  {
    number: 24,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText:
      "1. The creation of the Refugee Olympic Team gave hope to all migrants worldwide.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 25,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText:
      "2. The creation of the Refugee Olympic Team sends a message of inclusion and optimism to migrants all over the world.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 26,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText:
      "3. The formation of the Refugee Olympic Team sheds the light on the seriousness of the migrants’ issue in Europe.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 27,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "4. The Refugee Olympic Team was formed in 2011.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#13
  {
    number: 28,
    type: "Text",
    content: {
      title: `It’s Pronunciation Time!`,
      content: [
        {
          element: "video",
          text: "Video 4"
        }
      ]
    }
  },
  // Slide#14
  {
    number: 29,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* In this unit, we learned about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) The Olympics"
        },
        {
          element: "p",
          text: "2) Games "
        },
        {
          element: "p",
          text: "3) The Paralympics"
        },
        {
          element: "p",
          text: "4) The Refugees Olympic Team"
        },
        {
          element: "p",
          text: "* We also learned how to use phrasal verbs in sentences and their different meanings.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  // Slide#15
  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. She was __________ her great aunt.`,
    correctAnswer: `called after`,
    questionOptions: [
      {
        value: `called after`,
        label: `called after`
      },
      {
        value: `called in`,
        label: `called in`
      }
    ]
  },
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. Due to the fading light, the police ____________ the search. `,
    correctAnswer: `called off`,
    questionOptions: [
      {
        value: `called at`,
        label: `called at`
      },
      {
        value: `called off`,
        label: `called off`
      }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. The game was ___________ because of bad weather. `,
    correctAnswer: `implementing`,
    questionOptions: [
      {
        value: `called at`,
        label: `called at`
      },
      {
        value: `called off`,
        label: `called off`
      }
    ]
  },
  // Slide#16
  {
    number: 33,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. The public has _____________ the immediate release of the hostage.`,
    correctAnswer: `called for`,
    questionOptions: [
      {
        value: `called for`,
        label: `called for`
      },
      {
        value: `called on`,
        label: `called on`
      }
    ]
  },
  {
    number: 34,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5. The job _______________ excellent communication networking skills.`,
    correctAnswer: `called for`,
    questionOptions: [
      {
        value: `called for`,
        label: `called for`
      },
      {
        value: `called on`,
        label: `called on`
      }
    ]
  },
  {
    number: 35,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `6. I tried to ______________ to him through the window.`,
    correctAnswer: `call out`,
    questionOptions: [
      {
        value: `call to`,
        label: `call to`
      },
      {
        value: `call out`,
        label: `call out`
      }
    ]
  },
  // Slide#17
  {
    number: 36,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Match each definition to the appropriate term:`,
    matchOptions: [
      `1.  A large flame on a stick `,
      `2. The place where something happens, especially an organized event such as a concert, conference, or sports competition`,
      `3. Any condition that prevents full or normal use of the body or mind`,
      `4. The ability to sustain prolonged physical or mental effort`,
      `5. Very serious, of an illness, injury, or impairment`,
      `6. the table of scores indicating the relative position of competitors in a sporting event`
    ],
    matchAnswers: [
      "venue",
      "stamina",
      "torch",
      "severe",
      "disability",
      "standings"
    ],
    correctMatch: {
      "1.  A large flame on a stick ": "torch",
      "2. The place where something happens, especially an organized event such as a concert, conference, or sports competition":
        "venue",
      "3. Any condition that prevents full or normal use of the body or mind":
        "disability",
      "4. The ability to sustain prolonged physical or mental effort":
        "stamina",
      "5. Very serious, of an illness, injury, or impairment": "severe",
      "6. the table of scores indicating the relative position of competitors in a sporting event":
        "standings"
    },
    correction: `Correct Answers: 1c, 2a, 3e, 4b, 5d, 6f`
  },
  // Slide#18
  {
    number: 37,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. Everyone stood up for the national ___________.`,
    correctAnswer: `anthem`,
    questionOptions: [
      {
        value: `stamina`,
        label: `stamina`
      },
      {
        value: `anthem`,
        label: `anthem`
      }
    ]
  },
  {
    number: 38,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. There’s a ___________ on smoking in gas stations. `,
    correctAnswer: `ban`,
    questionOptions: [
      {
        value: `band`,
        label: `band`
      },
      {
        value: `ban`,
        label: `ban`
      }
    ]
  },
  {
    number: 39,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. Everyone stood up for the national ___________.`,
    correctAnswer: `anthem`,
    questionOptions: [
      {
        value: `stamina`,
        label: `stamina`
      },
      {
        value: `anthem`,
        label: `anthem`
      }
    ]
  },
  {
    number: 40,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. Cyclist Lance Armstrong is among those who have shown that an absence of positive drug tests does not mean an absence of intentional _____________. `,
    correctAnswer: `doping`,
    questionOptions: [
      {
        value: `disability`,
        label: `disability`
      },
      {
        value: `doping`,
        label: `doping`
      }
    ]
  },
  {
    number: 41,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. There was a big _____________ over the use of drugs in athletics. `,
    correctAnswer: `controversy`,
    questionOptions: [
      {
        value: `controversy`,
        label: `controversy`
      },
      {
        value: `standings`,
        label: `standings`
      }
    ]
  },
  {
    number: 42,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5. The hotel has special ________________ for welcoming disabled people. `,
    correctAnswer: `facilities`,
    questionOptions: [
      {
        value: `facilities`,
        label: `facilities`
      },
      {
        value: `facials`,
        label: `facials`
      }
    ]
  },
  {
    number: 43,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `6. He has a reputation for fair play and good ______________.`,
    correctAnswer: `sportsmanship`,
    questionOptions: [
      {
        value: `fairness`,
        label: `fairness`
      },
      {
        value: `sportsmanship`,
        label: `sportsmanship`
      }
    ]
  },
  // Slide#20
  {
    number: 44,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `7. Marathon runners need plenty of ________________. `,
    correctAnswer: `stamina`,
    questionOptions: [
      {
        value: `venue`,
        label: `venue`
      },
      {
        value: `stamina`,
        label: `stamina`
      }
    ]
  },
  {
    number: 45,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `8. He remains at the top of the championship __________________. `,
    correctAnswer: `standings`,
    questionOptions: [
      {
        value: `standings`,
        label: `standings`
      },
      {
        value: `stamina`,
        label: `stamina`
      }
    ]
  },
  {
    number: 46,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `9. Certain chemicals have been _____________ because of their damaging effect on the environment. `,
    correctAnswer: `banned`,
    questionOptions: [
      {
        value: `banned`,
        label: `banned`
      },
      {
        value: `broadcast`,
        label: `broadcast`
      }
    ]
  },
  // Slide#21
  {
    number: 47,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `10. Some brain injuries are quite ______________, whereas others are very serious.`,
    correctAnswer: `mild`,
    questionOptions: [
      {
        value: `mind`,
        label: `mind`
      },
      {
        value: `mild`,
        label: `mild`
      }
    ]
  },
  {
    number: 48,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `11. Diabetes can cause ___________ visual impairment, or even blindness. `,
    correctAnswer: `severe`,
    questionOptions: [
      {
        value: `service`,
        label: `service`
      },
      {
        value: `severe`,
        label: `severe`
      }
    ]
  },
  {
    number: 49,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `12. The ___________ ran smoothly over the frozen snow.`,
    correctAnswer: `sledge`,
    questionOptions: [
      {
        value: `sledge`,
        label: `sledge`
      },
      {
        value: `edge`,
        label: `edge`
      }
    ]
  },
  // Slide#22
  {
    number: 50,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "* Answer the below questions. Then, hold a conversation with a friend asking them the same questions. ",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) What is the significance of forming the Refugee Olympic Team?"
        },
        {
          element: "p",
          text: "2) What kind of messages does it send to other refugees and the entire world?"
        },
        {
          element: "p",
          text: "3)What kind of support do you think this team needs?"
        }
      ]
    }
  }
];

export default slides;
