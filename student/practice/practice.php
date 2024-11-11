<?php
session_start();
include("db.php");

// Retrieve the roll number from the URL
$rollno = $_GET['rollno'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizMaster</title>
    <link rel="stylesheet" href="lnstyle.css">
    <style>
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
        .stu-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px; /* Adjust the margin as needed */
        }
        
        .stu {
            width: 100px;
            height: 100px;
        }
        
        .menu-btn {
            background: #001e4d;
            color: #fff;
            font-weight: 500;
            width: 150px;
            border: 0;
            padding: 10px;
            margin: 20px auto 0;
            border-radius: 4px;
            cursor: pointer;
        }
        .custom-button {
            background-color: #148ace; /* Green background */
            border: none; /* Remove border */
            color: white; /* White text */
            padding: 10px 20px; /* Decreased padding */
            text-align: center; /* Center text */
            text-decoration: none; /* Remove underline */
            display: inline-block; /* Make it inline block */
            font-size: 14px; /* Decreased font size */
            margin: 4px 2px; /* Margin */
            cursor: pointer; /* Cursor on hover */
            border-radius: 10px; /* Rounded corners */
        }
        
        /* Change button color on hover */
        .custom-button:hover {
            background-color: #210c9b;
        }
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
            width: 90%;
            max-width: 900px;
            margin: 100px auto ; /* Increase the bottom margin */
            border-radius: 10px;
            padding: 50px 30px; /* Increase the top and bottom padding */
          }
          
          h1 {
            display: flex;
            align-items: center;
          }
          
          /* Your existing styles here */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          
          thead {
            background-color: #001e4d;
            color: white;
          }
          
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          
          .label {
            font-weight: bold;
          }
          
          .value {
            margin-left: 5px;
          }
          
          .app h1 {
            font-size: 25px;
            color: #001e4d;
            font-weight: 600;
            border-bottom: 1px solid #333;
            padding-bottom: 30px;
          }
          
          .menu {
            text-align: center;
            margin-top: 20px;
          }
          .menu-welcome {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
          }
          
          .menu-welcome .profile-details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .menu-welcome span.label {
            color: red;
            font-size: 24px;
          }
          
          .menu-welcome span.value {
            font-size: 24px;
            margin-left: 5px; /* Adjust the margin if needed */
          }
          
          .subject-select {
            width: 200px;
            padding: 10px;
            margin: 10px;
          }
          
          .menu-btn {
            background: #fff;
            color: #222;
            font-weight: 500;
            width: 200px;
            border: 1px solid #222;
            padding: 10px;
            margin: 10px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
          }
          
          .menu-btn:hover {
            background: #222;
            color: #fff;
          }
          
          
          .quiz {
            padding: 20px 0;
          }
          
          .quiz h2 {
            font-size: 18px;
            color: #001e4d;
            font-weight: 600;
          }
          
          .btn {
            background: #fff;
            color: #222;
            font-weight: 500;
            width: 100%;
            border: 1px solid #222;
            padding: 10px;
            margin: 10px 0;
            text-align: left;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
          }
          
          .btn:hover:not([disabled]) {
            background: #222;
            color: #fff;
          }
          
          .btn:disabled {
            cursor: no-drop;
          }
          
          #next-btn,
          #back-btn,
          
          .menu-btn {
            background: #001e4d;
            color: #fff;
            font-weight: 500;
            width: 150px;
            border: 0;
            padding: 10px;
            margin: 20px auto 0;
            border-radius: 4px;
            cursor: pointer;
          }
          .buttonraa{
            background: red;
            color: #fff;
            font-weight: 500;
            width: 150px;
            border: 0;
            padding: 10px;
            margin: 20px auto 0;
            border-radius: 4px;
            cursor: pointer;
          }
          .buttonraa:hover {
            background: pink;
            color: #fff;
          }
          
          
          
          /* Example CSS for styling the answer buttons */
          
  
        
    </style>
    
</head>
<body>
  <div class="app">
    <h1><img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
        <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br><span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span><span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span></span></h1>
         
        <!-- Timer display -->
    <div id="timer" style="text-align: center; color: #001e4d;"></div>
    <!-- Menu section -->
    <div class="menu" id="menu">
      <!-- Display welcome message with name at the top -->
      <p style="color: green;font-size:26px;font-family:Elephant">WELCOME</p>
      <br>
      <div class="menu-welcome" id="menu-welcome">
      </div>
      <!--<P id="menu-welcome"></p>-->
      <br>
      <br>
      <h2 style="font-family: Arial Black;">Select Subject:</h2>
      <select id="subjectSelect" class="subject-select">
        <option value="none"></option>
        <option value="PPSUC">Program for problem solving using C</option>
        <option value="OOPTCPP">OOPS through C++</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="DBMS">Database Management System</option>
        <option value="OS">Operating System</option>
        <option value="DS">Data structures</option>
      </select>
      <div id="menu-timer" style="text-align: center; color: #001e4d; display: block;"></div>

      <button class="menu-btn" onclick="startQuiz()">Start Quiz</button>
      <br>

      <!-- Add this button where you want to trigger seeAnswers -->

      <br>
      <button style="height: 30px;width: 80px;font-size:medium;" class="buttonraa" onclick="logOutraababu()">Back</button>
      <!-- Additional menu content goes here -->
    </div>
    <!-- Quiz section -->
    <div class="quiz" id="quiz" style="display: none;">
      <h2 id="question">Question goes here</h2>
      <div id="answer-buttons"></div>
      <button id="next-btn">Next</button>
      <button id="back-btn">Back</button>
    </div>
  </div>
  <script>
    function logOutraababu() {
        // Get the roll number from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const rollno = urlParams.get('rollno');

        // Redirect to home.php with the rollno as a parameter
        window.location.href = `../home.php?rollno=${rollno}`;
    }
</script>

  <script src="script.js"></script>
  <script src="ITsub.js"></script>
  <script src="seeans.js"></script>

</body>
</html>
