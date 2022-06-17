<?php

class LoginController extends BaseController
{
    private $loginModel;

    public function __construct()
    {
        $this->loadModel('LoginModel');
        $this->loginModel = new LoginModel;
    }

    // public function __construct()
    // {
    //     $this->u = $_POST['username'];
    //     $this->p = $_POST['password'];
    // }

    public function check()
    {
        $u = $_GET['username'];
        $p = $_GET['password'];
        $this->loginModel->checkLogin($u, $p);
    }

}


?>