<?php

class NewsController extends BaseController
{
    private $newsModel;

    public function __construct()
    {
        $this->loadModel('NewsModel');
        $this->newsModel = new NewsModel;
    }

    public function index()
    {
        $selectColumns = ['id', 'title'];

        $orders = [
            'column' => 'id',
            'order' => 'desc',
        ];

        $newsList = $this->newsModel->getAll(
            $selectColumns,
            $orders   
        );

        return $this->view('frontend.news.index', [
            'pageTitle' => 'News list',
            'newsList' => $newsList,
        ]);
        // echo json_encode($newsList);
    }

    public function store()
    {
        $data = [
            'id' => 3,
            'title' => 'sdfsdfgsdf',
            'content' => 'afdvsdfsdfsdfsesdfdsfsdf',
            'image' => 'vidf'
        ];

        $this->newsModel->store($data);
    }

    public function update()
    {
        $id = $_GET['id'];

        $data = [
            'title' => 'updated title yeohyedfg'
        ];

        $this->newsModel->updateData($id, $data);
    }

    public function delete()
    {
        $id = $_GET['id'];

        $this->newsModel->destroy($id);
        echo 'Xóa thành công ! :)))))';
    }

    public function show()
    {
        $id = $_GET['id'];
        $result = $this->newsModel->findById($id);
        print_r($result);
    }
}