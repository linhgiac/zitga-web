<?php

class ProductModel
{
    const TABLE = 'products';

    public function getAll()
    {
        return [
            [
                'id' => 1,
                'name' => 'GTA',
            ],
            [
                'id' => 2,
                'name' => 'Left4Dead',
            ],
            [
                'id' => 3,
                'name' => 'PES',
            ],
        ];
    }

    public function findById($id)
    {
        return [
            'id' => 1,
            'name' => 'GTA',
        ];
    }

    public function delete()
    {
        return __METHOD__;
    }
}