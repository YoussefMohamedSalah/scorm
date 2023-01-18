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
          text: `Unit 7 - Space Exploration`
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
      title: `Space Exploration/Space-X`,
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
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) If you’re interested in airplanes, visiting the Niagara _________ Museum needs to be added to your bucket list.`,
    correctAnswer: "Aerospace",
    questionOptions: [
      {
        value: "Aerospace",
        label: "Aerospace"
      },
      {
        value: "National",
        label: "National"
      }
    ]
  },
  {
    number: 5,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) Scientists detect that the _____________ was close to Earth even though it was over a million miles away.`,
    correctAnswer: "asteroid",
    questionOptions: [
      {
        value: "asterisk",
        label: "asterisk"
      },
      {
        value: "asteroid",
        label: "asteroid"
      }
    ]
  },
  // Slide#5
  {
    number: 6,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) My handbag is a ___________. You can try and find the keys in there, but I can’t promise anything.`,
    correctAnswer: "black hole",
    questionOptions: [
      {
        value: "black wall",
        label: "black wall"
      },
      {
        value: "black hole",
        label: "black hole"
      }
    ]
  },
  {
    number: 7,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) Hold your phone up to the sky and its camera will identify constellations, ________ and planets as you scan the stars.`,
    correctAnswer: "comets",
    questionOptions: [
      {
        value: "comets",
        label: "comets"
      },
      {
        value: "comments",
        label: "comments"
      }
    ]
  },
  // Slide#6
  {
    number: 8,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) Whenever you see a shooting star, you are really seeing a ___________. `,
    correctAnswer: "meteor",
    questionOptions: [
      {
        value: "metro",
        label: "metro"
      },
      {
        value: "meteor",
        label: "meteor"
      }
    ]
  },
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `6) The Italian __________ Galileo developed telescope technology.`,
    correctAnswer: "astronomer",
    questionOptions: [
      {
        value: "professor",
        label: "professor"
      },
      {
        value: "astronomer",
        label: "astronomer"
      }
    ]
  },
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `7) Stephen Hawking has been the ____________ most closely associated in the public mind with the phenomenon of the black hole.`,
    correctAnswer: "cosmologist",
    questionOptions: [
      {
        value: "cosmology",
        label: "cosmology"
      },
      {
        value: "cosmologist",
        label: "cosmologist"
      }
    ]
  },
  // Slide#7
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `8) _____________ has announced plans for a new space mission to Mars.`,
    correctAnswer: "NASA",
    questionOptions: [
      {
        value: "NASS",
        label: "NASS"
      },
      {
        value: "NASA",
        label: "NASA"
      }
    ]
  },
  {
    number: 12,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `9) The _____________ takes business risks in the hope of making profit.`,
    correctAnswer: "entrepreneur",
    questionOptions: [
      {
        value: "imperial",
        label: "imperial"
      },
      {
        value: "entrepreneur",
        label: "entrepreneur"
      }
    ]
  },
  // Slide#8
  {
    number: 13,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) How do you think astronauts live on the International Space Station?"
        },
        {
          element: "p",
          text: "2) Use the Internet to find more about their life there."
        },
        {
          element: "p",
          text: "3) Hold a conversation with a friend about it and share some of the things you found to be interesting."
        }
      ]
    }
  },
  // Slide#9
  {
    number: 14,
    type: "Text",
    content: {
      title: `Space Tourism/Key Moments in the History of Space Exploration`,
      content: [
        {
          element: "video",
          text: "Video 3"
        }
      ]
    }
  },
  // Slide#10
  {
    number: 15,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "1) Space tourism is the practice of going into space for leisure.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 16,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "2) Space tourism is also known as citizen space exploration, personal spaceflight, or commercial human spaceflight.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "3) Elon Musk has stated that he anticipates the cost to be around $250,000.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 18,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "4) Virginia Galactic was the first privately owned business to launch a spacecraft, return it to Earth orbit, and dock a crewed spacecraft with the International Space Station.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 19,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText: "5) Space-X was founded by Elon Musk.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#11
  {
    number: 20,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText: "1) Space travel is affordable to everyone.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 21,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "2) Space travel requires a visa.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 22,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "3) Before traveling, space tourists need to receive a three-day training.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 23,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "4) The pre-flight training will prepare travelers physically and mentally.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 24,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "5) To reserve a ticket for a space flight, you must go to Virginia Galactic’s local office.",
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
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Space Tourism” one more time. Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "6) Only people who have studied astronomy can travel to space for leisure.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#12
  {
    number: 26,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "1) Able and Baker were the first creatures to come back to Earth from a trip into space alive.",
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
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "2) Laika was the first creature to come back to Earth from a space voyage alive.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 28,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "3) Bruce McCandless’ spacewalk lasted for 30 minutes.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 29,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "4) Alan Shepard was the first man to be sent into space beyond the atmosphere of the planet.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 30,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "5) Yuri Gagarin was American.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 31,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "6) Valentina Tereshkova was sent into space by the USA.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "7) Valentina Tereshkova spent three weeks in space.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 33,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "8) Dennis Tito spent eight weeks at the International Space Station.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#13
  {
    number: 34,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `1) What was Bruce McCandless’ achievement?`,
    correctAnswer:
      "He completed the first spacewalk without being connected to the spacecraft.",
    questionOptions: [
      {
        value:
          "He completed the first spacewalk without being connected to the spacecraft.",
        label:
          "He completed the first spacewalk without being connected to the spacecraft."
      },
      {
        value: "He was the cofounder of Space-X.",
        label: "He was the cofounder of Space-X."
      }
    ]
  },
  {
    number: 35,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `2) Who was the first woman to be sent into space?`,
    correctAnswer: "Valentina Tereshkova",
    questionOptions: [
      {
        value: "Maria Sharapova",
        label: "Maria Sharapova"
      },
      {
        value: "Valentina Tereshkova",
        label: "Valentina Tereshkova"
      }
    ]
  },
  // Slide#14
  {
    number: 36,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `3) Who was the first man to be sent into space?`,
    correctAnswer: "Yuri Gagarin",
    questionOptions: [
      {
        value: "Yuri Gagarin",
        label: "Yuri Gagarin"
      },
      {
        value: "Elon Musk",
        label: "Elon Musk"
      }
    ]
  },
  {
    number: 37,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `4) Who was the first space tourist? `,
    correctAnswer: "Dennis Tito",
    questionOptions: [
      {
        value: "Richard Branson",
        label: "Richard Branson"
      },
      {
        value: "Dennis Tito",
        label: "Dennis Tito"
      }
    ]
  },
  // Slide#15
  {
    number: 38,
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
  // Slide#16
  {
    number: 39,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* In this unit, we learned the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Space exploration"
        },
        {
          element: "p",
          text: "2) Space-X"
        },
        {
          element: "p",
          text: "3) Space tourism"
        },
        {
          element: "p",
          text: "4) Key moments in the history of space exploration"
        },
        {
          element: "p",
          text: "* We also learned how to use phrasal verbs in sentences and their different meanings.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  // Slide#17
  {
    number: 40,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `1) Try to __________ your parents who are honest and hardworking people. `,
    correctAnswer: "take after",
    questionOptions: [
      {
        value: "take out",
        label: "take out"
      },
      {
        value: "take after",
        label: "take after"
      }
    ]
  },
  {
    number: 41,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `2) This toy can be _________ and put together easily.`,
    correctAnswer: "taken apart",
    questionOptions: [
      {
        value: "taken apart",
        label: "taken apart"
      },
      {
        value: "taken away",
        label: "taken away"
      }
    ]
  },
  {
    number: 42,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `3) I ___________ what I just said. I am sorry!`,
    correctAnswer: "take back",
    questionOptions: [
      {
        value: "take after",
        label: "take after"
      },
      {
        value: "take back",
        label: "take back"
      }
    ]
  },
  // Slide#18
  {
    number: 43,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `4) I just had my wisdom tooth __________. It was really painful!`,
    correctAnswer: "taken out",
    questionOptions: [
      {
        value: "taken back",
        label: "taken back"
      },
      {
        value: "taken out",
        label: "taken out"
      }
    ]
  },
  {
    number: 44,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `5) I’m ___________cycling to work as a way of getting a bit more exercise. `,
    correctAnswer: "taking up",
    questionOptions: [
      {
        value: "taking away",
        label: "taking away"
      },
      {
        value: "taking up",
        label: "taking up"
      }
    ]
  },
  // Slide#19
  {
    number: 45,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `1) Henry majored in   ______________ engineering at the local university due to his high interest in planes and anything that flies in the air.`,
    correctAnswer: "aerospace",
    questionOptions: [
      {
        value: "plane",
        label: "plane"
      },
      {
        value: "aerospace",
        label: "aerospace"
      }
    ]
  },
  {
    number: 46,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `2) In the video game, the objective is to dodge each _________ in order to get to the other side of the screen.`,
    correctAnswer: "asteroid",
    questionOptions: [
      {
        value: "asteroid",
        label: "asteroid"
      },
      {
        value: "asterisk",
        label: "asterisk"
      }
    ]
  },
  // Slide#20
  {
    number: 47,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `3) My memory is a ____________. I have to write down everything that is important.`,
    correctAnswer: "black hole",
    questionOptions: [
      {
        value: "black hole",
        label: "black hole"
      },
      {
        value: "black wall",
        label: "black wall"
      }
    ]
  },
  {
    number: 48,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `4) They can appear to us as shooting stars. In reality, they are ___________. `,
    correctAnswer: "meteors",
    questionOptions: [
      {
        value: "metros",
        label: "metros"
      },
      {
        value: "meteors",
        label: "meteors"
      }
    ]
  },
  // Slide#21
  {
    number: 49,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `5) An _____________ can determine the brightness of each star. `,
    correctAnswer: "astronomer",
    questionOptions: [
      {
        value: "astronomer",
        label: "astronomer"
      },
      {
        value: "astronomy",
        label: "astronomy"
      }
    ]
  },
  {
    number: 50,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `6) __________ have used satellites and probes to help determine the age of the universe. `,
    correctAnswer: "cosmologists",
    questionOptions: [
      {
        value: "cosmopolitans",
        label: "cosmopolitans"
      },
      {
        value: "cosmologists",
        label: "cosmologists"
      }
    ]
  },
  // Slide#22
  {
    number: 51,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `7) For every 30,000 people who apply to become astronauts, __________ accepts 30. `,
    correctAnswer: "NASA",
    questionOptions: [
      {
        value: "NASA",
        label: "NASA"
      },
      {
        value: "NATA",
        label: "NATA"
      }
    ]
  },
  {
    number: 52,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `8) A skilled ____________ understands not only how businesses work, but also how to motivate people. `,
    correctAnswer: "entrepreneur",
    questionOptions: [
      {
        value: "entrepreneur",
        label: "entrepreneur"
      },
      {
        value: "intern",
        label: "intern"
      }
    ]
  },
  // Slide#23
  {
    number: 53,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText: "1) Laika passed away from overheating and fright.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 54,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "2) Bruce McCandless’ achievement was that he completed the first spacewalk in which he was not connected to the spacecraft.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 55,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText: "3) Yuri Gagarin’s accomplishment was the first of its kind.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 56,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "4) Valentina Tereshkova was the first woman to be sent into space.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 57,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "5) Dennis Tito spent $20 million for his trip to the International Space Station.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#24
  {
    number: 58,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) Would you like to travel into space?"
        },
        {
          element: "p",
          text: "2) What is the first thing you would do when you come back to earth?"
        },
        {
          element: "p",
          text: "3) If you were offered a job to be an astronaut, would you take it? Why or why not?"
        }
      ]
    }
  }
];

export default slides;
