<?php

class CommentController extends BaseController
{
    private $commentModel;

    public function __construct()
    {
        $this->loadModel('CommentModel');
        $this->commentModel = new CommentModel;
    }

    // get all comments of a news with given its ID
    public function index()
    {
        // $selectColumns = ['*'];

        // $orders = [
        //     'column' => 'id',
        //     'order' => 'desc',
        // ];

        // $comments = $this->commentModel->getAll(
        //     $selectColumns,
        //     $orders   
        // );
        // return $this->view('frontend.comments.index', [
        //     'comments' => $comments,
        // ]);
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = [$obj->news_id];

        $comments = $this->commentModel->findById($id);
        return $this->view('frontend.comments.index', [
            'comments' => $comments,
        ]);
    }

    // put (insert) a comment into the database
    public function store()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);
        
        $data = [
            'id' => $obj->id,
            'news_id' => $obj->news_id,
            'user_id' => $obj->user_id,
            'content' => $obj->content
        ];
        
        $this->commentModel->store($data);
        return $this->view('frontend.comments.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // update a comment with its id and a news_id from the database
    public function update()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = [$obj->id, $obj->news_id];
        $data = [
            'id' => $obj->id,
            'news_id' => $obj->news_id,
            'user_id' => $obj->user_id,
            'content' => $obj->content
        ];

        $this->commentModel->updateData($id, $data);
        return $this->view('frontend.comments.confirm', [
            'confirm' => ['success' => true],
        ]);
    }

    // delete a comment with its id and a news_id from the database
    public function delete()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = [$obj->id, $obj->news_id];

        $this->commentModel->destroy($id);
        return $this->view('frontend.comments.confirm', [
            'confirm' => ['success' => true]
        ]);
    }
    
    public function show()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = [$obj->news_id];

        $result = $this->commentModel->findById($id);
        return $this->view('frontend.comments.show', [
            'data' => [$result]
        ]);
    }
}