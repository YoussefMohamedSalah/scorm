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
          text: `Unit 2 - All About Love`
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U2v1.mp4"
        }
      ]
    }
  },
  // Slide#3
  {
    number: 3,
    type: "Text",
    content: {
      title: `Love/Self-Compassion and Self-Love/`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U2v2.mp4"
        }
      ]
    }
  },
  // Slide#4
  {
    number: 4,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Checking for Understanding",
    subTitle: "Match the following types of love to their definition:",
    matchOptions: [
      `1. romantic love:`,
      `2. Familiar love:`,
      `3. affectionate love:`,
      `4. enduring love:`,
      `5. playful love:`,
      `6. self-love:`,
      `7. obsessive love:`
    ],
    matchAnswers: [
      `a. compassion for oneself`,
      `b. love in friendships`,
      `c. infatuation and physical attraction`,
      `d. matured love that develops over a period of time`,
      `e. childlike flirtatious love`,
      `f. compassion for oneself`,
      `g. between parents and children`
    ],
    correctMatch: {
      "1. romantic love:": "a. infatuation and physical attraction",
      "2. Familiar love:": "b. between parents and children",
      "3. affectionate love:": "c. love in friendships",
      "4. enduring love:":
        "d. matured love that develops over a period of time",
      "5. playful love:": "e. childlike flirtatious love",
      "6. self-love:": "f. compassion for oneself",
      "7. obsessive love:": "g. madness over a partner"
    },
    correction: "The correct match is (1, 2, 3, 4, 5, 6, 7)"
  },
  // Slide#5
  {
    number: 5,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "False",
    questionText: "1. Self-compassion is expecting to be perfect all times.",
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
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "True",
    questionText: "2. Self-love is treating oneself with calmness and empathy.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 7,
    type: "Text",
    content: {
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "Use the following words in sentences of your own. Remember to add context clues.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1. Meditate."
        },
        {
          element: "p",
          text: "2. Mindfulness"
        },
        {
          element: "p",
          text: "3. Indicator"
        }
      ]
    }
  },
  // SLide#6
  {
    number: 8,
    type: "Text",
    content: {
      title: `The Five Languages of Love/The Love Triangle/Famous Figures Representing Love`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U2v3.mp4"
        }
      ]
    }
  },
  // Slide#7
  {
    number: 9,
    type: "Text",
    content: {
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "Answer in complete sentences.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1. What happens to a person who gets praised when his/ her love language is words of affirmation?"
        },
        {
          element: "p",
          text: "2. When your love language is acts of service, what do you translate those actions into?"
        },
        {
          element: "p",
          text: "3. Can someone have multiple love languages? Give an example."
        }
      ]
    }
  },
  // Slid#8
  {
    number: 10,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "False",
    questionText: "1. Person A is more knowledgeable about the love triangle.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "False",
    questionText:
      "2. The love triangle consists of intimacy, passion, and closeness only.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  {
    number: 12,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "True",
    questionText:
      "3. Passion is the drive that leads to physical intimacy and romance.",
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
    title: "Checking for Understanding",
    mediumTitle: "Check for Understanding:",
    correctAnswer: "True",
    questionText:
      "4. Commitment is the decision to stay committed in a long-lasting relationship.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#9
  {
    number: 14,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Fill in the blanks using the correct words/ expressions:",
    questionText: `1. I feel ……………………. when I want to learn more about a topic that interests me.`,
    correctAnswer: "Intrigued",
    questionOptions: [
      {
        value: "Crush",
        label: "Crush"
      },
      {
        value: "Intrigued",
        label: "Intrigued"
      }
    ]
  },
  {
    number: 15,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Fill in the blanks using the correct words/ expressions:",
    questionText: `2. Qays and Lailia have ………………… deeply to the extent that being separated was unbearable to both of them.`,
    correctAnswer: "fallen in love",
    questionOptions: [
      {
        value: "the first move",
        label: "the first move"
      },
      {
        value: "fallen in love",
        label: "fallen in love"
      }
    ]
  },
  {
    number: 16,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Fill in the blanks using the correct words/ expressions:",
    questionText: `3. The most…………………. girl I’ve seen was Juliet from the all-time favorite, Romeo and Juliet.`,
    correctAnswer: "mesmerizing",
    questionOptions: [
      {
        value: "crush",
        label: "crush"
      },
      {
        value: "mesmerizing",
        label: "mesmerizing"
      }
    ]
  },
  // Slide#10
  {
    number: 17,
    type: "Text",
    content: {
      title: `It’s Pronunciation Time!`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U2v4.mp4"
        }
      ]
    }
  },
  // Slide#11
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "MCQ - Choose the correct answer:",
    questionText: `1. The meaning of make-up is.`,
    correctAnswer: "forgive each other after an argument",
    questionOptions: [
      {
        value: "get together",
        label: "get together"
      },
      {
        value: "forgive each other after an argument",
        label: "forgive each other after an argument"
      },
      {
        value: "stop being friends",
        label: "stop being friends"
      }
    ]
  },
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "MCQ - Choose the correct answer:",
    questionText: `2. The meaning of break-up is.`,
    correctAnswer: "to end a friendship",
    questionOptions: [
      {
        value: "to break something",
        label: "to break something"
      },
      {
        value: "to end a friendship",
        label: "to end a friendship"
      },
      {
        value: "to end a relationship",
        label: "to end a relationship"
      }
    ]
  },
  // Slide#12
  {
    number: 20,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "In this unit, we discussed terms and expressions used in the love theme.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "We learned about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1. What love is"
        },
        {
          element: "p",
          text: "2. Self- compassion & self-love"
        },
        {
          element: "p",
          text: "3. The five languages of love"
        },
        {
          element: "p",
          text: "4. The love triangle"
        },
        {
          element: "p",
          text: "5. Famous figures representing love"
        }
      ]
    }
  },
  // Slide#13
  {
    number: 21,
    type: "Text",
    content: {
      title: `Unit Assessment`,
      content: [
        {
          element: "p",
          text: "Let’s Practice: Let’s listen to this text and answer the following questions:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: `Before I met you, I didn’t think love was for me.
           It was something other people had and felt. Something in movies and in TV shows. 
           It felt more like a wish I had than something real.
            Now that I’m with you, love is so much more tangible. 
            It’s something I can reach out and touch.
             It’s so much more than a wish or a hope, it’s the very real, wonderful person I wake up to.
              The warm hand next to mine, the brush of hair against my cheek.
           I love you and because of that love, I love so much more than you.`
        }
      ]
    }
  },
  // Slide#14
  {
    number: 22,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Read each question and choose the correct answer:",
    questionText: `1. Which kind of love is being portrayed in this passage?`,
    correctAnswer: "Romantic love",
    questionOptions: [
      {
        value: "Affectionate love",
        label: "Affectionate love"
      },
      {
        value: "Romantic love",
        label: "Romantic love"
      },
      {
        value: "Enduring love",
        label: "Enduring love"
      }
    ]
  },
  {
    number: 23,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Read each question and choose the correct answer:",
    questionText: `2. Based on context clues, what does the word tangible mean?`,
    correctAnswer: "Can be reached out and touched",
    questionOptions: [
      {
        value: "Can be seen",
        label: "Can be seen"
      },
      {
        value: "Can be reached out and touched",
        label: "Can be reached out and touched"
      },
      {
        value: "Can be smelled",
        label: "Can be smelled"
      }
    ]
  },
  // Slide#15
  {
    number: 24,
    type: "Question",
    questionType: "CheckBoxes",
    subTitle: "Unit Assessment",
    mediumTitle: "Read each question and choose the correct answer:",
    questionText: `3. Which love language does this expression reveal? “The warm hand next to mine, the brush of hair against my cheek.”`,
    correctAnswer: ["Physical touch", "Words of affirmation"],
    questionOptions: ["Giving gifts", "Physical touch", "Words of affirmation"]
  },
  // Slide#16
  {
    number: 25,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Read each sentence and write (T) for True / (F) for False:",
    correctAnswer: "False",
    questionText:
      "1. To practice mindfulness, you need to focus on the past and future only.",
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
    mediumTitle: "Read each sentence and write (T) for True / (F) for False:",
    correctAnswer: "True",
    questionText:
      "2. The love triangle that guarantees success in relationships consists of intimacy, passion, and commitment.",
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
    mediumTitle: "Read each sentence and write (T) for True / (F) for False:",
    correctAnswer: "False",
    questionText:
      "3. Passion is not the drive that leads to physical intimacy and romance.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#17
  {
    number: 28,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer between brackets:",
    questionText: `1. ________ refers to the closeness and bond that forms between two people.`,
    correctAnswer: "Intimacy",
    questionOptions: [
      {
        value: "Intimacy",
        label: "Intimacy"
      },
      {
        value: "Passion",
        label: "Passion"
      }
    ]
  },
  {
    number: 29,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer between brackets:",
    questionText: `2. ________ is the drive that leads to physical intimacy and romance.`,
    correctAnswer: "Passion",
    questionOptions: [
      {
        value: "Intimacy",
        label: "Intimacy"
      },
      {
        value: "Passion",
        label: "Passion"
      }
    ]
  },
  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer between brackets:",
    questionText: `3. ________ is the decision to be committed in a long-lasting relationship.`,
    correctAnswer: "Commitment",
    questionOptions: [
      {
        value: "Commitment",
        label: "Commitment"
      },
      {
        value: "Intimacy",
        label: "Intimacy"
      }
    ]
  },
  // Slide#18
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Find the Phrasal verb in each sentence:",
    questionText: `1. Jack decided to make-up with Laila after realizing he has made a mistake.`,
    correctAnswer: "make-up",
    questionOptions: [
      {
        value: "decided",
        label: "decided"
      },
      {
        value: "make-up",
        label: "make-up"
      },
      {
        value: "made",
        label: "made"
      }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Find the Phrasal verb in each sentence:",
    questionText: `2. After doing everything he could, Ahmed decided to break-up with Farida since they have no effective communication.`,
    correctAnswer: "break-up",
    questionOptions: [
      {
        value: "could",
        label: "could"
      },
      {
        value: "break-up",
        label: "break-up"
      },
      {
        value: "decided",
        label: "decided"
      }
    ]
  }
];

export default slides;
