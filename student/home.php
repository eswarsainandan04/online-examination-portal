<?php
session_start();
include("db.php");

// Retrieve the roll number from the URL and sanitize it
$rollno = $_GET['rollno'];

// Query to fetch student information from the database
$query = "SELECT name, rollno, branch FROM users WHERE rollno = '$rollno'";
$result = mysqli_query($con, $query);

// Fetch the data
$student = mysqli_fetch_assoc($result);
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
        .app {
            background: #fff;
            width: 100%;
            max-width: 900px;
            margin: 100px auto 0;
            border-radius: 10px;
            padding: 30px;
        }

        .stu-container {
            display: flex;
            justify-content: space-around; /* Space around buttons for better alignment */
            align-items: center;
            margin-top: 20px;
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
            border-radius: 4px;
            cursor: pointer;
            margin: 0 10px; /* Adjusted margin for better spacing */
        }

        .custom-button {
            background-color: #148ace;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 10px;
        }
        
        .custom-button:hover {
            background-color: #210c9b;
        }

        .table-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 30vh;
        }

        table {
            border-collapse: collapse;
            width: 800px;
            text-align: left;
        }

        table, th, td {
            border: 1px solid black;
            padding: 10px;
        }

        th {
            background-color: #001e4d;
            color: white;
        }

        h2 {
            text-align: center;
        }
        
    </style>
</head>
<body>
  <div class="app">
    <h1>
      <img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
      <span style="color: blue; font-family: 'Arial black';font-size:large;">
        Andhra Loyola Institute of Engineering and Technology<br>
        <span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">
          DEPARTMENT OF INFORMATION TECHNOLOGY<br>
        </span>
        <span style="color:black;font-family:'Times New Roman';font-size:large;">
          MOCK TEST
        </span>
      </span>
    </h1>

    <div class="container">
      <div class="table-container">
        <table>
          <tr>
            <th colspan="2" style="text-align: center;">
              Student Information
            </th>
          </tr>
          <tr>
            <td><span style="font-family:Arial black;">Name</span></td>
            <td><?php echo htmlspecialchars($student['name']); ?></td>
          </tr>
          <tr>
            <td><span style="font-family:Arial black;">Roll Number</span></td>
            <td><?php echo htmlspecialchars($student['rollno']); ?></td>
          </tr>
          <tr>
            <td><span style="font-family:Arial black;">Branch</span></td>
            <td><?php echo htmlspecialchars($student['branch']); ?></td>
          </tr>
          <tr>
            <td><span style="font-family:Arial black;">Course</span></td>
            <td>BTech</td>
          </tr>
        </table>
      </div>

      <br>
      <div class="stu-container">
        <img src="playquiz.png" class="stu" width="100" height="100" alt="Play Quiz">
        <img src="assign.jpg" class="stu" width="100" height="100" alt="Assignments">
      </div>

      <br>
      <div class="stu-container">
        <button class="menu-btn" onclick="playQuiz('<?php echo htmlspecialchars($rollno); ?>')">Play Quiz</button>
        <button class="menu-btn" onclick="Assign()">Assignment</button>
      </div>

      <br>
      <div class="stu-container">
        <img src="result.png" class="stu" width="100" height="100" alt="Results">
      </div>

      <br>
      <div class="stu-container">
        <button class="menu-btn" onclick="Result()">Result</button>
      </div>
      
      <br><br>
      <button class="custom-button" onclick="home()">Logout</button>
    </div>
    
    <script>
      function playQuiz(rollno) {
          // Use template literal to construct the URL
          window.location = `practice/practice.php?rollno=${rollno}`;
      }
      
      function Assign() {
          // Get the roll number from the URL
          const urlParams = new URLSearchParams(window.location.search);
          const rollno = urlParams.get('rollno');

          window.location = `assignment/showsub.php?rollno=${rollno}`;
      }

      function Result() {
          // Get the roll number from the URL
          const urlParams = new URLSearchParams(window.location.search);
          const rollno = urlParams.get('rollno');

          window.location = `result.php?rollno=${rollno}`;
      }

      function home() {
          window.location = "../main.html";
      }
    </script>
</body>
</html>
