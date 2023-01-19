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
          text: `Unit 8 - Character Diversity`
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U8v1.mp4"
        }
      ]
    }
  },
  // Slide#3
  {
    number: 3,
    type: "Text",
    content: {
      title: `Character Diversity/How are character traits shown?/Observation Skills`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U8v2.mp4"
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
          text: "1) When watching TV series such as Friends, how can you identify the character traits of the main character you are viewing?"
        },
        {
          element: "p",
          text: "2) From the above description, what can you infer about the character trait of Ms. Trunchbull?"
        },
        {
          element: "p",
          text: "3) What are observation skills?"
        },
        {
          element: "p",
          text: "4) Identify the three concepts that observation skills can help with. Explain each one."
        }
      ]
    }
  },
  // Slide#5
  {
    number: 5,
    type: "Text",
    content: {
      title: `Body Language/How to Deal with Different Characters/Introverts and Extroverts/Sociopaths and Psychopaths`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U8v3.mp4"
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
          text: "1) What body language has the tourist noticed in our Egyptian Culture?"
        },
        {
          element: "p",
          text: "2) What actions has he felt confused about?"
        },
        {
          element: "p",
          text: "3) Use the words “exaggerating” and “even-keeled” in sentences of your choice."
        },
        {
          element: "p",
          text: "4) Who was short-tempered when young?"
        },
        {
          element: "p",
          text: "5) How did Manal’s sister get along with her character?"
        },
        {
          element: "p",
          text: "6) Using your own words, describe the difference between introvert and extrovert."
        },
        {
          element: "p",
          text: "7) State two facts about psychopaths and sociopaths."
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U8v4.mp4"
        }
      ]
    }
  },
  //Slide#8
  {
    number: 8,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* In this unit, we have discussed terms and expressions used in Character Diversity. We have learnt about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Character traits"
        },
        {
          element: "p",
          text: "2) Observation skills"
        },
        {
          element: "p",
          text: "3) Body language"
        },
        {
          element: "p",
          text: "4) How to deal with different characters"
        },

        {
          element: "p",
          text: "5) Introverts and extroverts"
        },
        {
          element: "p",
          text: "6) Psychopaths and sociopaths"
        },
        {
          element: "p",
          text: "* We have learnt to use phrasal verbs in context.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  //   Slide#9
  {
    number: 9,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment ",
    mediumTitle: "Choose whether the following sentences are true or false:",
    correctAnswer: "False",
    questionText: "1) Character traits are only related to behavior.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 10,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment ",
    mediumTitle: "Choose whether the following sentences are true or false:",
    correctAnswer: "True",
    questionText:
      "2) A person can be described using positive and negative character traits.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  //   Slide#10
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `1) We can infer a person’s character traits through:`,
    correctAnswer: "All the above",
    questionOptions: [
      {
        value: "Thoughts",
        label: "Thoughts"
      },
      {
        value: "Feelings",
        label: "Feelings"
      },
      {
        value: "Actions",
        label: "Actions"
      },
      {
        value: "All the above",
        label: "All the above"
      }
    ]
  },
  {
    number: 12,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer.",
    questionText: `2) Based on the description of Ms. Trunchbull, students at school ________.`,
    correctAnswer: "feared her",
    questionOptions: [
      {
        value: "trusted her",
        label: "trusted her"
      },
      {
        value: "feared her",
        label: "feared her"
      },
      {
        value: "respected her",
        label: "respected her"
      }
    ]
  },
  // Slide#11
  {
    number: 13,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* Fill in the blanks to complete the paragraph:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) _________ refers to the use of your senses in order to analyze and interpret what is happening around you."
        },
        {
          element: "p",
          text: "2) Observation skills can help with  ___________,  ____________, and in creating  ___________ both personally and in the workplace."
        }
      ]
    }
  },
  // ------------------------------
  {
    number: 14,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Summary",
    subTitle: `Fill in the blanks to complete the paragraph:`,
    mediumTitle: `Observation skills can help with  (1) ___________,  (2) ____________, and in creating  (3) ___________ both personally and in the workplace.`,
    matchOptions: [`1. _________`, `2. _________`, `3. _________`],
    matchAnswers: [
      "problem solving",
      "teamwork",
      "critical-thinking",
      "Observation skills"
    ],
    correctMatch: {
      "1. _________": "problem solving",
      "2. _________": "critical-thinking",
      "3. _________": "teamwork"
    },
    correction: `problem solving, critical-thinking, teamwork`
  },

  // Slide#12
  {
    number: 15,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment ",
    mediumTitle: "Fill in the blanks with the correct term.",
    questionText: `1) ____________ is the use of physical behavior and expressions to communicate non-verbally.`,
    correctAnswer: "Body language",
    questionOptions: [
      {
        value: "talking",
        label: "talking"
      },
      {
        value: "Body language",
        label: "Body language"
      }
    ]
  },
  {
    number: 16,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment ",
    mediumTitle: "Fill in the blanks with the correct term.",
    questionText: `2) Based on the dialogue, the tourist stayed in Egypt ________ weeks.`,
    correctAnswer: "two",
    questionOptions: [
      {
        value: "one",
        label: "one"
      },
      {
        value: "two",
        label: "two"
      },
      {
        value: "three",
        label: "three"
      }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment ",
    mediumTitle: "Fill in the blanks with the correct term.",
    questionText: `3) Egyptians will hold an ___________, meaning that their eye contact may be stronger than most from non-Arab nationalities.`,
    correctAnswer: "intense stare",
    questionOptions: [
      {
        value: "strong stare",
        label: "strong stare"
      },
      {
        value: "intense stare",
        label: "intense stare"
      }
    ]
  },
  // Slide#13
  {
    number: 18,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "Answer the following questions based on the dialogue between Ahmed and Manal.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: `1) Describe Ahmed’s two sons’ character traits.`
        },
        {
          element: "p",
          text: `2) Choose 1 vocabulary word to be used in a sentence: ( timid - bubbly ).`
        }
      ]
    }
  },
  // ----------------------------------
  //Slide#14
  {
    number: 19,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText:
      "1) An introvert is a person who doesn’t thrives when he or she is alone. He or she may process information better when alone.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 20,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "True",
    questionText:
      "2) Introverts can get easily stimulated when being in a social setting, therefore, it is advised that they practice meditation and relaxation techniques.",
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
    mediumTitle: "Decide whether the following is true or false.",
    correctAnswer: "False",
    questionText: "3) An extrovert draws his or her energy from the the sun.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  //   Slide#15
  {
    number: 22,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "Answer the following question.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: `State the difference between sociopaths and psychopaths.`
        }
      ]
    }
  },
  //   Slide#16
  {
    number: 23,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "Define the following phrasal verbs then use each in a sentence of your choice.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: `Bring something up:`
        }
      ]
    }
  },
  {
    number: 24,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "Define the following phrasal verbs then use each in a sentence of your choice.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: `Grow out of something:`
        }
      ]
    }
  }
];

export default slides;
