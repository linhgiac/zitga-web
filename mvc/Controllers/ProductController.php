<?php

class ProductController extends BaseController
{
    private $productModel;

    public function __construct()
    {
        $this->loadModel('ProductModel');
        $this->productModel = new ProductModel;
    }

    public function index()
    {
        $selectColumns = ['id', 'name'];

        $orders = [
            'column' => 'id',
            'order' => 'desc',
        ];

        $products = $this->productModel->getAll(
            $selectColumns,
            $orders
        );

        return $this->view('frontend.products.index', [
            'pageTitle' => 'Game list',
            'products' => $products,
        ]);
    }
    public function show($id)
    {
        $product = $this->productModel->findById($id);
        return $this->view('frontend.products.show', [
            'product' => $product,
        ]);
    }
}