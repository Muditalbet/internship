<?php
   include('php/Config.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   
   $ses_sql = mysqli_query($db,"SELECT * from userdetails WHERE Uname like binary '$user_check' or email like '$user_check' ") or die("Error: " . mysqli_error($db));
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['Name'];
   
   if(!isset($_SESSION['login_user'])){
      header("location: ./login.php");
      die();
   }
?>