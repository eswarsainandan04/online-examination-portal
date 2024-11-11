<?php
session_start();
include("db.php");

// Retrieve the roll number from the URL and sanitize it
$rollno = $_GET['rollno'];

// Fetch the subject names from the 'namesub' table
$query = "SELECT subname FROM namesub";
$result = mysqli_query($con, $query);

if (!$result) {
    echo "Error fetching subjects: " . mysqli_error($con);
    exit;
}

// Check if there are any subjects
$subjectsExist = mysqli_num_rows($result) > 0;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizMaster</title>
    <link rel="stylesheet" href="lnstyle.css">
    <style>
        .app {
            background: #fff;
            width: 100%;
            max-width: 900px;
            margin: 100px auto 0;
            border-radius: 10px;
            padding: 30px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 15px;
            text-align: left;
        }
        th {
            background-color: #001e4d;
            color: white;
        }
        .start-test-btn {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
        }
        .start-test-btn:hover {
            background-color: #218838;
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
            display:flex;
            justify-content: center;
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
    <br><br><br>
    
    <h2>Available Exams</h2>
    <br>
    
    <?php if (!$subjectsExist): ?>
        <p>No subjects provided</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th colspan="2">Subjects</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Loop through each subject and create a table row
                while ($row = mysqli_fetch_assoc($result)) {
                    $subject = $row['subname'];
                    echo "<tr>";
                    echo "<td>{$subject}</td>";
                    echo "<td><a href='sample2.php?subname={$subject}&rollno={$rollno}' class='start-test-btn'>Start Test</a></td>";
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    <?php endif; ?>

    <br><br><br>
    <button class="menu-btn" onclick="back()">back</button>

  </div>

  <script>
    function back() {
        const urlParams = new URLSearchParams(window.location.search);
        const rollno = urlParams.get('rollno');
        window.location = `../home.php?rollno=${rollno}`;
    }
    function playQuiz(rollno) {
        window.location = `practice.php?rollno=${rollno}`;
    }

    function Assign() {
        const urlParams = new URLSearchParams(window.location.search);
        const rollno = urlParams.get('rollno');

        window.location = `sample2.php?rollno=${rollno}`;
    }
  </script>
</body>
</html>
