<?php

class RecruitmentController extends BaseController
{
    private $recruitmentModel;

    public function __construct()
    {
        $this->loadModel('RecruitmentModel');
        $this->recruitmentModel = new RecruitmentModel;
    }

    public function index()
    {
        $selectColumns = ['id', 'title'];

        $orders = [
            'column' => 'id',
            'order' => 'desc',
        ];

        $recruitments = $this->recruitmentModel->getAll(
            $selectColumns,
            $orders   
        );

        return $this->view('frontend.recruitments.index', [
            'pageTitle' => 'News list',
            'recruitments' => $recruitments,
        ]);
    }

    public function store()
    {
        $data = [
            'id' => 3,
            'title' => 'sdfsdfgsdf',
            'description' => 'afdvsdfsdfsdfsesdfdsfsdf',
            'image' => 'vidf'
        ];

        $this->recruitmentModel->store($data);
    }

    public function update()
    {
        $id = $_GET['id'];

        $data = [
            'title' => 'updated title recruitment'
        ];

        $this->recruitmentModel->updateData($id, $data);
    }

    public function delete()
    {
        $id = $_GET['id'];

        $this->recruitmentModel->destroy($id);
        echo 'Xóa thành công ! :)))))';
    }

    public function find()
    {
        $id = $_GET['id'];
        $result = $this->recruitmentModel->findById($id);
        print_r($result);
    }
}