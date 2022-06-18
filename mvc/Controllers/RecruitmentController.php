<?php

class RecruitmentController extends BaseController
{
    private $recruitmentModel;

    public function __construct()
    {
        $this->loadModel('RecruitmentModel');
        $this->recruitmentModel = new RecruitmentModel;
    }

    // get all of tuples of recruitment relation in the database
    public function index()
    {
        $selectColumns = ['*'];

        $orders = [
            'column' => 'id',
            'order' => 'desc',
        ];

        $recruitments = $this->recruitmentModel->getAll(
            $selectColumns,
            $orders   
        );
        return $this->view('frontend.recruitments.index', [
            'recruitments' => $recruitments,
        ]);
    }

    // put (insert) a recruitment into the database
    public function store()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);
        if (is_null($obj) == false) {
            $data = [
                'title' => $obj->title,
                'content' => $obj->content,
                'category' => $obj->category,
                'image' => $obj->image
            ];
    
            $err = $this->recruitmentModel->store($data);
            return $this->view('frontend.recruitments.confirm', [
                'confirm' => ['success' => true],
                'error' => ['error' => $err]
            ]);
        } else {
            return $this->view('frontend.recruitments.confirm', [
                'confirm' => ['success' => false],
                'error' => ['error' => 'Null data']
            ]);
        }
    }

    // update a recruitment by its ID from the database
    public function update()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);
        if (is_null($obj) == false) {
            $id = $obj->id;
            $data = [
                'title' => $obj->title,
                'content' => $obj->content,
                'category' => $obj->category,
                'image' => $obj->image
            ];
    
            $err = $this->recruitmentModel->updateData($id, $data);
            return $this->view('frontend.recruitments.confirm', [
                'confirm' => ['success' => true],
                'error' => ['error' => $err]
            ]);
        } else {
            return $this->view('frontend.recruitments.confirm', [
                'confirm' => ['success' => false],
                'error' => ['error' => 'Null data']
            ]);
        }
    }

    // delete a recruitment by its ID from the database
    public function delete()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $err = $this->recruitmentModel->destroy($id);
        return $this->view('frontend.recruitments.confirm', [
            'confirm' => ['success' => true],
            'error' => ['error' => $err]
        ]);
    }
    
    // get a recruitment by its id
    public function show()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $result = $this->recruitmentModel->findById($id);
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

        $result = $this->recruitmentModel->findByKey($keyword);
        return $this->view('frontend.news.show', [
            'data' => $result
        ]);
    }

    public function filter()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $category = $obj->category;

        $result = $this->recruitmentModel->filterByCategory($category);
        return $this->view('frontend.news.show', [
            'data' => $result
        ]);
    }
}