<?php
session_start();
include("db.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rollno = $_POST['roll'];
    $subject = $_POST['subject'];
    $score = $_POST['score'];

    // Debugging output
    echo "Roll No: $rollno, Subject: $subject, Score: $score<br>"; // Add this line

    // Prepare and bind
    $stmt = $con->prepare("INSERT INTO score (rollno, subject, score) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $rollno, $subject, $score);

    // Execute and check for success
    if ($stmt->execute()) {
        echo "Score submitted successfully.";
    } else {
        echo "Error submitting score: " . $stmt->error; // Add this line for error debugging
    }

    $stmt->close();
}

mysqli_close($con);
?>
