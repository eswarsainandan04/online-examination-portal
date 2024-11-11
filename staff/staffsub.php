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
        echo "Subname added successfully!<br>";

        // Create a new table using the user input as the table name
        $table_name = mysqli_real_escape_string($con, $subname); // Escape table name
        $sql_create_data = "CREATE TABLE IF NOT EXISTS `$table_name` (
            question VARCHAR(500),
            optionA VARCHAR(400),
            optionB VARCHAR(400),
            optionC VARCHAR(400),
            optionD VARCHAR(400),
            answer VARCHAR(50)
        )";

        if (mysqli_query($con, $sql_create_data)) {
            echo "Table '$table_name' created successfully!<br>";
        } else {
            echo "Error creating table: " . mysqli_error($con);
        }
    } else {
        echo "Error: " . mysqli_error($con);
    }
}

// Check if the delete button was clicked
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete_subject'])) {
    $subname_to_delete = mysqli_real_escape_string($con, $_POST['subname_to_delete']);

    // Delete from namesub table
    $sql_delete_row = "DELETE FROM namesub WHERE subname = '$subname_to_delete'";
    if (mysqli_query($con, $sql_delete_row)) {
        // Drop the corresponding subject table
        $sql_drop_table = "DROP TABLE IF EXISTS `$subname_to_delete`";
        if (mysqli_query($con, $sql_drop_table)) {
            echo "Subject '$subname_to_delete' and its table deleted successfully!<br>";
        } else {
            echo "Error deleting table: " . mysqli_error($con);
        }
    } else {
        echo "Error deleting subject: " . mysqli_error($con);
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
    <title>User Input Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            border: none;
            background-color: #5cb85c;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4cae4c;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .action-button {
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .edit-button {
            background-color: #007bff;
            color: white;
        }
        .delete-button {
            background-color: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Enter Subname</h1>
    <form action="" method="POST">
        <label for="subname">Subname:</label>
        <input type="text" id="subname" name="subname" required>
        <button type="submit" name="add_subject">Submit</button>
    </form>

    <h2>Subjects</h2>
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
                    <button class="action-button edit-button">Edit</button>
                </td>
                <td>
                    <form action="" method="POST" style="display:inline;">
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
</body>
</html>
