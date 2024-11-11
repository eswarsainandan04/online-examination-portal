<?php
session_start();
include("db.php");

$subname = urldecode($_GET['subname']); // Use urldecode to decode any URL-encoded characters

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $question_text = $_POST['question_text'];
    $optionA = $_POST['optionA'];
    $optionB = $_POST['optionB'];
    $optionC = $_POST['optionC'];
    $optionD = $_POST['optionD'];
    $answer = $_POST['answer'];

    // Handle file upload
    $question_image = null; // Variable to hold image data

    if (isset($_FILES['question_image']) && $_FILES['question_image']['error'] == UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['question_image']['tmp_name'];
        $fileName = $_FILES['question_image']['name'];
        $fileSize = $_FILES['question_image']['size'];
        $fileType = $_FILES['question_image']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        // Allow certain file formats
        $allowedfileExtensions = ['jpg', 'gif', 'png', 'jpeg'];
        if (in_array($fileExtension, $allowedfileExtensions)) {
            $question_image = file_get_contents($fileTmpPath); // Get image data
        } else {
            echo "<script type='text/javascript'> alert('Upload failed. Allowed formats: jpg, gif, png, jpeg.')</script>";
            exit;
        }
    }

    // Basic validation
    if (empty($question_text) && is_null($question_image)) {
        echo "<script type='text/javascript'> alert('Please provide either question text or upload an image.')</script>";
    } else {
        // Prepare the query
        $query = "INSERT INTO `$subname` (question, optionA, optionB, optionC, optionD, answer) VALUES (?, ?, ?, ?, ?, ?)";
        
        // Prepare the statement
        $stmt = mysqli_prepare($con, $query);
        
        // Bind parameters
        mysqli_stmt_bind_param($stmt, 'ssssss', $question, $optionA, $optionB, $optionC, $optionD, $answer);

        // Determine which data to insert: text or image
        if (!empty($question_text)) {
            $question = $question_text; // Use text from textarea
        } else {
            $question = $question_image; // Use image binary data
        }

        // Execute the statement
        if (mysqli_stmt_execute($stmt)) {
            header("Location: staff.php?subname=$subname");
            exit;
        } else {
            echo "<script type='text/javascript'> alert('Error: Unable to insert record')</script>";
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    }
}
$countQuery = "SELECT COUNT(*) AS total_mcqs FROM `$subname`";
$countResult = mysqli_query($con, $countQuery);

if ($countResult) {
    $countRow = mysqli_fetch_assoc($countResult);
    $totalMcqs = $countRow['total_mcqs'];
} else {
    $totalMcqs = 0; // Default to 0 if the query fails
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
        .men-btn {
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
    </style>
</head>

<body>
    <div class="app">
        <h1>
            <img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
            <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br>
                <span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span>
                <span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span>
            </span>
        </h1>
        <div class="container">
            <h2><span style="font-family:elephant;">Enter Question Details</span></h2><br><br>

            <form method="POST" enctype="multipart/form-data">
                <label for="subject"><span style="font-size:large;font-family:'Arial black';">Subject:</span> <?php echo $subname; ?></label><br>
                <label for="subject"><span style="font-size:large;font-family:'Arial black';">No of MCQs:</span> <?php echo $totalMcqs; ?></label><br><br>
                <br><br>

                <label for="question">Question (Text or Upload Image):</label>
                <textarea type="text" id="question" name="question_text" rows="4" cols="50"></textarea><br>
                <label for="question_image">Upload Image:</label>
                <input type="file" id="question_image" name="question_image" accept="image/*"><br><br>

                <label for="optionA">Option A:</label>
                <input type="text" id="optionA" name="optionA" required><br>

                <label for="optionB">Option B:</label>
                <input type="text" id="optionB" name="optionB" required><br>

                <label for="optionC">Option C:</label>
                <input type="text" id="optionC" name="optionC" required><br>

                <label for="optionD">Option D:</label>
                <input type="text" id="optionD" name="optionD" required><br>

                <label for="answer">Correct Answer:</label>
                <select id="answer" name="answer" required>
                    <option value="none"></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select><br>

                <button type="submit">Submit</button><br>
            </form>
            <form action="retrieve_mcqs.php?subname=<?php echo urlencode($subname); ?>" method="post">
                <button type="submit">See MCQs</button>
            </form>
            <br>
            <br>
            <form action="results.php?subname=<?php echo urlencode($subname); ?>" method="post">
                <button type="submit">Student Results</button><br>
            </form>
            <br>
            <button class="men-btn" onclick="backPage()">Back</button>
        </div>
    </div>
    <script>
        function backPage() {
            window.location = "workout1.php";
        }
    </script>
</body>

</html>
