<?php

class ProductModel extends BaseModel
{
    const TABLE = 'product';

    public function getAll($select = ['*'], $orderBy = [], $limit = 15)
    {
        return $this->all(self::TABLE, $select, $orderBy, $limit);
    }

    public function findById($id) // search
    {
        return $this->find(self::TABLE, $id);
    }

    public function store($data) // add
    {
        $this->create(self::TABLE, $data);
    }

    public function updateData($id, $data)
    {
        $this->update(self::TABLE, $id, $data);
    }

    public function destroy($id) // delete
    {
        return $this->delete(self::TABLE, $id);
    }
}