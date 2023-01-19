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
          text: `Unit 1 - Art Past and Present`
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
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U1v1.mp4"
        }
      ]
    }
  },
  // Slide#3
  {
    number: 3,
    type: "Text",
    content: {
      title: `The Relationship between Arts and Culture/Types of Art/At the Opera`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U1v2.mp4"
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
    questionText: `1.This type of art includes puppetry, dance, circuses, magic shows, and dramas.`,
    correctAnswer: "Theatre",
    questionOptions: [
      {
        value: "Theatre",
        label: "Theatre"
      },
      {
        value: "Literature",
        label: "Literature"
      }
    ]
  },
  {
    number: 5,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. This type of art includes poetry, articles, novels, plays, folklore, myths, and legends as well as other forms of writing.`,
    correctAnswer: "Literature",
    questionOptions: [
      {
        value: "Visual Art",
        label: "Visual Art"
      },
      {
        value: "Literature",
        label: "Literature"
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
    questionText: `3. Clay, metal, wood, and items seen in artists' daily life, can be utilized as a  medium to produce this type of art.`,
    correctAnswer: "Sculpture",
    questionOptions: [
      {
        value: "Visual Art",
        label: "Visual Art"
      },
      {
        value: "Sculpture",
        label: "Sculpture"
      }
    ]
  },
  {
    number: 7,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. This type of art has seen a huge progression in the last 100 years to become as the way we know it today.`,
    correctAnswer: "Cinema and the Film Industry",
    questionOptions: [
      {
        value: "Theatre",
        label: "Theatre"
      },
      {
        value: "Cinema and the Film Industry",
        label: "Cinema and the Film Industry"
      }
    ]
  },
  // Slide#6
  {
    number: 8,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `1. A group of instrumentalists.`,
    correctAnswer: "orchestra",
    questionOptions: [
      {
        value: "backstage",
        label: "backstage"
      },
      {
        value: "actors",
        label: "actors"
      },
      {
        value: "orchestra",
        label: "orchestra"
      }
    ]
  },
  {
    number: 9,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `2. The seats on the main level of a theatre in front of the stage.`,
    correctAnswer: "stalls",
    questionOptions: [
      {
        value: "stalls",
        label: "stalls"
      },
      {
        value: "orchestra pit",
        label: "orchestra pit"
      },
      {
        value: "backstage",
        label: "backstage"
      }
    ]
  },
  // Slide#7
  {
    number: 10,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `3. The highest natural adult male singing voice.`,
    correctAnswer: "tenor",
    questionOptions: [
      {
        value: "tenor",
        label: "tenor"
      },
      {
        value: "diva",
        label: "diva"
      },
      {
        value: "actor",
        label: "actor"
      }
    ]
  },
  {
    number: 11,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `4. An area of seats above the main seating area.`,
    correctAnswer: "balcony",
    questionOptions: [
      {
        value: "balcony",
        label: "balcony"
      },
      {
        value: "soprano",
        label: "soprano"
      },
      {
        value: "act",
        label: "act"
      }
    ]
  },
  // Slide#8
  {
    number: 12,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. The movie was __________. It did not deserve all that hype.`,
    correctAnswer: "disappointing",
    questionOptions: [
      {
        value: "disappointing",
        label: "disappointing"
      },
      {
        value: "mesmerizing",
        label: "mesmerizing"
      }
    ]
  },
  {
    number: 13,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. The show was ___________! I felt like I was in a dream.`,
    correctAnswer: "dazzling",
    questionOptions: [
      {
        value: "dazzling",
        label: "dazzling"
      },
      {
        value: "mediocre",
        label: "mediocre"
      }
    ]
  },
  // Slide#9
  {
    number: 14,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. I hardly slept all day. I feel pretty ___________.`,
    correctAnswer: "awful",
    questionOptions: [
      {
        value: "marvelous",
        label: "marvelous"
      },
      {
        value: "awful",
        label: "awful"
      }
    ]
  },
  {
    number: 15,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. Her determination and discipline are ___________.`,
    correctAnswer: "admirable",
    questionOptions: [
      {
        value: "admirable",
        label: "admirable"
      },
      {
        value: "boring",
        label: "boring"
      }
    ]
  },
  // Slide#10
  {
    number: 16,
    type: "Text",
    content: {
      title: `At the Museum/Virtual Museums`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U1v3.mp4"
        }
      ]
    }
  },
  // Slide#11
  {
    number: 17,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `1. A person employed to show tourists around places of interest.`,
    correctAnswer: "tour guide",
    questionOptions: [
      {
        value: "admission",
        label: "admission"
      },
      {
        value: "tour guide",
        label: "tour guide"
      },
      {
        value: "collection",
        label: "collection"
      }
    ]
  },
  {
    number: 18,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `2. The fee charged to enter a place.`,
    correctAnswer: "admission fee",
    questionOptions: [
      {
        value: "admission fee",
        label: "admission fee"
      },
      {
        value: "preservation",
        label: "preservation"
      },
      {
        value: "donation",
        label: "donation"
      }
    ]
  },
  // Slide#12
  {
    number: 19,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Checking for Understanding",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `3. To maintain something in its original or existing status.`,
    correctAnswer: "preservation",
    questionOptions: [
      {
        value: "to wander",
        label: "to wander"
      },
      {
        value: "replica",
        label: "replica"
      },
      {
        value: "preservation",
        label: "preservation"
      }
    ]
  },
  // Slide#13
  {
    number: 20,
    type: "Question",
    questionType: "TrueFalse",
    title: "Checking for Understanding",
    mediumTitle:
      "Listen to the dialogue “At the Museum” one more time. Decide whether the following is true or false:",
    correctAnswer: "False",
    questionText: "1. The museum was offering guided tours on that day.",
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
      "Listen to the dialogue “At the Museum” one more time. Decide whether the following is true or false:",
    correctAnswer: "True",
    questionText: "2. Tourists can take pictures but without flash.",
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
      "Listen to the dialogue “At the Museum” one more time. Decide whether the following is true or false:",
    correctAnswer: "True",
    questionText:
      "3. Tourists cannot visit the east wing because it is under construction.",
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
      "Listen to the dialogue “At the Museum” one more time. Decide whether the following is true or false:",
    correctAnswer: "False",
    questionText:
      "4. Sculpture and painting galleries can be found in the same place as the artifacts.",
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
      "Listen to the dialogue “At the Museum” one more time. Decide whether the following is true or false:",
    correctAnswer: "False",
    questionText: "5. The museum offers free admission to the public.",
    correction: "",
    questionOptions: [
      { value: "True", label: "True" },
      { value: "False", label: "False" }
    ]
  },
  // Slide#14
  {
    number: 25,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "Imagine that you are a tourist, and you wish to visit the Egyptian Museum."
        },
        {
          element: "p",
          text: "What are some of the important information you need to gather before you can visit the museum?"
        },
        {
          element: "p",
          text: "How do you ask about this information?"
        },
        {
          element: "p",
          text: "Form the appropriate questions that you need to ask in order to get the information you need."
        }
      ]
    }
  },
  // Slide#15
  {
    number: 26,
    type: "Text",
    content: {
      title: `Self-Reflection`,
      content: [
        {
          element: "p",
          text: "Use Google Arts and Culture to explore any of the virtual museums you wish to visit."
        },
        {
          element: "p",
          text: "You may talk to a friend, create a video, or record a voice message talking about this experience."
        },
        {
          element: "p",
          text: "Mention some of the things that you found impressive and things you wish were there."
        }
      ]
    }
  },
  // Slide#16
  {
    number: 27,
    type: "Text",
    content: {
      title: `It’s Pronunciation Time!`,
      content: [
        {
          element: "video",
          text: "https://media.ta3limy.com/videos/BalancED-EPP/Module7/U1v4.mp4"
        }
      ]
    }
  },
  // Slide#17
  {
    number: 28,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. Some of the movements that this type of art includes are Avant-garde, Cubism, Digital Art, Expressionism, Impressionism, Pop Art, Surrealism, and many more.`,
    correctAnswer: "Painting",
    questionOptions: [
      {
        value: "Painting",
        label: "Painting"
      },
      {
        value: "Music",
        label: "Music"
      }
    ]
  },
  {
    number: 29,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. This type of art is all about design and structures. Some of its most famous styles are Classical, Renaissance, Gothic, Victorian, Modern, and Post-Modern.`,
    correctAnswer: "Architecture",
    questionOptions: [
      {
        value: "Architecture",
        label: "Architecture"
      },
      {
        value: "Cinema",
        label: "Cinema"
      }
    ]
  },
  // Slide#18
  {
    number: 30,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. Harmony, timbre, melody, and rhythm are all components of the main product of this type of art.`,
    correctAnswer: "Music",
    questionOptions: [
      {
        value: "Theatre",
        label: "Theatre"
      },
      {
        value: "Music",
        label: "Music"
      }
    ]
  },
  // Slide#19
  {
    number: 31,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `1. A public display of artwork or items of interest held in a museum or a gallery for people to see.`,
    correctAnswer: "exhibition",
    questionOptions: [
      {
        value: "replica",
        label: "replica"
      },
      {
        value: "artifact",
        label: "artifact"
      },
      {
        value: "exhibition",
        label: "exhibition"
      }
    ]
  },
  {
    number: 32,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `2. Something you give in order to help a person or organization.`,
    correctAnswer: "donation",
    questionOptions: [
      {
        value: "donation",
        label: "donation"
      },
      {
        value: "replica",
        label: "replica"
      },
      {
        value: "exhibition",
        label: "exhibition"
      }
    ]
  },
  // Slide#20
  {
    number: 33,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `3. A duplicate of an original artistic work.`,
    correctAnswer: "replica",
    questionOptions: [
      {
        value: "gallery",
        label: "gallery"
      },
      {
        value: "replica",
        label: "replica"
      },
      {
        value: "donation",
        label: "donation"
      }
    ]
  },
  {
    number: 34,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `4. An object made by a human being, of cultural or historical interest.`,
    correctAnswer: "artifact",
    questionOptions: [
      {
        value: "artifact",
        label: "artifact"
      },
      {
        value: "exhibition",
        label: "exhibition"
      },
      {
        value: "gallery",
        label: "gallery"
      }
    ]
  },
  // Slide#21
  {
    number: 35,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `5. A person who writes music.`,
    correctAnswer: "composer",
    questionOptions: [
      {
        value: "tenor",
        label: "tenor"
      },
      {
        value: "soprano",
        label: "soprano"
      },
      {
        value: "composer",
        label: "composer"
      }
    ]
  },
  {
    number: 36,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `6. A section of the opera or play that is divided into scenes.`,
    correctAnswer: "act",
    questionOptions: [
      {
        value: "actor",
        label: "actor"
      },
      {
        value: "act",
        label: "act"
      },
      {
        value: "soprano",
        label: "soprano"
      }
    ]
  },
  // Slide#22
  {
    number: 37,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle:
      "Choose the appropriate word for each of the following definitions:",
    questionText: `7. The area of a theatre where actors wait until it’s time to walk on stage and play their parts.`,
    correctAnswer: "backstage",
    questionOptions: [
      {
        value: "backstage",
        label: "backstage"
      },
      {
        value: "stalls",
        label: "stalls"
      },
      {
        value: "balcony",
        label: "balcony"
      }
    ]
  },
  // Slide#23
  {
    number: 38,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `1. I’ve lost my keys. Please contact me if you __________ them.`,
    correctAnswer: "come across",
    questionOptions: [
      {
        value: "come across",
        label: "come across"
      },
      {
        value: "come out",
        label: "come out"
      }
    ]
  },
  {
    number: 39,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `2. You go now, and I’l __________ as soon as I can.`,
    correctAnswer: "come along",
    questionOptions: [
      {
        value: "come across",
        label: "come across"
      },
      {
        value: "come along",
        label: "come along"
      }
    ]
  },
  {
    number: 40,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `3. The new employee is very creative. She always __________ great ideas.`,
    correctAnswer: "comes up with",
    questionOptions: [
      {
        value: "comes along",
        label: "comes along"
      },
      {
        value: "comes up with",
        label: "comes up with"
      }
    ]
  },
  {
    number: 41,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `4. This dye won’t __________ and is guaranteed not to fade. `,
    correctAnswer: "come off",
    questionOptions: [
      {
        value: "come off",
        label: "come off"
      },
      {
        value: "come up with",
        label: "come up with"
      }
    ]
  },
  {
    number: 42,
    type: "Question",
    questionType: "RadioButtons",
    subTitle: "Unit Assessment",
    mediumTitle: "Choose the correct answer:",
    questionText: `5. I’ve been looking for Timmy all day until he __________ of the closet.`,
    correctAnswer: "came out",
    questionOptions: [
      {
        value: "came out",
        label: "came out"
      },
      {
        value: "came across",
        label: "came across"
      }
    ]
  }
];

export default slides;
