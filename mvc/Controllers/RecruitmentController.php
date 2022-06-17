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

        $data = [
            'title' => $obj->title,
            'description' => $obj->description,
            'category' => $obj->category,
            'image' => $obj->image
        ];

        $this->recruitmentModel->store($data);
        return $this->view('frontend.recruitments.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // update a recruitment by its ID from the database
    public function update()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;
        $data = [
            'title' => $obj->title,
            'description' => $obj->description,
            'category' => $obj->category,
            'image' => $obj->image
        ];

        $this->recruitmentModel->updateData($id, $data);
        return $this->view('frontend.recruitments.confirm', [
            'confirm' => ['success' => true]
        ]);
    }

    // delete a recruitments by its ID from the database
    public function delete()
    {
        $detail = file_get_contents('php://input');
        $obj = json_decode($detail);

        $id = $obj->id;

        $this->recruitmentModel->destroy($id);
        return $this->view('frontend.recruitments.confirm', [
            'confirm' => ['success' => true]
        ]);
    }
    
    // get a recruitments by its id
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
}