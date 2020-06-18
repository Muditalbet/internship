<?php
   include('./php/session.php');
?>
<html>
   
   <head>
      <title>Welcome </title>
      <link rel="stylesheet" href="welcome.css">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
   </head>
   
   <body>
      <h2 class="logout"><a href = "php/logout.php">Sign Out</a></h2>
      <h1 class="main">
         Thanks
         <span><?php echo $login_session; ?></span> 
         <br>For Registration
      </h1>
   </body>
   
</html>