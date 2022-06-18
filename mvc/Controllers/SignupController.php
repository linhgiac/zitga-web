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
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);
        if (is_null($obj) == false) {
            $u = $obj->username;
            $p = $obj->password;
            $rp = $obj->repassword;
            $n = $obj->name;
            $e = $obj->email;
            $result = $this->signupModel->checkSignup($u, $p, $rp, $n, $e);
            return $this->view('frontend.signups.check', ['result' => $result]);
        }
    }

}


?>