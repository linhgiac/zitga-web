<?php

class SignupController extends BaseController
{
    private $signupModel;

    public function __construct()
    {
        $this->loadModel('SignupModel');
        $this->signupModel = new SignupModel;
    }

    public function check()
    {
        $u = $_GET['username'];
        $p = $_GET['password'];
        $rp = $_GET['repassword'];
        $n = $_GET['name'];
        $e = $_GET['email'];
        $result = $this->signupModel->checkSignup($u, $p, $rp, $n, $e);
        return $this->view('frontend.signups.check', ['result' => $result]);
    }

}


?>