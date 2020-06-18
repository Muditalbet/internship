<?php
    
    include("php/Config.php");
    session_start();
    $error='';
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = mysqli_real_escape_string($db,$_POST['name']);
        $Uname = mysqli_real_escape_string($db,$_POST['Uname']);
        $Email = mysqli_real_escape_string($db,$_POST['Email']);
        $Pnumber = mysqli_real_escape_string($db,$_POST['Pnumber']);
        $Pass = mysqli_real_escape_string($db,$_POST['pass']);
        $Con_pass = mysqli_real_escape_string($db,$_POST['Con_pass']);

        if($Pass != $Con_pass) {
            $error = "password does not match.";
        }
        else{
            $sql = "SELECT * FROM userdetails WHERE email = '$Email'";
            $result = mysqli_query($db, $sql);
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

            $count = mysqli_num_rows($result);

            if($count >= 1) {
                $error = "E-Mail already taken";
            }
            else{
                $test = mysqli_query($db, "SELECT Uname FROM userdetails WHERE Uname = '$Uname'");
                $count2 = mysqli_num_rows($test);
                if($count2 >= 1){
                    $error = "Username already taken";
                }else{
                    $Pass = md5($Pass);
                    $addRow = "insert into userdetails values('$name','$Uname','$Pnumber','$Email','$Pass')";
                    $result = mysqli_query($db, $addRow);
                    header("location: login.php");
                    die();
                }
            }
        }

    }

?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Create an Account</title>
        <link rel="stylesheet" href="Create_Account.css" type="text/css">
    </head>
    <body class="body2">
        <div class="Back_Page">
                <button class="Back_Page_Button">
                <a href="home.html"><img src="svg/less-than.svg" class="Back_Button_Svg"></a> 
                    <a href="home.html" class="Back_Button_Text">BACK</a>
                </button>
        </div>
        <div class="main">
            <form method="post" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>' >
                <div class="title">
                    Create Account
                </div>
                <div class="test">
                    <div class="input_field">
                        <input type="text" class="input" placeholder="Name" id="name" name="name">
                    </div>
                    <div class="input_field">
                        <input type="text" class="input" placeholder="Username" id="username" name="Uname">
                    </div>
                    <div class="input_field">
                        <input type="text" class="input" placeholder="E-mail" id="Email" name="Email">
                    </div>
                    <div class="input_field">
                        <input type="text" class="input" placeholder="Phone Number" id="Pnumber" name="Pnumber">
                    </div>
                    <div class="input_field">
                        <input type="password" class="input" placeholder="Password" id="Password" name="pass">
                    </div>
                    <div class="input_field">
                        <input type="password" class="input" placeholder="Confirm" id="Confirm_Password" name="Con_pass">
                    </div>
                </div>
                <div class="btnmain">
                    <input type="submit" class="btn" id="Create_Account" value = "Create Account">
                </div>
                <div class="message">
                    <?php echo $error ?>
                </div>
            </form>
        </div>
    </body>
</html>
