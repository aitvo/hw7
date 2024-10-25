// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

// content div
const contentDiv = document.getElementById('content');

function displayQuestions() {
  questions.forEach((question, index) => {
    // question
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `<b>Question ${index + 1}:</b> ${question.statement}`;

    // show answer
    const showAnswer = document.createElement('button');
    showAnswer.innerHTML = 'Show Answer';

    // event listener (click)
    showAnswer.addEventListener('click', () => {
      // replace the question with the answer
      questionDiv.innerHTML = `Answer: ${question.answer}`;
    });

    // button to question div
    questionDiv.appendChild(showAnswer);

    // question div to content div
    contentDiv.appendChild(questionDiv);
  });
}

// call
displayQuestions();
