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
          text: `Unit 4 - Health and Wellness`
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
      title: `Physical Health/Mental Health`,
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
    questionText: `1) I am getting _____________ of waking up at 6:00 am.`,
    correctAnswer: "into the habit",
    questionOptions: [
      {
        value: "into the habit",
        label: "into the habit"
      },
      {
        value: "on a diet",
        label: "on a diet"
      }
    ]
  },
  {
    number: 5,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) She is getting overweight. I think she needs to ______________.`,
    correctAnswer: `go on diet`,
    questionOptions: [
      {
        value: `overeat`,
        label: `overeat`
      },
      {
        value: `go on diet`,
        label: `go on diet`
      }
    ]
  },
  {
    number: 6,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) The virus causes fever and loss of _____________. You won’t feel hungry.`,
    correctAnswer: `appetite`,
    questionOptions: [
      {
        value: `overeating`,
        label: `overeating`
      },
      {
        value: `appetite`,
        label: `appetite`
      }
    ]
  },
  // Slide#5
  {
    number: 7,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) Your skin would be clear if you had a healthier _________.`,
    correctAnswer: `diet`,
    questionOptions: [
      {
        value: `appetite`,
        label: `appetite`
      },
      {
        value: `diet`,
        label: `diet`
      }
    ]
  },
  {
    number: 8,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) Protein gives you that full feeling, so you will be less likely to ___________.`,
    correctAnswer: `overeat`,
    questionOptions: [
      {
        value: `overeat`,
        label: `overeat`
      },
      {
        value: `diet`,
        label: `diet`
      }
    ]
  },
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `6) Fresh fruit is a delicious way to add necessary ___________ and vitamins to your  diet.`,
    correctAnswer: `nutrients`,
    questionOptions: [
      {
        value: `nutrients`,
        label: `nutrients`
      },
      {
        value: `deficiency`,
        label: `deficiency`
      }
    ]
  },
  // Slide#6
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `7) Pregnant women often suffer from iron ____________.`,
    correctAnswer: `deficiency`,
    questionOptions: [
      {
        value: `appetite`,
        label: `appetite`
      },
      {
        value: `deficiency`,
        label: `deficiency`
      }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `8) A diet that is high in fat and sugar can lead to ____________.`,
    correctAnswer: `obesity`,
    questionOptions: [
      {
        value: `nutrients`,
        label: `nutrients`
      },
      {
        value: `obesity`,
        label: `obesity`
      }
    ]
  },
  // Slide#7
  {
    number: 12,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Going on a Diet” one more time. Decide whether the following is true or false.",
    correctAnswer: `True`,
    questionText: `1) When A says, “I’m going to do whatever it takes to get rid of these extra kilos.”, she means that she will try her best to lose the extra kilos.`,
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
    mediumTitle:
      "Listen to the dialogue “Going on a Diet” one more time. Decide whether the following is true or false.",
    correctAnswer: `False`,
    questionText: `2) Super-foods are foods that lack nutrients and will cause vitamin deficiency.`,
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
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Going on a Diet” one more time. Decide whether the following is true or false.",
    correctAnswer: `True`,
    questionText: `3) If the speakers don’t go on a diet and start exercising, they will become obese.`,
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
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “Going on a Diet” one more time. Decide whether the following is true or false.",
    correctAnswer: `True`,
    questionText: `4) Speaker B is becoming overweight because she has been overeating.`,
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#8
  {
    number: 16,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) Fitness in not only the physical health, but also the ___________ of a person.`,
    correctAnswer: `mental health`,
    questionOptions: [
      {
        value: `emotions`,
        label: `emotions`
      },
      {
        value: `mental health`,
        label: `mental health`
      }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) If you are experiencing significant symptoms of depression, you should seek professional help from a _____________.`,
    correctAnswer: `psychologist`,
    questionOptions: [
      {
        value: `dentist`,
        label: `dentist`
      },
      {
        value: `psychologist`,
        label: `psychologist`
      }
    ]
  },
  // Slide#9
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) If you ____________, people around you will be frightened. You should try to stay calm.`,
    correctAnswer: `panic`,
    questionOptions: [
      {
        value: `panic`,
        label: `panic`
      },
      {
        value: `anxiety`,
        label: `anxiety`
      }
    ]
  },
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) Yoga and ____________ are great activities for relaxation.`,
    correctAnswer: `meditation`,
    questionOptions: [
      {
        value: `phobia`,
        label: `phobia`
      },
      {
        value: `meditation`,
        label: `meditation`
      }
    ]
  },
  // Slide#10
  {
    number: 20,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) Think about some of the activities and practices that you can do to improve your mental health and well-being."
        },
        {
          element: "p",
          text: "2) You can use the internet to search for new ideas that may be helpful."
        },
        {
          element: "p",
          text: "3) Share your ideas with a friend and ask them about what they like to do."
        }
      ]
    }
  },
  // Slide#11
  {
    number: 21,
    type: "Text",
    content: {
      title: `Self-Care: Adopting a Healthy Lifestyle`,
      content: [
        {
          element: "video",
          text: "Video 3"
        }
      ]
    }
  },
  // Slide#12
  {
    number: 22,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) To decide what must get done now and what can wait is to __________.`,
    correctAnswer: `set goals and priorities`,
    questionOptions: [
      {
        value: `set goals and priorities`,
        label: `set goals and priorities`
      },
      {
        value: `focus on positivity`,
        label: `focus on positivity`
      }
    ]
  },
  {
    number: 23,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) To stick to a schedule, and make sure you’re getting enough sleep is to __________.`,
    correctAnswer: `make sleep a priority`,
    questionOptions: [
      {
        value: `get regular exercise`,
        label: `get regular exercise`
      },
      {
        value: `make sleep a priority`,
        label: `make sleep a priority`
      }
    ]
  },
  // Slide#13
  {
    number: 24,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) To reach out to your friends or family members who can provide emotional support and practical help is to __________.`,
    correctAnswer: `stay connected`,
    questionOptions: [
      {
        value: `stay connected`,
        label: `stay connected`
      },
      {
        value: `make sleep a priority`,
        label: `make sleep a priority`
      }
    ]
  },
  {
    number: 25,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) To identify and challenge your negative and unhelpful thought is to __________.`,
    correctAnswer: `focus on positivity`,
    questionOptions: [
      {
        value: `set goals and priorities`,
        label: `set goals and priorities`
      },
      {
        value: `focus on positivity`,
        label: `focus on positivity`
      }
    ]
  },
  // Slide#14
  {
    number: 26,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "1) In your opinion, what are some of the healthy habits that you can incorporate into your daily routine to help reduce the levels of stress?"
        },
        {
          element: "p",
          text: "2) Share your thoughts with a friend and ask them about their opinion."
        }
      ]
    }
  },
  // Slide#15
  {
    number: 27,
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
    number: 28,
    type: "Text",
    content: {
      title: `Unit Summery`,
      content: [
        {
          element: "p",
          text: "In this unit, we learned the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) physical health"
        },
        {
          element: "p",
          text: "2) mental health"
        },
        {
          element: "p",
          text: "3) self-care"
        },
        {
          element: "p",
          text: "4) adopting healthy habits"
        },
        {
          element: "p",
          text: "We will also learn how to use phrasal verbs in sentences and their different meanings.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  // Slide#17
  {
    number: 29,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Match each definition to the appropriate term:`,
    matchOptions: [
      `1. refers to the emotional, psychological, and social well-being`,
      `2. can be simply defined as a state of being`,
      `3. the state of living a healthy lifestyle`,
      `4. can boost levels, reduce your risk of sickness, and help you mange stress`
    ],
    matchAnswers: ["self-care", "wellness", "health", "mental health"],
    correctMatch: {
      "1. refers to the emotional, psychological, and social well-being":
        "mental health",
      "2. can be simply defined as a state of being": "health",
      "3. the state of living a healthy lifestyle": "wellness",
      "4. can boost levels, reduce your risk of sickness, and help you mange stress":
        "self-care"
    },
    correction: `Correct Answers: 1d, 2c, 3b, 4a`
  },
  // Slide#18
  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) I am sorry things didn’t __________ for you.`,
    correctAnswer: `work (out)`,
    questionOptions: [
      {
        value: `work (out)`,
        label: `work (out)`
      },
      {
        value: `work in`,
        label: `work in`
      }
    ]
  },
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) He had a great plan, but it didn’t quite _________ as he desired.`,
    correctAnswer: `work out`,
    questionOptions: [
      {
        value: `work out`,
        label: `work out`
      },
      {
        value: `work in`,
        label: `work in`
      }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) After he’d finished ____________ the novel, the publisher asked him to make some edits.`,
    correctAnswer: `working on`,
    questionOptions: [
      {
        value: `working out`,
        label: `working out`
      },
      {
        value: `working on`,
        label: `working on`
      }
    ]
  },
  // Slide#19
  {
    number: 33,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate meaning of the phrasal verbs in each sentence.",
    questionText: `1) I was born in 1992. Can you work out my age?`,
    correctAnswer: `calculate`,
    questionOptions: [
      {
        value: `calculate`,
        label: `calculate`
      },
      {
        value: `exercise`,
        label: `exercise`
      }
    ]
  },
  {
    number: 34,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate meaning of the phrasal verbs in each sentence.",
    questionText: `2) Parents must work out an agreement regarding where the children will live.`,
    correctAnswer: `reach`,
    questionOptions: [
      {
        value: `exercise`,
        label: `exercise`
      },
      {
        value: `reach`,
        label: `reach`
      }
    ]
  },
  {
    number: 35,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate meaning of the phrasal verbs in each sentence.",
    questionText: `3) I try to work out four times a week. It really helps me stay in shape.`,
    correctAnswer: `exercise`,
    questionOptions: [
      {
        value: `exercise`,
        label: `exercise`
      },
      {
        value: `reach`,
        label: `reach`
      }
    ]
  },
  // Slide#20
  {
    number: 36,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate meaning of the phrasal verbs in each sentence.",
    questionText: `4) I know I’ve gained some kilos. I am working on losing them in a month.`,
    correctAnswer: `exerting effort`,
    questionOptions: [
      {
        value: `exerting effort`,
        label: `exerting effort`
      },
      {
        value: `influencing`,
        label: `influencing`
      }
    ]
  },
  {
    number: 37,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate meaning of the phrasal verbs in each sentence.",
    questionText: `5) They tried to trick him in many ways, but none of the tricks has worked on  him.`,
    correctAnswer: `influenced`,
    questionOptions: [
      {
        value: `influenced`,
        label: `influenced`
      },
      {
        value: `improved`,
        label: `improved`
      }
    ]
  },
  // Slide#21
  {
    number: 38,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) He didn’t _______________, but he absolutely changed his eating habits.`,
    correctAnswer: `go on a diet`,
    questionOptions: [
      {
        value: `get into the habit`,
        label: `get into the habit`
      },
      {
        value: `go on a diet`,
        label: `go on a diet`
      }
    ]
  },
  {
    number: 39,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) I’m trying to ____________ the amount of sugar I eat.`,
    correctAnswer: `cut down on`,
    questionOptions: [
      {
        value: `cut down on`,
        label: `cut down on`
      },
      {
        value: `cut down at`,
        label: `cut down at`
      }
    ]
  },
  // Slide#22
  {
    number: 40,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) He was deep in _______________ and didn’t see me coming in.`,
    correctAnswer: `meditation`,
    questionOptions: [
      {
        value: `phobia`,
        label: `phobia`
      },
      {
        value: `meditation`,
        label: `meditation`
      }
    ]
  },
  {
    number: 41,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) I’ve come across three herbs that can help with __________ and sleep.`,
    correctAnswer: `stress-relief`,
    questionOptions: [
      {
        value: `psychiatrist`,
        label: `psychiatrist`
      },
      {
        value: `stress-relief`,
        label: `stress-relief`
      }
    ]
  },
  // Slide#23
  {
    number: 42,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5) Children normally feel a lot of __________ about their first day at school.`,
    correctAnswer: `anxiety`,
    questionOptions: [
      {
        value: `anxiety`,
        label: `anxiety`
      },
      {
        value: `therapist`,
        label: `therapist`
      }
    ]
  },
  {
    number: 43,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `6) He has a __________ about snakes.`,
    correctAnswer: `phobia`,
    questionOptions: [
      {
        value: `mindfulness`,
        label: `mindfulness`
      },
      {
        value: `phobia`,
        label: `phobia`
      }
    ]
  },
  // Slide#24
  {
    number: 44,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `7) ___________can be the cause of some of the common diseases like diabetes.`,
    correctAnswer: `Obesity`,
    questionOptions: [
      {
        value: `Nutrients`,
        label: `Nutrients`
      },
      {
        value: `Obesity`,
        label: `Obesity`
      }
    ]
  },
  {
    number: 45,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `8) He used to be ________________, but he managed to lose the extra kilos.`,
    correctAnswer: `overweight`,
    questionOptions: [
      {
        value: `overweight`,
        label: `overweight`
      },
      {
        value: `eating disorder`,
        label: `eating disorder`
      }
    ]
  },
  // Slide#25
  {
    number: 46,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `9) Fruits and vegetables are an essential component of a healthy ___________.`,
    correctAnswer: `diet`,
    questionOptions: [
      {
        value: `appetite`,
        label: `appetite`
      },
      {
        value: `diet`,
        label: `diet`
      }
    ]
  },
  {
    number: 47,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `10) The blood tests revealed a _____________ in certain key minerals and vitamins.`,
    correctAnswer: `deficiency`,
    questionOptions: [
      {
        value: `diet`,
        label: `diet`
      },
      {
        value: `deficiency`,
        label: `deficiency`
      }
    ]
  }
];

export default slides;
