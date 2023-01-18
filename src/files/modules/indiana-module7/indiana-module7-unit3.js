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
          text: `Unit 3 - Start Your Own Business`
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
      title: `Business/TYPES OF BUSINESS`,
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
          text: "1) Do you think brainstorming is important during planning? In what way is it important?"
        },
        {
          element: "p",
          text: "2) Would you be able to determine the difference between a feasibility study and a business plan? What is the difference?"
        }
      ]
    }
  },
  // Slide#5
  {
    number: 5,
    type: "Text",
    content: {
      title: `MARKETING AND BUSINESS`,
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
          text: "1) What is the difference between advertisements and commercials?"
        },
        {
          element: "p",
          text: "2) In light of the dialogue that was heard earlier, do you think it was a wise decision to reach out for an agency to market their product? And why?"
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
  // SLide#8
  {
    number: 8,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "In this unit we learned about the general idea of business, learned new expressions/vocabulary, and we also covered the following points:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Requirements to start a business (feasibility study, business plan, budgeting) "
        },
        {
          element: "p",
          text: "2) Types of business"
        },
        {
          element: "p",
          text: "3) What is marketing"
        },
        {
          element: "p",
          text: "4) Types of marketing"
        }
      ]
    }
  },
  // SLide#9
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1) Businesses are an __________ part of the economy.`,
    correctAnswer: "important",
    questionOptions: [
      {
        value: "useless",
        label: "useless"
      },
      {
        value: "important",
        label: "important"
      }
    ]
  },
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) The difference between a small business and a start-up business is __________.`,
    correctAnswer: "market growth",
    questionOptions: [
      {
        value: "market growth",
        label: "market growth"
      },
      {
        value: "supermarket",
        label: "supermarket"
      }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) Feasibility study provides __________ on some factors regarding the business idea.`,
    correctAnswer: "insights",
    questionOptions: [
      {
        value: "in-depth",
        label: "in-depth"
      },
      {
        value: "insights",
        label: "insights"
      }
    ]
  },
  {
    number: 12,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "1) Marketing is an essential step to start a business.",
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
    correctAnswer: "False",
    questionText: "2) Budgeting is securing a location.",
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
    correctAnswer: "True",
    questionText:
      "3) A business plan is a detailed document of gathered and specific information to start a business.",
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
    questionText: "4) Variable cost is a constant amount of money.",
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
    mediumTitle: "Choose the correct answer:",
    questionText: `1) T and F were driving to have __________ .`,
    correctAnswer: "breakfast",
    questionOptions: [
      {
        value: "breakfast",
        label: "breakfast"
      },
      {
        value: "brunch",
        label: "brunch"
      }
    ]
  },
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2) F was __________ .`,
    correctAnswer: "famished",
    questionOptions: [
      {
        value: "thirsty",
        label: "thirsty"
      },
      {
        value: "famished",
        label: "famished"
      }
    ]
  },
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3) T and F agreed to open a café that serves __________.`,
    correctAnswer: "breakfast",
    questionOptions: [
      {
        value: "dinner",
        label: "dinner"
      },
      {
        value: "breakfast",
        label: "breakfast"
      }
    ]
  },
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4) F likes to bake __________ bread.`,
    correctAnswer: "handmade",
    questionOptions: [
      {
        value: "handmade",
        label: "handmade"
      },
      {
        value: "footprint",
        label: "footprint"
      }
    ]
  },
  {
    number: 20,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "1) “Word of mouth” means TV commercials in marketing.",
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
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "False",
    questionText: "2) Billboards and flyers are a form of digital marketing.",
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
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText: "3) Infomercials are informative commercials.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#11
  {
    number: 23,
    type: "Question",
    questionType: "MatchMultiple",
    title: "Unit Assessment",
    subTitle: `Fill in the blanks to complete the paragraph using the word bank given:`,
    mediumTitle: `The company (1)_________ provides (2)_________ equipment made from (3)_________ materials.
 they hired a (4)_________ agency to promote their products. 
 The agency suggested they create a digital marketing (5)_________ that will launch on the (6)_________ in three weeks,
 this campaign will be a collaboration between the agency and an (7)_________ to cover a higher (8)_________ base.`,
    matchOptions: [
      `1. _________`,
      `2. _________`,
      `3. _________`,
      `4. _________`,
      `5. _________`,
      `6. _________`,
      `7. _________`,
      `8. _________`
    ],
    matchAnswers: [
      "Social media",
      "campaign",
      "Sands",
      "influencer",
      "demographical",
      "surfing",
      "sustainable",
      "marketing"
    ],
    correctMatch: {
      "1. _________": "Sands",
      "2. _________": "surfing",
      "3. _________": "sustainable",
      "4. _________": "marketing",
      "5. _________": "campaign",
      "6. _________": "Social media",
      "7. _________": "influencer",
      "8. _________": "demographical"
    },
    correction: `Sands, surfing, sustainable, marketing, campaign, Social media, influencer, demographical`
  },

  // Slide#12
  {
    number: 24,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "Choose the digraphs and/or diphthongs in the following sentences (in your notebook).",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) A king wears a crown. "
        },
        {
          element: "p",
          text: "2) We get fresh milk from cows in a nearby farm."
        },
        {
          element: "p",
          text: "3) Your house is on the next street."
        },
        {
          element: "p",
          text: "4) A basketball is round."
        },
        {
          element: "p",
          text: "5) He showers every day."
        },
        {
          element: "p",
          text: "6) There was a clown in the town fair yesterday."
        }
      ]
    }
  }
];

export default slides;
