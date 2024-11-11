<?php
// Database connection
$con = mysqli_connect("localhost", "root", "", "mydb3") or die(mysqli_error($con));

// Create the namesub table if it doesn't exist
$sql_create_namesub = "CREATE TABLE IF NOT EXISTS namesub (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subname VARCHAR(255) NOT NULL
)";
mysqli_query($con, $sql_create_namesub);

// Check if form is submitted to add a new subject
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['add_subject'])) {
    $subname = mysqli_real_escape_string($con, $_POST['subname']);

    // Insert data into namesub table
    $sql_insert = "INSERT INTO namesub (subname) VALUES ('$subname')";
    if (mysqli_query($con, $sql_insert)) {


        // Create a new table using the user input as the table name
        $table_name = mysqli_real_escape_string($con, $subname); // Escape table name
        $sql_create_data = "CREATE TABLE IF NOT EXISTS `$table_name` (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question MEDIUMBLOB,
            optionA VARCHAR(400),
            optionB VARCHAR(400),
            optionC VARCHAR(400),
            optionD VARCHAR(400),
            answer VARCHAR(50)
        )";

        if (mysqli_query($con, $sql_create_data)) {
            // Success message as JavaScript alert for table creation
            echo "<script>alert('Subject \"$table_name\" created successfully!');</script>";
        } else {
            // Error message as JavaScript alert for table creation
            $error_message = mysqli_error($con);
            echo "<script>alert('Error creating subject: $error_message');</script>";
        }
    } else {
        // Error message as JavaScript alert for inserting subname
        $error_message = mysqli_error($con);
        echo "<script>alert('Error: $error_message');</script>";
    }
}

// Check if the delete button was clicked
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete_subject'])) {
    $subname_to_delete = mysqli_real_escape_string($con, $_POST['subname_to_delete']);

    // Delete from namesub table
    $sql_delete_row = "DELETE FROM namesub WHERE subname = '$subname_to_delete'";
    
    // Delete from score table where subject matches
    $sql_delete_score = "DELETE FROM score WHERE subject = '$subname_to_delete'";

    // First, delete from the score table
    if (mysqli_query($con, $sql_delete_score)) {
        // Then, delete from the namesub table
        if (mysqli_query($con, $sql_delete_row)) {
            // Drop the corresponding subject table
            $sql_drop_table = "DROP TABLE IF EXISTS `$subname_to_delete`";
            if (mysqli_query($con, $sql_drop_table)) {
                // Success message as JavaScript alert
                echo "<script>alert('Subject \"$subname_to_delete\" and its table, along with associated scores, deleted successfully!');</script>";
            } else {
                // Error message as JavaScript alert for table drop
                $error_message = mysqli_error($con);
                echo "<script>alert('Error deleting table: $error_message');</script>";
            }
        } else {
            // Error message as JavaScript alert for deleting subject from namesub table
            $error_message = mysqli_error($con);
            echo "<script>alert('Error deleting subject from namesub: $error_message');</script>";
        }
    } else {
        // Error message as JavaScript alert for deleting score
        $error_message = mysqli_error($con);
        echo "<script>alert('Error deleting scores: $error_message');</script>";
    }
}

// Retrieve all subjects from namesub table
$result = mysqli_query($con, "SELECT * FROM namesub");

// Close the database connection
mysqli_close($con);

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
       form {
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
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


label {
    margin-right: 10px;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
}

input[type="text"] {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

input[type="text"]:focus {
    border-color: blue;
    outline: none;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.3s;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: left;
    font-size: 1rem;
}

th {
    background-color: #001e4d;
    color: white;
    font-size: 1.1rem;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

td {
    background-color: #ffffff;
}

td:first-child {
    font-weight: bold;
    color: #333;
}

.action-button {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-size: 0.9rem;
}

.edit-button {
    background-color: #28a745;
    color: white;
}

.edit-button:hover {
    background-color: #218838;
    transform: scale(1.05);
}


.delete-form {
    display: inline-block; /* Allows the form to take only the necessary width */
    padding: 0; /* Removes any default padding */
    margin: 0; /* Removes any default margin */
    border: none; /* Removes any default border */
}



.delete-button {
    background-color: #dc3545 !important;
    color: white;
    border: none;
}

.delete-button:hover {
    background-color: #c82333;
    transform: scale(1.05);
}

/* Add hover effect to table rows */
table tr:hover td {
    background-color: #f1f1f1;
}

    </style>
</head>
<body>
  <div class="app">
    <h1>
      <img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
      <span style="color: blue; font-family: 'Arial black'; font-size: large;">Andhra Loyola Institute of Engineering and Technology<br>
        <span style="color: rgb(159, 77, 29); font-family: 'Arial Black'; font-size: medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span>
        <span style="color:black; font-family:'Times New Roman'; font-size: large; align-items: center;">MOCK TEST</span>
      </span>
    </h1>

    <form action="" method="POST">
        <label for="subname">Create Subject:</label>
        <input type="text" id="subname" name="subname" required>
        <button type="submit" name="add_subject">Add</button>
    </form>

    <table>
        <thead>
            <tr>
                <th colspan="3" style="text-align: center;">Subjects</th>
            </tr>
        </thead>
        <tbody>
    <?php if ($result && mysqli_num_rows($result) > 0): ?>
        <?php while ($row = mysqli_fetch_assoc($result)): ?>
            <tr>
                <td><?php echo htmlspecialchars($row['subname']); ?></td>
                <td>
                  <a href="staff.php?subname=<?php echo urlencode($row['subname']); ?>" class="action-button edit-button">Edit</a>
                </td>

                <td>
                    <form action="" method="POST" class="delete-form" onsubmit="return confirmDelete()" style="display:inline;">
                        <input type="hidden" name="subname_to_delete" value="<?php echo htmlspecialchars($row['subname']); ?>">
                        <button type="submit" class="action-button delete-button" name="delete_subject">Delete</button>
                    </form>
                </td>
            </tr>
        <?php endwhile; ?>
    <?php else: ?>
        <tr>
            <td colspan="3" style="text-align: center; font-style: italic;">No subjects found.</td>
        </tr>
    <?php endif; ?>
        </tbody>
    </table>
    <br>
    <br>
    <button type="button" class="men-btn" onclick="lnBack()">Back to Main</button>


    <script>
        function confirmDelete() {
            return confirm("Are you sure you want to delete the subject?");
        }
        function stuLog(){
            window.location = "studentlogin.php";
        }
        function lnBack(){
            window.location = "lnstaff.html";
        }
    </script>
</body>
</html>
