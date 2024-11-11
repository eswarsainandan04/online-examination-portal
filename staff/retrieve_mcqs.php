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
        .mcqs-container {
            text-align: left;
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
        .del-btn {
    background-color: #ff4d4d; /* Red background */
    color: white; /* White text */
    font-weight: 500;
    width: 150px;
    border: none;
    padding: 10px;
    margin: 20px auto 0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.del-btn:hover {
    background-color: #cc0000; /* Darker red on hover */
}

.del-btn:active {
    background-color: #b30000; /* Even darker red when clicked */
    transform: scale(0.98); /* Slight button shrink effect */
}

    </style>
</head>
<body>
    <div class="app">
        <h1><img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
            <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br><span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span><span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span></span>
        </h1>
        <div class="container mcqs-container">
        <?php
    // Database credentials
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "mydb3";

    // Create a database connection
    $con = mysqli_connect($host, $username, $password, $database);

    // Get the subject name from the URL
    $subname = urldecode($_GET['subname']); 

    // Check if the connection was successful
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Retrieve MCQs from the database
    $query = "SELECT * FROM `$subname`";
    $result = mysqli_query($con, $query);

    if ($result) {
        // Check if there are any records
        if (mysqli_num_rows($result) > 0) {
            // Output data of each row
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<strong>Question:</strong> ";

                if (!empty($row["question"])) {
                    $finfo = finfo_open(FILEINFO_MIME_TYPE);
                    $mimeType = finfo_buffer($finfo, $row["question"]);
                    finfo_close($finfo);

                    // Check if the question data is an image
                    if (strpos($mimeType, 'image/') === 0) {
                        $base64Image = base64_encode($row["question"]);
                        echo '<br><br><img src="data:' . $mimeType . ';base64,' . $base64Image . '" alt="Question Image" width="300"><br>';
                    } else {
                        echo htmlspecialchars($row["question"]) . "<br>";
                    }
                } else {
                    echo "No question content available.<br>";
                }

                echo "A. " . htmlspecialchars($row["optionA"]) . "<br>";
                echo "B. " . htmlspecialchars($row["optionB"]) . "<br>";
                echo "C. " . htmlspecialchars($row["optionC"]) . "<br>";
                echo "D. " . htmlspecialchars($row["optionD"]) . "<br>";
                echo "<strong>Answer:</strong> " . htmlspecialchars($row["answer"]) . "<br><br>";

                // Add the Delete button
                echo '<button class="del-btn" onclick="deleteMCQ(' . $row["id"] . ', \'' . $subname . '\')">Delete</button><br><br>';

            }
        } else {
            echo "0 results";
        }
    } else {
        echo "Error: " . mysqli_error($con);
    }

    // Close the database connection
    mysqli_close($con);
?>

            <br>
            <br>
            <button class="menu-btn" onclick="backPage2()">Back to page</button>
        </div>
        <script>
            function deleteMCQ(id, subname) {
               if (confirm("Are you sure you want to delete this MCQ?")) {
                // Redirect to delete.php, passing the question id and subname
                window.location.href = `delete.php?id=${id}&subname=${subname}`;
               }
            }


            function backPage2() {
                // Get the subname from the URL
                const urlParams = new URLSearchParams(window.location.search);
                const subname = urlParams.get('subname');
                
                // Redirect back to staff.php
                window.location = `staff.php?subname=${subname}`;
            }
        </script>   
    </div>
</body>
</html>
