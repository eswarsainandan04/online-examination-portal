<?php
    // Database credentials
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "mydb3";

    // Create a database connection
    $con = mysqli_connect($host, $username, $password, $database);

    // Get the question and subject name from the URL
    $id = (int)$_GET['id'];  // Ensure $id is an integer
    $subname = urldecode($_GET['subname']);

    // Check if the connection was successful
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Prepare the delete query
    $query = "DELETE FROM `$subname` WHERE id = $id"; // Ensure $subname and $id are properly used

    // Execute the delete query
    if (mysqli_query($con, $query)) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($con);
    }

    // Close connection
    mysqli_close($con);

    // Redirect back to the main page
    header("Location: retrieve_mcqs.php?subname=" . urlencode($subname));
    exit;
?>
