<?php

class NewsController extends BaseController
{
    private $newsModel;

    public function __construct()
    {
        $this->loadModel('NewsModel');
        $this->newsModel = new NewsModel;
    }

    // get all of tuples of news relation in database
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
            'newsList' => $newsList,
        ]);
    }

    public function store()
    {
        $data = file_get_contents('php://input');

        print_r($data);

        // $this->newsModel->store($data);
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