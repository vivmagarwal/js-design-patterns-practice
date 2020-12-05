console.log('open-closed works!');

// Open for extension; closed for modification.
class BooleanQuestion {
    constructor(description) {
      this.description = description;
    }
  
  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
      this.description = description;
      this.options = options;
    }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}.${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('Answer: _____________________________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Minimum:');
    console.log('Maximum: ');
  }
}


// function printQuiz(questions) {
//   questions.forEach(question => {
//     console.log(`${question.description} (${question.type})`); {
//       switch (question.type) {
//         case 'boolean':
//           console.log('1. True');
//           console.log('2. False');
//           break;
//         case 'multipleChoice':
//           question.options.forEach((option, index) => {
//             console.log(`${index + 1}.${option}`);
//           });
//           break;
//         case 'text':
//           console.log('Answer: _____________________________');
//           break;
//         case 'range':
//           console.log('Minimum:');
//           console.log('Maximum: ');
//       }
//     }
//     console.log('');
//   })
// }  

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description, question.type);
    const q = new (eval(question.type))(question.description, question.options);  
    q.printQuestionChoices();
    console.log('');
  })
}

const questions = [
  {
    type: 'BooleanQuestion',
    description: 'Is this video useful.',
    options: []
  },
  {
    type: 'MultipleChoiceQuestion',
    description: 'What is your favourite programming language?',
    options: ['css', 'html', 'js', 'python']
  },
  {
    type: 'TextQuestion',
    description: 'Describe your favourite JS feature.',
    options: []
  },
  {
    type: 'RangeQuestion',
    description: 'What is the speed limit in your city?',
    options: []
  }
]

printQuiz(questions);

// https://www.youtube.com/watch?v=-ptMtJAdj40&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=8&ab_channel=WebDevSimplified