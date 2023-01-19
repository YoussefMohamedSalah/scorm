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
          text: `Unit 3 - Modern Jobs `
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
      title: `Market Needs and How to Find Them/Obsolete Jobs`,
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
          text: "1) How can a company identify a market need?"
        },
        {
          element: "p",
          text: "2) Explain the “Jobs to be Done” theory using your own words."
        },
        {
          element: "p",
          text: "3) What challenges has Fares faced?"
        },
        {
          element: "p",
          text: "4) What is the cause of this crisis?"
        },
        {
          element: "p",
          text: "5) How do you think it will affect his life and his career choices in the future?"
        }
      ]
    }
  },
  // Slide#5
  {
    number: 5,
    type: "Text",
    content: {
      title: `Novice Jobs/Different types of Products and Services Provided`,
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
          text: "1) With a partner, think of 2 novice jobs that you have heard of or read about in your city and share them."
        },
        {
          element: "p",
          text: "2) What caused new/ novice jobs to appear in the market?"
        },
        {
          element: "p",
          text: "3) Real-Life Connection: Do you know someone in your community that had to make a career shift to keep up with market needs? Provide details."
        },
        {
          element: "p",
          text: "4) What was the customer asking about?"
        },
        {
          element: "p",
          text: "5) Was the virtual assistant able to assist him? If yes, how?"
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
      title: `Checking for Understanding`,
      content: [
        {
          element: "p",
          text: "1) What action do you consider a stab in your back?"
        },
        {
          element: "p",
          text: "2) In what situation would you be forced to beat around the bush?"
        }
      ]
    }
  },
  // Slide#9
  {
    number: 9,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* In this unit, we have discussed terms and expressions used in modern jobs.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "* We have learnt about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Market needs and how to find them"
        },
        {
          element: "p",
          text: "2) Obsolete jobs"
        },
        {
          element: "p",
          text: "3) Novice jobs "
        },
        {
          element: "p",
          text: "4) Different types of products and services provided "
        },
        {
          element: "p",
          text: "*  We have learnt to use idioms within context.",
          style: { fontWeight: 700 }
        }
      ]
    }
  },
  // Slide#10
  {
    number: 10,
    type: "Question",
    questionType: "TrueFalse",
    title: "Unit Assessment",
    mediumTitle: "A. Choose whether the following sentences are true or false:",
    correctAnswer: "True",
    questionText:
      "1. A market need refers to the purposeful needs and wants of a targeted audience.",
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
    title: "Unit Assessment",
    mediumTitle: "A. Choose whether the following sentences are true or false:",
    correctAnswer: "False",
    questionText:
      "2. Target sector is the total number of sales or customers a business can see on the course of a year.",
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
    title: "Unit Assessment",
    mediumTitle: "Choose True or False:",
    correctAnswer: "True",
    questionText:
      "3. 3- The “Jobs to be Done” theory focuses on the need for products and services where products and services solve a problem or help get a specific job to be done.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#11
  {
    number: 13,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "B. Choose the correct answer: ",
    questionText: `1. Obsolete jobs are jobs that`,
    correctAnswer: `have become extinct`,
    questionOptions: [
      {
        value: `have become extinct`,
        label: `have become extinct`
      },
      {
        value: `have appeared suddenly`,
        label: `have appeared suddenly`
      },
      {
        value: `are constant`,
        label: `are constant`
      }
    ]
  },
  {
    number: 14,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "B. Choose the correct answer: ",
    questionText: `2- The following list of jobs are examples of Obsolete Jobs:`,
    correctAnswer: `Milkmen- Elevator Operators -Film Projectionists`,
    questionOptions: [
      {
        value: `Digital Marketeers- Bloggers- Content Creators`,
        label: `Digital Marketeers- Bloggers- Content Creators`
      },
      {
        value: `Milkmen- Elevator Operators -Film Projectionists`,
        label: `Milkmen- Elevator Operators -Film Projectionists`
      }
    ]
  },
  {
    number: 15,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "B. Choose the correct answer: ",
    questionText: `3-Laid off means the following:`,
    correctAnswer: `To cease an employee`,
    questionOptions: [
      {
        value: `To cease an employee`,
        label: `To cease an employee`
      },
      {
        value: `To fire/ reduce in size`,
        label: `To fire/ reduce in size`
      }
    ]
  },
  // Slide#12
  {
    number: 16,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* C. Answer the following questions about the dialogue between S and Y:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "* We have learnt about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1-Why has Y made a career shift?"
        },
        {
          element: "p",
          text: "2-In what field is S working?"
        },
        {
          element: "p",
          text: "3-Make an inference about the following: Does the Digital Marketeer job pay well enough? How can you tell?"
        }
      ]
    }
  },
  // Slide#13
  {
    number: 17,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* D- Based on the dialogue about different types of products and services answer the following questions:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "* We have learnt about the following:",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1) Real-Life Connection: If you would use an app, what kind of product/ service would you use it for? Explain your answer."
        },
        {
          element: "p",
          text: "2) Think of two ways you would improve the virtual assistant communication/options. Share your ideas with a partner."
        }
      ]
    }
  },
  // Slide#12
  {
    number: 16,
    type: "Text",
    content: {
      title: `Unit Summary`,
      content: [
        {
          element: "p",
          text: "* E- It's Pronunciation Time!",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "* Define the idioms, then use each in a sentence of your choice.",
          style: { fontWeight: 700 }
        },
        {
          element: "p",
          text: "1- Costs an arm and a leg:"
        },
        {
          element: "p",
          text: "2- Blow off some steam:"
        }
      ]
    }
  }
];

export default slides;
