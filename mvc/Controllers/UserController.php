<?php

class UserController extends BaseController
{
    private $userModel;

    public function __construct()
    {
        $this->loadModel('UserModel');
        $this->userModel = new UserModel;
    }

    // get all of tuples of user relation in the database
    public function index()
    {
        $selectColumns = ['*'];

        $orders = [
            'column' => 'id',
            'order' => 'desc',
        ];

        $users = $this->userModel->getAll(
            $selectColumns,
            $orders   
        );
        return $this->view('frontend.users.index', [
            'users' => $users,
        ]);
    }

    // put (insert) a user into the database
    public function store()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $data = [
            'username' => $obj->username,
            'password' => $obj->password,
            'name' => $obj->name,
            'email' => $obj->email,
            'avatar' => $obj->avatar
        ];

        $this->userModel->store($data);
        return $this->view('frontend.users.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // update a user by its ID from the database
    public function update()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;
        $data = [
            'username' => $obj->username,
            'password' => hash("md5", $obj->password),
            'name' => $obj->name,
            'email' => $obj->email,
            'avatar' => $obj->avatar
        ];

        $this->userModel->updateData($id, $data);
        return $this->view('frontend.users.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // delete a user by its ID from the database
    public function delete()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $this->userModel->destroy($id);
        return $this->view('frontend.users.confirm', [
            'confirm' => ['success' => true]
        ]);
    }
    
    // get a user by its accessToken
    public function show()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        if (property_exists($obj, "token")) {
            $token = $obj->token;
            $data = json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', $token)[1]))));
        } else {
            $data = json_decode("{\"id\": {$obj->id}}");
        }

        $result = $this->userModel->findById($data->id);
        return $this->view('frontend.recruitments.show', [
            'data' => [$result]
        ]);
    }

    public function upload()
    {
        $response = array();
        $DIR = 'uploads/';

        if ($_FILES['image']) {
            $fileName = $_FILES["image"]["name"];
            $tempFileName = $_FILES["image"]["tmp_name"];
            $error = $_FILES["image"]["error"];

            if ($error > 0) {
                $response = array(
                    "success" => false,
                    "message" => "Error uploading the file!"
                );
            } else {
                $FILE_NAME = rand(10, 1000000) . "-" . $fileName;
                $UPLOAD_IMG_NAME = $DIR.strtolower($FILE_NAME);
                $UPLOAD_IMG_NAME = preg_replace('/\s+/', '-', $UPLOAD_IMG_NAME);
            
                if (move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME)) {
                    $response = array(
                        "success" => true,
                        "message" => "Image has uploaded",
                        "avatar" => dirname(dirname(__FILE__)) . '/' . $DIR . '/' . $UPLOAD_IMG_NAME
                    );
                } else {
                    $response = array(
                        "success" => false,
                        "message" => "Error occured"
                    );
                }
            }
        } else {
            $response = array(
                "success" => false,
                "message" => "File not found"
            );
        }
        return $this->view('frontend.users.confirm', [
            'confirm' => $response
        ]);
    }
}