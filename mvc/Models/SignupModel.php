<?php

class SignupModel extends BaseModel
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

    public function checkSignup($u, $p, $rp, $n, $e)
    {
        return $this->checkS(self::TABLE, $u, $p, $rp, $n, $e);
    }
}