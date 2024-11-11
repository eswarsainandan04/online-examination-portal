<?php
 
   session_start();
   include("db.php");
   if($_SERVER['REQUEST_METHOD'] == "POST")
   {
      $name = $_POST['name'];
      $rollno = $_POST['rollno'];
      $branch = $_POST['branch'];
      $username = $_POST['username'];
      $password = $_POST['password'];
     
      if(!empty($username) && !empty($password) && !is_numeric($username))
      {
           $query = "insert into users (name,rollno,branch,username,password) values ('$name','$rollno','$branch','$username','$password')";
           
           mysqli_query($con, $query);
           
           echo "<script type='text/javascript'> alert('successfully registered')</script>";
           header("location: studentlogin.php");

      }
      else
      {
    
           echo "<script type='text/javascript'> alert('please enter valid information')</script>";

      }
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
       .app {
  background: #fff;
  width: 100%;
  max-width: 900px;
  margin: 100px auto 0;
  border-radius: 10px;
  padding: 30px;
}
      .left-align {
          text-align: left;
      }
      .form-group label {
          display: block;
          text-align: left;
        
      }
  </style>
</head>
<body>
<div class="app">
<h1><img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
      <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br><span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span><span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span></span></h1>
    <div class="container">
        <form method="POST">
            <h2><span style="color:black ;font-family:'Elephant';text-align:center"  >SIGN UP</span></h2>
            <br>
            <div class="form-group">
            <label for="name">Name:</label>
            </div>
            <input type="text" id="name" name="name" required>
            <div class="form-group">
            <label for="rollno">Roll Number:</label>
            </div>
            <input type="text" id="rollno" name="rollno" required>
            <div class="form-group">
            <label for="branch">Branch:</label>
            </div>
            <input type="text" id="branch" name="branch" required>
            <div class="form-group">
            <label for="username">Username:</label>
            </div>
            <input type="text" id="username" name="username" required>
            <div class="form-group">
            <label for="password">Password:</label>
            </div>
            <input type="password" id="password" name="password" required>
            <div class="form-group">
            <label for="showPasswordCheckbox"><span style="align-items:"><input type="checkbox" id="showPasswordCheckbox"><span style="font-size:small;"> Show Password</span> </label>
            </div>
            <br>
            <br>
            <button type="submit">Sign Up</button>
            <p id="error-message"></p>
        </form>
        <br>
        <p style="text-align: center;">Already have an account? <a href="studentlogin.php">Login</a></p>
    </div>
    <script>
        document.getElementById("showPasswordCheckbox").addEventListener("change", function() {
          var passwordField = document.getElementById("password");
          if (passwordField.type === "password") {
              passwordField.type = "text";
          } else {
              passwordField.type = "password";
          }
      });

    </script>
</body>
</html>
