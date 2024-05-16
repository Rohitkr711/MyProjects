let questionList = [
  {
    question: "Who is the prime minister of India?",
    answers: [
      { text: "a) Pan Singh Tomar", correct: "false" },
      { text: "b) MS Dhoni", correct: "false" },
      { text: "c) Narendra Modi", correct: "True" },
      { text: "d) Larry Page", correct: "false" },
    ],
  },

  {
    question: "Who is the President of India?",
    answers: [
      { text: "a) Dharmenra Pradhan", correct: "false" },
      { text: "b) Susma Swaraj", correct: "false" },
      { text: "c) Draupadi Murmu", correct: "True" },
      { text: "d) Yuvraj Singh", correct: "false" },
    ],
  },

  {
    question: "Who is the founder of Google?",
    answers: [
      { text: "a) Dan christian", correct: "false" },
      { text: "b) Adam Zampa", correct: "false" },
      { text: "c) Sundar Pichai", correct: "false" },
      { text: "d) Larry Page", correct: "True" },
    ],
  },

  {
    question: "Which place is called as heaven of India?",
    answers: [
      { text: "a) Kashmir", correct: "True" },
      { text: "b) Gangtok", correct: "false" },
      { text: "c) Uttarakhand", correct: "false" },
      { text: "d) Manali", correct: "false" },
    ],
  },
  {
    question: "Which country is the host for T20 world-cup 2024?",
    answers: [
      { text: "a) America", correct: "false" },
      { text: "b) West-Indies", correct: "false" },
      { text: "c) Both a&b", correct: "True" },
      { text: "d) India", correct: "false" },
    ],
  },
  {
    question: "Which country will win T20 world-cup 2024?",
    answers: [
      { text: "a) England", correct: "false" },
      { text: "b) WestIndies", correct: "false" },
      { text: "c) India", correct: "True" },
      { text: "d) Australia", correct: "false" },
    ],
  },
  {
    question: "Which team will win IPL 2024?",
    answers: [
      { text: "a) KKR", correct: "false" },
      { text: "b) CSK", correct: "false" },
      { text: "c) RCB", correct: "false" },
      { text: "d) RR", correct: "True" },
    ],
  },
  {
    question: "What's your feedback on PW Skill's FSWD Course?",
    answers: [
      { text: "a) Good", correct: "false" },
      { text: "b) Excellent", correct: "false" },
      { text: "c) Bad", correct: "True" },
      { text: "d) Avg", correct: "false" },
    ],
  },
  {
    question: "Which party will win Lok Sabha Election 2024?",
    answers: [
      { text: "a) BJP", correct: "True" },
      { text: "b) AAP", correct: "false" },
      { text: "c) INDIES", correct: "false" },
      { text: "d) CONGRESS", correct: "false" },
    ],
  },
  {
    question: "Who is the founder of Phisics Wallah?",
    answers: [
      { text: "a) Amit Ranjan", correct: "false" },
      { text: "b) Alakh Panday", correct: "True" },
      { text: "c) HC Verma", correct: "false" },
      { text: "d) NOT", correct: "false" },
    ],
  },
];

// // Holding Question,Options and Next button
const questionElement = document.getElementById("Questions");
const answerOptionButton = document.getElementById("option-btns");
const nextButton = document.getElementById("nxtbtn");
const nextButtonContainer = document.getElementById("nxtbtnContainer");

let currentQuestionIndex = 0;
let score = 0;

// Start Quiz Function
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Displaing Q&A
function showQuestion() {
  resetOptions();
  let currentQandAIdx = questionList[currentQuestionIndex];
  let currentQuestion = currentQandAIdx.question;
  questionElement.innerHTML = `Q${currentQuestionIndex + 1}. ${currentQuestion}`;

  //   ShowingOptions
  currentQandAIdx.answers.forEach((ans) => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("btn");
    optionButton.innerHTML = ans.text;
    answerOptionButton.appendChild(optionButton);

    // applying onclick event on buttons
    if (ans.correct) {
      optionButton.dataset.correct = ans.correct;
    }
    optionButton.addEventListener("click", selectAnswer);
  });
}

function resetOptions() {
  nextButtonContainer.style.display = "none";
  while (answerOptionButton.firstChild) {
    answerOptionButton.removeChild(answerOptionButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "True";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // console.log(answerOptionButton.children);
  Array.from(answerOptionButton.children).forEach((optionButton) => {
    if (optionButton.dataset.correct === "True") {
      optionButton.classList.add("correct");
      
    }
    // else{
    optionButton.disabled = true;
    // }
  });
  nextButtonContainer.style.display = "flex";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questionList.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questionList.length) {
      showQuestion();
  }else{
    showScore();
  }
}

function showScore(){
  resetOptions();
  questionElement.innerHTML=`&#127942; You scored ${score} out of ${questionList.length}`;  
  nextButton.innerHTML="Play again";
  nextButtonContainer.style.display="flex";
}
startQuiz();
