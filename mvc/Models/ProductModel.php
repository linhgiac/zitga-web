<?php

class ProductModel extends BaseModel
{
    const TABLE = 'game';

    public function getAll($select = ['*'], $orderBy = [], $limit = 15)
    {
        return $this->all(self::TABLE, $select, $orderBy, $limit);
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