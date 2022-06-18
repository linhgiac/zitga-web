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
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);
        if (is_null($obj) == false) {
            $u = $obj->username;
            $p = $obj->password;
            $jwt = $this->loginModel->checkLogin($u, $p);
            return $this->view('frontend.logins.check', ['jwt' => $jwt]);
        } else {
            return $this->view('frontend.logins.check', ['jwt' => 'Null data']);
        }
    }

}


?>