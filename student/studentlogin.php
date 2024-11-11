<?php
     session_start();
 
     include("db.php");
     if($_SERVER['REQUEST_METHOD'] == "POST")
     {
         $username = $_POST['username'];
         $password = $_POST['password'];
         if(!empty($username) && !empty($password) && !is_numeric($username))
         {   
            $query = "select * from users where username = '$username' limit 1";
            $result = mysqli_query($con, $query);

            if($result)
            {
              if($result && mysqli_num_rows($result) > 0)
              {
                  $user_data = mysqli_fetch_assoc($result);
                  if($user_data['password'] == $password)
                  {
                    $rollno = $user_data['rollno']; // Extract the roll number
                    header("Location: home.php?rollno=$rollno");
                    
                    die; // Stop further execution
                
                  
                  }

              }
            }
             echo "<script type='text/javascript'> alert('wrong username and password')</script>";
         }
         else{ 
         echo "<script type='text/javascript'> alert('wrong username and password')</script>";
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
      .form-group label {
          display: block;
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
    </style>
</head>
<body>
  <div class="app">
    <h1><img src="logo.jpg" alt="Quiz App Logo" class="logo" width="100" height="100">
      <span style="color: blue; font-family: 'Arial black';font-size:large;">Andhra Loyola Institute of Engineering and Technology<br><span style="color:rgb(159, 77, 29); font-family: 'Arial Black';font-size:medium;">DEPARTMENT OF INFORMATION TECHNOLOGY<br></span><span style="color:black;font-family:'Times New Roman';font-size:large;align-items:center;">MOCK TEST</span></span></h1>
    <div class="container">
    <form method="POST">
        <h2><span style="color:black ;font-family:'Elephant';text-align:center"  >STUDENT LOGIN</span></h2>
        <br>
        <br>
        <div class="form-group">
        <label for="username">Username:</label>
        </div>
        <input type="text" id="username" name="username" required>
        <br>
        <div class="form-group">
        <label for="password">Password:</label>
        </div>
        <input type="password" id="password" name="password" required>
        <div class="form-group">
        <label for="showPasswordCheckbox"><span style="align-items:"><input type="checkbox" id="showPasswordCheckbox"><span style="font-size:small;"> Show Password</span> </label>
        </div>
        <br>
        <br>
        <button type="submit">Login</button>
        <br>
        <br>
        <p>Don't have an account? <a href="studentsign.php">Sign up</a></p>
    </form>
    <br>
    <br>
        <button class="menu-btn" onclick="backPage()">Back to Main</button>
    </div>
    <script src="function/script.js"></script>
    <script>
      document.getElementById("showPasswordCheckbox").addEventListener("change", function() {
          var passwordField = document.getElementById("password");
          if (passwordField.type === "password") {
              passwordField.type = "text";
          } else {
              passwordField.type = "password";
          }
      });
      function backPage(){
        window.location = "../main.html";
      }
  </script>
</body>
</html>
