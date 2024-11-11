function seeAnswers() {
  resetState(); // Clear existing UI elements

  questionsForCurrentQuiz.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<br>Question ${index + 1}: ${question.question}`;

    const answerList = document.createElement("ul");
    answerList.style.listStyleType = 'decimal'; // Set list-style-type to display numbers

    let userAnswer, actualAnswer;

    question.answers.forEach((answer, answerIndex) => {
      const answerItem = document.createElement("li");
      answerItem.innerHTML = answer.text;

      if (answer.correct) {
        actualAnswer = answerIndex + 1; // Actual answer (1-based index)
        answerItem.style.color = "green"; // Highlight correct answer in green
      }

      if (answer.selected) {
        userAnswer = answerIndex + 1; // User's answer (1-based index)
        answerItem.style.color = answer.correct ? "green" : "red"; // Highlight user's answer in green if correct, otherwise in red
      }

      answerList.appendChild(answerItem);
    });

    // Add user's answer and actual answer between question and options
    const userAnswerDiv = document.createElement("div");
    userAnswerDiv.innerHTML = `<span style="font-family: Times New Roman;"><br>Your answer:</span> ${userAnswer || 'Not answered'}`;
    const actualAnswerDiv = document.createElement("div");
    actualAnswerDiv.innerHTML = `<span style="font-family: Times New Roman;">Actual answer:</span> ${actualAnswer || 'Not available'}`;

    const hr = document.createElement("hr");

    answerButtons.appendChild(questionDiv);
    answerButtons.appendChild(userAnswerDiv);
    answerButtons.appendChild(actualAnswerDiv);
    answerButtons.appendChild(answerList);
    answerButtons.appendChild(hr);
  });

  nextButton.innerHTML = "Back to Score";
}
