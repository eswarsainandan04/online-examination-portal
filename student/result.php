<?php
session_start();
include("db.php");

// Retrieve the roll number from the URL and sanitize it
$rollno = $_GET['rollno'];

$query = "SELECT subject, score FROM score WHERE rollno = '$rollno'";
$result = mysqli_query($con, $query);

// Check if any results were found
if (mysqli_num_rows($result) > 0) {
    $results = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $results[] = $row;
    }
} else {
    $error = "No results found for Roll Number: $rollno";
}
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
        table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px auto;
            text-align: left;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
        }

        th {
            background-color: #001e4d;
            color: white;
        }

        h2 {
            margin-left:85px;
            color: #001e4d;
        }

        .error-message {
            color: red;
            font-size: 18px;
        }
        .parent-container {
            display: flex;
            justify-content: center; /* Center horizontally */
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
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 10px;
        }
        
        .custom-button:hover {
            background-color: #210c9b;
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
    <?php if (isset($results) && count($results) > 0): ?>
            <br><br><br>
            <h2><span style="font-family:Arial black;">Roll Number:</span> <?php echo htmlspecialchars($rollno); ?></h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($results as $result): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($result['subject']); ?></td>
                            <td><?php echo htmlspecialchars($result['score']); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p class="error-message"><?php echo $error; ?></p>
        <?php endif; ?>
        <div class="parent-container">
        <button class="custom-button" onclick="home()">back</button>
        </div>
  </div>  
    
    <script>
      function home() {
            // Get the roll number from the URL
          const urlParams = new URLSearchParams(window.location.search);
          const rollno = urlParams.get('rollno');

          window.location = `home.php?rollno=${rollno}`;
      }
    </script>
</body>
</html>
