

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizMaster</title>
    <link rel="stylesheet" href="lnstyle.css">
    <style>
        /* Add any additional CSS styles here */
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
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 20px; /* Added space between tables */
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
        th {
            background-color:  #001e4d;
            color: white;
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
        .edit-btn, .delete-btn {
            background-color: #007bff; /* Edit button color */
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 5px; /* Space between buttons */
        }
        .delete-btn {
            background-color: #dc3545; /* Delete button color */
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
                <span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">
                    MOCK TEST
                </span>
            </span>
        </h1>

        <br><br>
        <h2>Student Results</h2>
        <br>
        <br>
        
        <!-- PHP code to fetch and display student results -->
        <?php
session_start();
include("db.php"); // Include your database connection file

// Sanitize and decode URL parameter
$subname = mysqli_real_escape_string($con, urldecode($_GET['subname']));

// Query to retrieve data from score table
$query = "SELECT rollno, score FROM score WHERE subject = '$subname'";
$result = mysqli_query($con, $query);

if (mysqli_num_rows($result) > 0) {
    echo "<table>";
    echo "<thead><tr><th>Roll Number</th><th>Score</th></tr></thead>";
    echo "<tbody>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr><td>".$row['rollno']."</td><td>".$row['score']."</td></tr>";
    }
    echo "</tbody></table>";
} else {
    echo "No results found.";
}

mysqli_close($con);
?>

        <br>
        <br>
        <button class="menu-btn" onclick="backPage()">Back to Page</button>

        <!-- Form to delete all records -->
    </div>
    <script>
        function backPage(){
            // Get the roll number from the URL
            const urlParams = new URLSearchParams(window.location.search);
            const subname = urlParams.get('subname');

            window.location = `staff.php?subname=${subname}`;
        }
    </script>    
</body>
</html>
