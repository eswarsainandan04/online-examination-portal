


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const timerElement = document.getElementById("timer");
const result = document.getElementById("questions");

let currentQuestionIndex = 0;
let score = 0;
let quizTimeout;

function startQuiz() {
  clearQuizTimeout();
  const subjectSelect = document.getElementById("subjectSelect");
  const selectedSubject = subjectSelect.value;

  if (selectedSubject === "none") {
    alert("Please select a valid subject.");
    return;
  }

  if (selectedSubject) {
    document.getElementById("menu-timer").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    questionsForCurrentQuiz = shuffleArray(questions[selectedSubject], 20);

    startQuizInternal();

    const endTime = Date.now() + 1200000; // 20 minutes
    quizTimeout = setInterval(() => updateTimer(endTime), 1000);
  } else {
    alert("Please select a subject.");
  }
}

function clearQuizTimeout() {
  clearInterval(quizTimeout);
}

function updateTimer(endTime) {
  const currentTime = Date.now();
  const timeLeft = Math.max(0, endTime - currentTime);
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formattedTime = `${minutes}:${seconds}`;

  timerElement.innerHTML = `<span style='color: darkred; font-family: Arial Black;'><br>Time Left:</span> ${formattedTime}`;

  if (timeLeft > 0) {
    timerElement.style.display = "block";
  } else {
    timerElement.style.display = "none";
    clearInterval(quizTimeout);
    endQuiz();
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questionsForCurrentQuiz[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  let totalQuestions = questionsForCurrentQuiz.length;
  if(questionNo==20){
    nextButton.innerHTML='submit';
  }else
  if(questionNo<20){
    nextButton.innerHTML="Next";
  }

  questionElement.innerHTML = `Subject: <span style="color:green;font-family:'Arial black';">${subjectSelect.value}</span><br><span style='color: orange; font-family: Arial Black;'>Question ${questionNo} / ${totalQuestions}:</span><br><br>${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    answerButtons.appendChild(button);

    if (answer.selected) {
      nextButton.disabled = false;
      button.style.backgroundColor = "yellow"; // Highlight the previously selected answer
    }

    button.addEventListener("click", () => selectAnswer(index));
  });

  backButton.disabled = currentQuestionIndex === 0;

  backButton.style.display = "inline-block";
  backButton.style.float = "left"; // Align "Back" button to the le// Add bottom margin
  nextButton.style.display = "inline-block";
  nextButton.style.float = "right"; // Align "Next" button to the right
}

function resetState() {
  nextButton.style.display = "block";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(index) {
  const selectedBtn = answerButtons.children[index];
  const isCorrect = questionsForCurrentQuiz[currentQuestionIndex].answers[index].correct;

  if (isCorrect) {
    score++;
  }

  // Unselect all other options
  Array.from(answerButtons.children).forEach((button, i) => {
    button.style.backgroundColor = ""; // Remove background color
    questionsForCurrentQuiz[currentQuestionIndex].answers[i].selected = false; // Unselect all other options
  });

  // Highlight the selected option in yellow
  selectedBtn.style.backgroundColor = "yellow"; // Change to the desired color
  questionsForCurrentQuiz[currentQuestionIndex].answers[index].selected = true; // Mark the selected option

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  const percentage = (score / questionsForCurrentQuiz.length) * 100;
  const statusColor = percentage < 35 ? "#ff9393" : "#9aeabc";
  const status = percentage < 35 ? "Failed" : "Qualified";

  questionElement.innerHTML = `You scored ${score} out of ${questionsForCurrentQuiz.length}!<br><br>Percentage: ${percentage.toFixed(0)}%<br><br>Status: <span style='color: ${statusColor};'>${status}</span><br><br>`;
  const seeAnswersButton = document.createElement("button");
  seeAnswersButton.innerHTML = "See Answers";
  seeAnswersButton.classList.add("menu-btn");
  seeAnswersButton.style.display = "block";
  seeAnswersButton.addEventListener("click", seeAnswers); // Call seeAnswers() when the button is clicked

  const backToMenuButton = document.createElement("button");
  backToMenuButton.innerHTML = "Back to Menu";
  backToMenuButton.classList.add("menu-btn");
  backToMenuButton.style.display = "block";
  backToMenuButton.addEventListener("click", resetApp);

  answerButtons.appendChild(seeAnswersButton);
  answerButtons.appendChild(backToMenuButton);

  nextButton.style.display = "none";

  backButton.style.display = "none";

  updateTimer();
}


// Modify the endQuiz function to call the updateStorage function
function endQuiz() {
  clearInterval(quizTimeout);
  
}



function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsForCurrentQuiz.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function handleBackButton() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
    nextButton.disabled = false;
  }
}

nextButton.addEventListener("click", handleNextButton);
backButton.addEventListener("click", handleBackButton);

function startQuizInternal() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function resetApp() {
  clearQuizTimeout();
  reloadPage();
  document.getElementById("menu").style.display = "block";
  document.getElementById("quiz").style.display = "none";
}

function reloadPage() {
  window.location.href = window.location.href; // Redirect to the current page
}

function shuffleArray(array, limit) {
  const shuffledArray = array.slice(); // Create a copy of the original array
  let currentIndex = shuffledArray.length, randomIndex, tempValue;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    tempValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = tempValue;
  }

  // Return a sliced portion of the array based on the specified limit
  return shuffledArray.slice(0, Math.min(limit, shuffledArray.length));
}

startQuizInternal();
