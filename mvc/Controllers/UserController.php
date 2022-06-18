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
            'password' => $obj->password,
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
    
    // get a recruitment by its id
    public function show()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $result = $this->userModel->findById($id);
        return $this->view('frontend.recruitments.show', [
            'data' => [$result]
        ]);
    }

    // search by given keyword
    public function search()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $keyword = $obj->keyword;

        $result = $this->userModel->findByKey($keyword);
        return $this->view('frontend.news.show', [
            'data' => $result
        ]);
    }

    public function filter()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $category = $obj->category;

        $result = $this->userModel->filterByCategory($category);
        return $this->view('frontend.news.show', [
            'data' => $result
        ]);
    }
}