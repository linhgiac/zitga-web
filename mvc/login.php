<?php
    // $u = $_POST['username'];
    // $p = $_POST['password'];

    // $db = mysqli_connect("localhost", "root", "", "tllt");

    // $sql = "select * from user where username='$u' and password='$p'";

    // $rs = mysqli_query($db, $sql);

    // if(mysqli_num_rows($rs) > 0){
    //     echo "Dang nhap thanh cong";
    // }
    // else{
    //     echo "That bai";

    //     require_once 'login.html';
    // }
        ##########################################
    require './Core/Database.php';
    require './Models/BaseModel.php';
    class Login extends BaseModel
    {
        protected $u, $p;

        public function __construct()
        {
            $this->u = $_POST['username'];
            $this->p = $_POST['password'];
        }

        public function check()
        {
            $sql = "select * from user where username='$this->u' and password='$this->p'";

            $db = mysqli_connect("localhost", "root", "", "tllt");

            $rs = mysqli_query($db, $sql);

            if(mysqli_num_rows($rs) > 0){
                echo "Dang nhap thanh cong";
                $_SESSION['username'] = $this->u;
                header('location:admin.php');
            }
            else{
                echo "That bai";

                // require_once 'login.html';
            }
        }
    }

    session_start();

    if (isset($_POST['dangnhap'])){
        $login = new Login();
        $login->check();
    }


?>

<form action="login.php" method = "post">
    <label for="">Username</label>
    <input type="text" class="form-control" id="" placeholder="Input username" name="username">
    <label for="">Password</label>
    <input type="password" class="form-control" id="" placeholder="Input password" name="password">
    <button type="submit" name="dangnhap">Sign in</button>
</form>