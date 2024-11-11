<?php
session_start();

include("db.php");

// Retrieve session data
$rollno = $_GET['rollno'];
$subject = $_GET['subname'];

// Ensure the data is properly received
// Check if the score already exists
$query = "SELECT * FROM score WHERE rollno = ? AND subject = ?";
$stmt = $con->prepare($query);
$stmt->bind_param("ss", $rollno, $subject);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Score already exists
    $scoreExists = true;
} else {
    // Score does not exist
    $scoreExists = false;
}


mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizMaster</title>
    <link rel="stylesheet" href="style.css">  
    <style>
    * {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}


body {
  background-image: url('alietbg.jpg');
  border-image-outset: #001e4d;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}



 
.logo {
  width: 100px;
  height: 100px;
  margin-right: 10px; /* Adjust the margin to add space between the logo and title */
}

.app {
  background: #fff;
  width: 100%;
  max-width: 900px;
  margin: 100px auto 300px; /* Increase the bottom margin */
  border-radius: 10px;
  padding: 50px 30px; /* Increase the top and bottom padding */
}

h1 {
  display: flex;
  align-items: center;
}

.app h1 {
  font-size: 25px;
  color: #001e4d;
  font-weight: 600;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}


  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .info {
    text-align: left;
    font-size: 15px;
    color: #333;
  }

  .timer {
    font-size: 18px;
    color: red;
    align-items: left;
  }

  .content-section {
    display: flex;
    width: 100%;
  }

  .question-list {
    width: 300px;
    padding-right: 2px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Adjust the gap between items */
}

.question-item {
    flex-basis: calc(33.33% - 20px); /* Each box will take up roughly 1/3rd of the row, minus some space for the gap */
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
}

  .question-item.active {
    background-color: #d0e6ff;
  }

  .question-item:hover {
    background-color: #e0e0e0;
  }

  .question-item.attempted {
    background-color: #28a745;
    color: white;
  }

  .vertical-divider {
    width: 1px;
    background-color: #ddd;
    margin: 0 20px;
  }

  .quiz-section {
    flex-grow: 1;

  }

  .question {
    font-weight: bold;
    font-size:25px;
    margin-bottom: 10px;
  }

  .options {
    margin-bottom: 20px;
  
  }

  
  /* Increase radio button size */
input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 10px; /* Adds a gap between the radio button and the option text */
}

/* Adjust spacing between options */
.option {
    display: flex;
    align-items: center;
    font-size: 20px; /* Adjust this size if needed */
    margin-bottom: 15px; /* Increase the gap between options */
}


  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #428bca;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s;
    margin-right: 10px;
  }

  .button:hover {
    background-color: #3071a9;
  }

  .result {
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }

  .hide {
    display: none;
  }

  .result-item {
    text-align: left;
    margin-bottom: 20px;
  }

  .result-item hr {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 10px 0;
  }
  

</style>

</head>
<body>
<br>
<div class="app">
<h1><img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
      <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br><span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span><span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span></span></h1>

  <br><br><br>
  <?php if ($scoreExists): ?>
          <div class="alert alert-warning">
              <strong>Your assignment was already submitted.</strong>
          </div>
      <?php else: ?>
  <div class="main-content">
    <div class="top-section"></div>
    <div class="content-section">
      <div class="question-list" id="question-list"></div>
      <div class="vertical-divider"></div>
   <div class="quiz-section">
      <div id="timer" class="timer"></div>
      <br>
      <br>
      <div class="info">
        <p><strong>Roll Number:</strong> <?php echo $rollno; ?></p>
        <p><strong>Subject:</strong> <?php echo $subject; ?></p>
      </div>
      <br>

      
          <div id="quiz"></div>
          <div id="result" class="result"></div>
          <button id="submit" class="button">Submit</button>  
          <button id="finish" class="button">Finish Test</button><br>
          <button id="retry" class="button hide">Submit Result</button>
          <button id="showAnswer" class="button hide" onclick="redirectToPage()">Exit</button>
      <?php endif; ?>

      </div>
    </div>
  </div>
</div>
<script>
  function redirectToPage() {
         // Get the roll number from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const rollno = urlParams.get('rollno');

        // Redirect to home.php with the rollno as a parameter
        window.location.href = `../home.php?rollno=${rollno}`;
  }

</script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const quizContainer = document.getElementById('quiz');
        const resultContainer = document.getElementById('result');
        const submitButton = document.getElementById('submit');
        const finishButton = document.getElementById('finish');
        const retryButton = document.getElementById('retry');
        const showAnswerButton = document.getElementById('showAnswer');
        const questionList = document.getElementById('question-list');
        const timerDisplay = document.getElementById('timer');

        finishButton.style.backgroundColor = 'red';
        finishButton.style.color = 'white';
        
        let quizData = [];
        let currentQuestion = 0;
        let score = 0;
        let selectedAnswers = {};
        let quizDuration;
        let timerInterval;

        

        function fetchQuizData() {
            fetch('get_questions.php?subname=<?php echo $subject ?>')
                .then(response => response.json())
                .then(data => {
                    console.log('Quiz data fetched:', data);
                    quizData = data;
                    quizDuration = quizData.length * 60; // Assuming each question is given 60 seconds
                    displayQuestion(currentQuestion);
                    startTimer();
                })
                .catch(error => console.error('Error fetching quiz data:', error));
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
      
function displayQuestion(index) {
    if (quizData.length === 0) return;

    currentQuestion = index;
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    if (questionData.isImage) {
        // Display the question as an image
        const img = document.createElement('img');
        img.src = questionData.question;
        img.alt = "Question Image";
        img.style.width = '350px';
        img.style.height = 'auto';
        questionElement.appendChild(img);
    } else {
        // Display the question as text with line breaks after every 5 words
        const questionText = document.createElement('p');
        const words = questionData.question.split(' '); // Split the question into words
        let formattedText = '';
        
        for (let i = 0; i < words.length; i += 6) {
            formattedText += words.slice(i, i + 6).join(' ') + '<br>'; // Add a line break every 5 words
        }

        questionText.innerHTML = formattedText;
        questionElement.appendChild(questionText);
    }

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = Object.entries(questionData.options);
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(([key, value]) => {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = key;

        if (selectedAnswers[currentQuestion] === key) {
            radio.checked = true;
        }

        const optionText = document.createTextNode(value);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    });

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);

    updateQuestionList();
}



        function updateQuestionList() {
            questionList.innerHTML = '';
            quizData.forEach((_, index) => {
                const questionItem = document.createElement('div');
                questionItem.className = 'question-item';
              
                if (selectedAnswers[index] !== undefined) {
                    questionItem.classList.add('attempted');
                }
              
                questionItem.innerText = index + 1;
                if (index === currentQuestion) {
                    questionItem.classList.add('active');
                }
                questionItem.addEventListener('click', () => displayQuestion(index));
                questionList.appendChild(questionItem);
            });
        }

        function checkAnswer() {
            const selectedOption = document.querySelector('input[name="quiz"]:checked');
            if (selectedOption) {
                const answer = selectedOption.value;
                selectedAnswers[currentQuestion] = answer;
                if (answer === quizData[currentQuestion].answer) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < quizData.length) {
                    displayQuestion(currentQuestion);
                }
            }
        }

        function displayResult() {
    clearInterval(timerInterval);
    timerDisplay.style.display = 'none';
    finishButton.style.display = 'none';
    questionList.style.display = 'none';
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'block';

    let resultHtml = `<p><span style="color:darkblue;font-size:30px;">You scored ${score} out of ${quizData.length}!</span></p><br><br>`;

    let questionsHtml = '';
    quizData.forEach((questionData, index) => {
        const userAnswer = selectedAnswers[index] || 'Not Answered';
        const correctAnswer = questionData.answer;

        // Check if question data is an image or text
        let questionContent = '';
        if (questionData.isImage) {
            // If it's an image, display it as an image
            questionContent = `<br><img src="${questionData.question}" alt="Question Image" style="width:300px; height:auto;" /><br>`;
        } else {
            // If it's text, display as text
            questionContent = `<p>${questionData.question}</p>`;
        }

        let optionsHtml = '';
        for (const [key, value] of Object.entries(questionData.options)) {
            optionsHtml += 
                `<div style="padding-left: 10px;">
                    ${key}: ${value}
                </div>`;
        }

        questionsHtml += 
            `<div class="result-item">
                <strong>Question ${index + 1}:</strong> ${questionContent}
                <div>Options:</div>
                ${optionsHtml}
                <br><strong>Your Answer:</strong> ${questionData.options[userAnswer] || 'Not Answered'}<br>
                <strong>Correct Answer:</strong> ${questionData.options[correctAnswer]}<br>
                <hr>
            </div>`;
    });

    resultContainer.innerHTML = resultHtml + questionsHtml;
}


          
        function startTimer() {
            let timeLeft = quizDuration;
            timerDisplay.innerHTML = `<span style="color:red;">Time Left:</span>${formatTime(timeLeft)}`;
      
            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.innerHTML = `<span style="color:red;">Time Left:</span>${formatTime(timeLeft)}`;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    displayResult();
                }
            }, 1000);
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }

        function submitScore(rollno, subject, score) {
            const xhr = new XMLHttpRequest();
            const url = 'save_score.php';
            const params = 'roll=' + encodeURIComponent(rollno) + '&subject=' + encodeURIComponent(subject) + '&score=' + encodeURIComponent(score);
      
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log('Score submitted successfully:', xhr.responseText);
                }
            };
      
            xhr.send(params);
        }
        
        fetchQuizData();
        

        submitButton.addEventListener('click', checkAnswer);
        finishButton.addEventListener('click', () => {
            const isConfirmed = confirm('Are you sure you want to finish the test?');
    
            if (isConfirmed) {
                clearInterval(timerInterval); // Stop the timer
                submitScore('<?php echo $rollno; ?>', '<?php echo $subject; ?>', score); // Submit score to the database
                displayResult(); // Call displayResult to show results
            }
        });
    });
</script>
</body>
</html>
