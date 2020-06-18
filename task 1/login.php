<?php
    include("php/Config.php");
    session_start();
    $error = '';
    if(isset($_SESSION['login_user'])){
        header("location:welcome.php");
        die();
     }
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $Uname = mysqli_real_escape_string($db,$_POST['Uname']);
        $Password = mysqli_real_escape_string($db,$_POST['Pass']);
        $sql = "SELECT * FROM userdetails WHERE ((Uname like binary '$Uname') or email like '$Uname')";
        $result = mysqli_query($db, $sql)or die("Error: " . mysqli_error($db));
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        //$active = $row['active'];

        $count = mysqli_num_rows($result);

        if($count == 1){
            $Password = md5($Password);
            if($row['Password'] == $Password){
                $_SESSION['login_user'] = $Uname;
                header("location: welcome.php");
            }
            else{
                $error="Your password is invalid";
            }

        }else{
            $error = "Your Login Name or Password is invalid";
        }

    }

?>


<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Sign Up form</title>
         <link rel="stylesheet" type="text/css" href="login.css">
    </head>
    <body class="body2">
        <div class="Back_Page">
                <button class="Back_Page_Button">
                    <a href="home.html"><img src="svg/less-than.svg" class="Back_Button_Svg"></a> 
                    <a href="home.html" class="Back_Button_Text">BACK</a>
                </button>
        </div>
        <div class="wrap">
            <form  method = 'POST' action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>' >
            	<div class="title">
            		<p>Login into Player</p>
            	</div>
                <div class="input_field1">
                    <input type="text" class="input" id="Username" placeholder="Email Address OR Username" name = 'Uname'>
                </div>
                <div class="input_field2">
                    <input type="password" class="input" id="Password" placeholder="Password" name = 'Pass'>
                </div>
                <div class="btnmain">    
                    <input type="submit" value = 'Login' class="btn" id="next">
                </div>
                <div class="message">
                    <?php echo $error ?>
                </div>
                <div class="footer">
                	<a class="Create" href="Create_Account.php"><p>CREATE AN ACCOUNT</p></a>
                </div>
            </form>
        </div>
    </body>
</html>
