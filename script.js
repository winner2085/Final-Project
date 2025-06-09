function quizWorks() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input> type="radio" name="questions${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const scoreContainer = document.getElementById('score');

let myQuestions = [
    {
        question: "What color is the sky?",
        answers: {
            a:"purple",
            b:"green",
            c:"blue",
            d:"yellow"
        },
        correctAnswer: "c"
    },
    {
        question: "How many planets are in the sky?",
        answers: {
            a:"8",
            b:"10",
            c:"7",
            d:"25"
        },
        correctAnswer: "a"
    },
    {
        question: "How many minutes are in a full second?",
        answers: {
            a:"22",
            b:"60",
            c:"456,298,980.432",
            d:"corp"
        },
        correctAnswer: "d"
    },
];