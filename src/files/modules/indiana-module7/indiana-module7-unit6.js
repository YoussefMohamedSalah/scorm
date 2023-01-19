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
          text: `Unit 6 - MEDICAL INSURANCE`
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U6v1.mp4"
        }
      ]
    }
  },
  // Slide#3
  {
    number: 3,
    type: "Text",
    content: {
      title: `INSURANCE/HOSPITALS AND LABS`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U6v2.mp4"
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
          text: "1) Will you be able to describe your symptoms to a medical practitioner?"
        },
        {
          element: "p",
          text: "2) Will you be able to request the needed documents to submit a claim to an insurance company?"
        }
      ]
    }
  },
  // Slide#5
  {
    number: 5,
    type: "Text",
    content: {
      title: `BENEFITS`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U6v3.mp4"
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
          text: "1) What are the insurance benefits?"
        },
        {
          element: "p",
          text: "2) Are the documents submitted to the insurance company important and why?"
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U6v4.mp4"
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
          text: "* In this unit we learned what medical insurance is, and what some terms or expressions used to communicate this topic are. We covered the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Submitting a claim and asking for approvals"
        },
        {
          element: "p",
          text: "2) Hospitals and labs"
        },
        {
          element: "p",
          text: "3) Benefits of health insurance"
        },
        {
          element: "p",
          text: "* We also learned about phrasal verbs, combining verbs + prepositions or verbs + adverbs that create a new meaning to the words.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  //Slide#9-1
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) Medical insurance is being ___________ covered in hospitals.`,
    correctAnswer: `financially`,
    questionOptions: [
      {
        value: `financially`,
        label: `financially`
      },
      {
        value: `dramatically`,
        label: `dramatically`
      }
    ]
  },

  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) Health insurance can be obtained both ___________ or through a job contract benefits.`,
    correctAnswer: `individually`,
    questionOptions: [
      {
        value: `individually`,
        label: `individually`
      },
      {
        value: `collectively`,
        label: `collectively`
      }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) Doctors are required to provide a ____________report to be submitted with the ____________.`,
    correctAnswer: `medical - claim`,
    questionOptions: [
      {
        value: `theatrical - clam`,
        label: `theatrical - clam`
      },
      {
        value: `theatrical - claim`,
        label: `theatrical - claim`
      },
      {
        value: `medical - claim`,
        label: `medical - claim`
      },
      {
        value: `medical - clam`,
        label: `medical - clam`
      }
    ]
  },
  //Slide#9-2
  {
    number: 12,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False.",
    correctAnswer: "False",
    questionText: "1. The patient was 15 years old.",
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
    mediumTitle: "Choose True or False.",
    correctAnswer: "False",
    questionText: "1. The patient worked as a painter.",
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
    mediumTitle: "Choose True or False.",
    correctAnswer: "True",
    questionText: "1. The doctor requested blood work.",
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
    mediumTitle: "Choose True or False.",
    correctAnswer: "False",
    questionText: "1. The doctor prescribed anti-biotics for the patient.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  //Slide#10-1
  {
    number: 16,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `Benefits are the (1)__________ insurance (2)__________ in terms of which (3)_____________ is covered and what is the authorized (4)_____________ of money to cover the patient.`,
    matchOptions: [
      `1. _________`,
      `2. _________`,
      `3. _________`,
      `4. _________`
    ],
    matchAnswers: ["amount", "health", "department", "policy"],
    correctMatch: {
      "1. _________": "health",
      "2. _________": "policy",
      "3. _________": "department",
      "4. _________": "amount"
    },
    correction: `health, policy, department, amount`
  },

  // Slide#10-2
  {
    number: 17,
    type: "Question",
    questionType: "CheckBoxes",
    subTitle: "Unit Assessment",
    questionTitle: "Choose the mistake in the following sentences.",
    questionText: `1) Health insurance is a bank statement.`,
    correctAnswer: ["bank", "statement"],
    questionOptions: ["statement", "insurance", "bank"]
  },
  {
    number: 18,
    type: "Question",
    questionType: "CheckBoxes",
    subTitle: "Unit Assessment",
    questionTitle: "Choose the mistake in the following sentences.",
    questionText: `2) Medical and health insurance are different.`,
    correctAnswer: ["different"],
    questionOptions: ["different", "insurance", "health"]
  },
  {
    number: 19,
    type: "Question",
    questionType: "CheckBoxes",
    subTitle: "Unit Assessment",
    questionTitle: "Health insurance doctors do not assess the medical report.",
    questionText: `3) Health insurance doctors do not assess the medical report.`,
    correctAnswer: ["do", "not"],
    questionOptions: ["not", "do", "assess", "report"]
  },
  {
    number: 20,
    type: "Question",
    questionType: "CheckBoxes",
    subTitle: "Unit Assessment",
    questionTitle: "Reimbursing is repaying the insurance company.",
    questionText: `4) A basketball is round.`,
    correctAnswer: ["insurance", "company"],
    questionOptions: ["insurance", "repaying", "company"]
  },

  //Slide#11
  {
    number: 21,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False.",
    correctAnswer: "True",
    questionText:
      "1. The client was submitting a claim for a surgical procedure.",
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
    title: "Unit Assessment",
    mediumTitle: "Choose True or False.",
    correctAnswer: "False",
    questionText: "2. The insurance representative declined the claim.",
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
    title: "Unit Assessment",
    mediumTitle: "Choose True or False.",
    correctAnswer: "False",
    questionText: "3. The insurance company paid for a single room.",
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
    mediumTitle: "Choose True or False.",
    correctAnswer: "True",
    questionText: "4. The patient did fill in a form with personal data.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  //Slide#11-2
  {
    number: 25,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Complete the sentence using a phrasal verb from the brackets.",
    questionText: `1) I asked my friend to ________ with her story about the hot air balloon.`,
    correctAnswer: `go on`,
    questionOptions: [
      {
        value: `go on`,
        label: `go on`
      },
      {
        value: `get into`,
        label: `get into`
      }
    ]
  },

  {
    number: 26,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Complete the sentence using a phrasal verb from the brackets.",
    questionText: `2) The teacher was expecting us to ___________the assignment early in the morning.`,
    correctAnswer: `hand in`,
    questionOptions: [
      {
        value: `hand in`,
        label: `hand in`
      },
      {
        value: `land in`,
        label: `land in`
      }
    ]
  },
  {
    number: 27,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Complete the sentence using a phrasal verb from the brackets.",
    questionText: `3) The party was noisy, I couldn’t ____________ with it.`,
    correctAnswer: `put up`,
    questionOptions: [
      {
        value: `pull up`,
        label: `pull up`
      },
      {
        value: `put up`,
        label: `put up`
      }
    ]
  },
  {
    number: 28,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Complete the sentence using a phrasal verb from the brackets.",
    questionText: `4) My father told me to always ___________ to the best.`,
    correctAnswer: `look up`,
    questionOptions: [
      {
        value: `look up`,
        label: `look up`
      },
      {
        value: `lock up`,
        label: `lock up`
      }
    ]
  },
  {
    number: 29,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Complete the sentence using a phrasal verb from the brackets.",
    questionText: `5) The police said that the criminal will not ____________ it.`,
    correctAnswer: `get away with`,
    questionOptions: [
      {
        value: `get away with`,
        label: `get away with`
      },
      {
        value: `get onto`,
        label: `get onto`
      }
    ]
  }
];

export default slides;
