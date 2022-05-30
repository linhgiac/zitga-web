<?php

class AboutusController extends BaseController
{
    public function index()
    {
        return $this->view('frontend.aboutuss.index');
    }
    public function show()
    {
        echo __METHOD__;
    }
}