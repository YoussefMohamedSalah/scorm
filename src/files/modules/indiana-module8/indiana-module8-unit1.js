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
          text: `Unit 1 - Technology Today `
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
      title: `Technology and Science/Self-Driven and Electric Cars/Energy Saving Inventions/`,
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
    type: "Text",
    content: {
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "1) Do you think solar energy and electric cars can take the lead in the future?"
        },
        {
          element: "p",
          text: "2) Do you agree that making small changes in your life would have a great effect on the environment?"
        }
      ]
    }
  },
  // Slide#5
  {
    number: 5,
    type: "Text",
    content: {
      title: `Leading Countries in Energy Saving`,
      content: [
        {
          element: "video",
          text: "Video 3"
        }
      ]
    }
  },
  // Slide#6
  {
    number: 6,
    type: "Text",
    content: {
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "1) Discuss different ways to contribute to energy saving."
        },
        {
          element: "p",
          text: "2) Do you think more countries should consider clean energy sources? And why?"
        }
      ]
    }
  },
  // Slide#7
  {
    number: 7,
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
  // Slide#8
  {
    number: 8,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* In this unit we learned about some of the technological advancements, robots, and energy efficiency. We covered the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Robots in the medical field"
        },
        {
          element: "p",
          text: "2) Smart devices and homes"
        },
        {
          element: "p",
          text: "3) Electric cars"
        },
        {
          element: "p",
          text: "4) Energy saving inventions"
        },
        {
          element: "p",
          text: "5) Leading countries in energy saving"
        },
        {
          element: "p",
          text: "* We also learned new diphthongs, how the vowels sound, and how to pronounce them.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  // Slide#9
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Complete the sentence using the words in the brackets:",
    questionText: `1) Technology is …………. a practical application of scientific knowledge.`,
    correctAnswer: `implementing`,
    questionOptions: [
      {
        value: `depending`,
        label: `depending`
      },
      {
        value: `implementing`,
        label: `implementing`
      }
    ]
  },
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Complete the sentence using the words in the brackets:",
    questionText: `2) Robots in the medical field assist in…………. procedures.`,
    correctAnswer: `surgical`,
    questionOptions: [
      {
        value: `surgical`,
        label: `surgical`
      },
      {
        value: `magical`,
        label: `magical`
      }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Complete the sentence using the words in the brackets:",
    questionText: `3) ………….. is a leading technology entrepreneur.`,
    correctAnswer: `Elon Musk`,
    questionOptions: [
      {
        value: `Morgan Freeman`,
        label: `Morgan Freeman`
      },
      {
        value: `Elon Musk`,
        label: `Elon Musk`
      }
    ]
  },
  // --------------------------------------------------
  {
    number: 12,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "1. Social robots can interact with humans.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 13,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "2. Robots are available in laboratories.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 14,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "3. Robots cannot perform/assist in a surgical operation.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 15,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "4. Elon Musk is an inventor.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },

  // Slide#10

  {
    number: 16,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Underline the odd word in each group:",
    questionText: ``,
    correctAnswer: "gazelle",
    questionOptions: [
      {
        value: "fuel",
        label: "fuel"
      },
      {
        value: "gas",
        label: "gas"
      },
      {
        value: "diesel",
        label: "diesel"
      },
      {
        value: "gazelle",
        label: "gazelle"
      }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Underline the odd word in each group:",
    questionText: ``,
    correctAnswer: "flour",
    questionOptions: [
      {
        value: "energy",
        label: "energy"
      },
      {
        value: "flour",
        label: "flour"
      },
      {
        value: "power",
        label: "power"
      },
      {
        value: "electricity",
        label: "electricity"
      }
    ]
  },
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Underline the odd word in each group:",
    questionText: ``,
    correctAnswer: "Milky Way",
    questionOptions: [
      {
        value: "robots",
        label: "robots"
      },
      {
        value: "Milky Way",
        label: "Milky Way"
      },
      {
        value: "machines",
        label: "machines"
      },
      {
        value: "equipment",
        label: "equipment"
      }
    ]
  },
  // --------------------------------------------
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: from the first dialogue ",
    questionText: `1. I would like to save money on ……………. in the house.`,
    correctAnswer: "electricity",
    questionOptions: [
      {
        value: "electricity",
        label: "electricity"
      },
      {
        value: "gas",
        label: "gas"
      }
    ]
  },
  {
    number: 20,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer: from the first dialogue ",
    questionText: `2. We will use …………. to protect against heat and cold of winter.`,
    correctAnswer: "insulations",
    questionOptions: [
      {
        value: "insulations",
        label: "insulations"
      },
      {
        value: "installation",
        label: "installation"
      }
    ]
  },

  {
    number: 21,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `3. Please install (1) …………. lights in the house and motion sensor (2) ………. (detector - defective) in the garage.`,
    matchOptions: [`1. _________`, `2. _________`],
    matchAnswers: ["LED", "LCD", "detector", "defective"],
    correctMatch: {
      "1. _________": "LED",
      "2. _________": "detector"
    },
    correction: `LED, LCD, detector, defective`
  },
  {
    number: 22,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `4. The house will be equipped with (1) …………….  cables to (1) …………. control devices.`,
    matchOptions: [`1. _________`, `2. _________`],
    matchAnswers: ["network", "net worth", "physically", "remotely"],
    correctMatch: {
      "1. _________": "network",
      "2. _________": "remotely"
    },
    correction: `LED, LCD, detector, defective`
  },
  // Slide#11
  {
    number: 23,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "1. Germany took the 1st place for energy saving for 2022.",
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
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "2. Bosch is made in Switzerland.",
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
    questionText: "3. Hitachi is a Japanese brand.",
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
    correctAnswer: "False",
    questionText: "4. Mitsubishi launched a series of hybrid cars.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // --------------
  {
    number: 27,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) I am interested in buying a ………. `,
    correctAnswer: "car",
    questionOptions: [
      {
        value: "boat",
        label: "boat"
      },
      {
        value: "car",
        label: "car"
      }
    ]
  },
  {
    number: 28,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `2) The house will be equipped with (1) …………….  cables to (1) …………. control devices.`,
    matchOptions: [`1. _________`, `2. _________`],
    matchAnswers: ["small", "spacious", "low", "high"],
    correctMatch: {
      "1. _________": "spacious",
      "2. _________": "low"
    },
    correction: `1) spacious, 2) low`
  },
  {
    number: 29,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `3) (1) ……………….  cars have two types of power (2) ………… motor and internal (3) ………….. engine.`,
    matchOptions: [`1. _________`, `2. _________`],
    matchAnswers: [
      "Hybrid",
      "Hyper",
      "electric",
      "wind",
      "consumption",
      "combustion"
    ],
    correctMatch: {
      "1. _________": "Hybrid",
      "2. _________": "electric",
      "3. _________": "combustion"
    },
    correction: `1) Hybrid, 2) electric, 3) combustion`
  },
  // Slide#12

  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Complete the words with correct diphthong:",
    questionText: `1. The farmer milks the c…… every other morning.`,
    correctAnswer: "OW",
    questionOptions: [
      {
        value: "OW",
        label: "OW"
      },
      {
        value: "EW",
        label: "EW"
      }
    ]
  },
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Complete the words with correct diphthong:",
    questionText: `2. The match was so loud because the cr….ds were cheering.`,
    correctAnswer: "OW",
    questionOptions: [
      {
        value: "OW",
        label: "OW"
      },
      {
        value: "EW",
        label: "EW"
      }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `3. The man choked while he was eating some cash….(1) nuts. I Guess he didn't ch……(2) it well.`,
    matchOptions: [`1. _________`, `2. _________`],
    matchAnswers: ["OW", "EW"],
    correctMatch: {
      "1. _________": "EW",
      "2. _________": "EW"
    },
    correction: `1) EW, 2) EW`
  },
  {
    number: 33,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "* Underline the Diphthongs in the following sentences:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) My plants grew a little more than last week."
        },
        {
          element: "p",
          text: "2) Grandpa loves sailing on his sailboat."
        },
        {
          element: "p",
          text: "3) Applesauce is made from broiled apples."
        },
        {
          element: "p",
          text: "4) I like to use sunflower oil for cooking."
        },
        {
          element: "p",
          text: "5) My brother is thinking about growing a beard."
        }
      ]
    }
  }
];

export default slides;
