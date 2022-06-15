<?php

class LoginModel extends BaseModel
{
    const TABLE = 'user';

    public function getAll($select = ['*'], $orderBy = [], $limit = 15)
    {
        return $this->all(self::TABLE, $select, $orderBy, $limit);
    }

    public function findById($id)
    {
        return $this->find(self::TABLE, $id);
    }

    public function store($data)
    {
        $this->create(self::TABLE, $data);
    }

    public function updateData($id, $data)
    {
        $this->update(self::TABLE, $id, $data);
    }

    public function destroy($id)
    {
        return $this->delete(self::TABLE, $id);
    }

    public function checkLogin($u, $p)
    {
        return $this->check(self::TABLE, $u, $p);
    }
}