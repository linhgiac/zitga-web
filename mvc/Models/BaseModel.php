<?php

class BaseModel extends Database 
{
    protected $connect;

    public function __construct()
    {
        $this->connect = $this->connect();
    }

    public function all($table, $select = ['*'], $orderBys = [], $limit = 15)
    {
        $columns = implode(',', $select);

        $orderByString = implode(' ', $orderBys);

        if ($orderByString) {
            $sql = "SELECT ${columns} FROM ${table} ORDER BY ${orderByString} LIMIT ${limit}";
        } else {
            $sql = "SELECT ${columns} FROM ${table} LIMIT ${limit}";
        }

        $query = $this->_query($sql);

        $data = [];

        while($row = mysqli_fetch_assoc($query)){
            array_push($data, $row);
        }
        return $data;
    }

    public function find($table, $id)
    {
        $sql = "SELECT * FROM ${table} WHERE id = ${id} LIMIT 1";
        $query = $this->_query($sql);
        mysqli_fetch_assoc($query);
    }

    public function create($table, $data = [])
    {
        $columns = implode(',', array_keys($data));

        $newValues= array_map(function($value) {
            return "'" . $value . "'";
        }, array_values($data));

        $newValues = implode(',', $newValues);

        $sql = "INSERT INTO ${table}(${columns}) VALUES(${newValues})";

        $this->_query($sql);

    }

    public function update($table, $id, $data)
    {
        $dataSets = [];

        foreach($data as $key => $val) {
            array_push($dataSets, "${key} = '". $val ."'");
        }

        $dataSetString = implode(',', $dataSets);

        $sql = "UPDATE ${table} SET ${dataSetString} WHERE id = ${id}";

        $this->_query($sql);
    }

    public function delete($table, $id)
    {
        $sql = "DELETE FROM ${table} WHERE id = ${id}";

        $this->_query($sql);
    }

    public function check($table, $u, $p) //checkLogin
    {
        $sql = "SELECT * FROM ${table} WHERE username = \"${u}\" and password = \"${p}\"";
        $result = mysqli_query($this->connect, $sql);
        if(mysqli_num_rows($result) > 0){
            // "Dang nhap thanh cong";
            // $_SESSION['username'] = $u;
            // header('location:admin.php');
            $data = [
                'username' => $u,
                'password' => $p
            ];
            echo $this->_encodeJWT($data);
        }
        else{
            header("HTTP/1.1 401 Unauthorized");
            exit;
        }
    }

    public function checkS($table, $u, $p, $rp, $n, $e) //check Signup
    {
        if($rp != $p) {
            echo json_encode(["success" => "false", "error" => "repassword <> password"]);
            exit;
        }

        $sql = "SELECT * FROM user WHERE username = '$u' OR email = '$e'";
        $result = mysqli_query($this->connect, $sql);
        if(mysqli_num_rows($result) > 0){
            echo json_encode(["success" => "false", "error" => "username or email existed"]);
        }
        else
        {
            $columns = "username, password, name, email";
            $newValues = "'$u', '$p', '$n', '$e'";
            $sql = "INSERT INTO ${table}(${columns}) VALUES(${newValues})";
            $this->_query($sql);
            echo json_encode(["success" => "true"]);
        }
    }

    private function _query($sql)
    {
        return mysqli_query($this->connect, $sql);
    }

    private function _encodeJWT($data)
    {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

        // Create token payload as a JSON string
        $payload = json_encode($data);

        // Encode Header to Base64Url String
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

        // Encode Payload to Base64Url String
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        // Create Signature Hash
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);

        // Encode Signature to Base64Url String
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        // Create JWT
        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        echo $jwt;
    }
}