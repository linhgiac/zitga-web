<?php

class NewsController extends BaseController
{
    private $newsModel;

    public function __construct()
    {
        $this->loadModel('NewsModel');
        $this->newsModel = new NewsModel;
    }

    // get all of tuples of news relation in the database
    public function index()
    {
        $selectColumns = ['*'];

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

    // put (insert) a news into the database
    public function store()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $data = [
            'title' => $obj->title,
            'content' => $obj->content,
            'image' => $obj->image
        ];

        $err = $this->newsModel->store($data);
        return $this->view('frontend.news.confirm', [
            'confirm' => ['success' => true],
            'error' => ['error' => $err]
        ]);
    }

    // update a news by its ID from the database
    public function update()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;
        $data = [
            'title' => $obj->title,
            'content' => $obj->content,
            'image' => $obj->image
        ];

        $this->newsModel->updateData($id, $data);
        return $this->view('frontend.news.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // delete a news by its ID from the database
    public function delete()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $this->newsModel->destroy($id);
        return $this->view('frontend.news.confirm', [
            'confirm' => ['success' => true]
        ]);
    }
    
    // get a news by its id
    public function show()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $result = $this->newsModel->findById($id);
        return $this->view('frontend.news.show', [
            'data' => [$result]
        ]);
    }

    // search by given keyword
    public function search()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $keyword = $obj->keyword;

        $result = $this->newsModel->findByKey($keyword);
        return $this->view('frontend.news.show', [
            'data' => $result
        ]);
    }
}