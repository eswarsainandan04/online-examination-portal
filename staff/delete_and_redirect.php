<?php
include("db.php"); // Include your database connection file

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["create_new"])) {
    // Perform deletion of data from the tables
    $delete_query = "DELETE FROM myscore; DELETE FROM subject; DELETE FROM namesub;";
    
    if (mysqli_multi_query($con, $delete_query)) {
        // Redirect to staffsub.php after deletion
        header("Location: staffsub.php");
        exit; // Stop further execution
    } else {
        // Handle deletion error
        echo "Error deleting data: " . mysqli_error($con);
    }
} else {
    // Redirect user to an error page or homepage if accessed directly
    header("Location: error.php");
    exit; // Stop further execution
}
?>
