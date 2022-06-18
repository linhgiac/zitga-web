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
        while ($row = mysqli_fetch_assoc($query)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function find($table, $id)
    {
        // handle for comment relation
        if (is_array($id)) {
            $sql = "SELECT * FROM ${table} WHERE news_id = {$id[0]}";
            $query = $this->_query($sql);

            $data = [];
            while ($row = mysqli_fetch_assoc($query)) {
                array_push($data, $row);
            }

            return $data;
        }
        else {
            $sql = "SELECT * FROM ${table} WHERE id = ${id}";
            $query = $this->_query($sql);
            return mysqli_fetch_assoc($query);
        }
    }

    public function create($table, $data = [])
    {
        $columns = implode(',', array_keys($data));
        
        // don't need to handle with numeric type attribute in the database
        // must to handle escape character
        $newValues = array_map(function($value) {
            return "'" . mysqli_real_escape_string($this->connect, $value) . "'";
        }, array_values($data));
        
        $newValues = implode(',', $newValues);

        $sql = "INSERT INTO ${table}(${columns}) VALUES(${newValues})";

        $this->_query($sql);
        return mysqli_error($this->connect);

    }

    public function update($table, $id, $data)
    {
        $dataSets = [];

        foreach($data as $key => $val) {
            array_push($dataSets, "${key} = '" . mysqli_real_escape_string($this->connect, $val) . "'");
        }

        $dataSetString = implode(',', $dataSets);
        
        // update for comment relation
        if (is_array($id)) {
            $sql = "UPDATE ${table} SET ${dataSetString} WHERE id = {$id[0]} AND news_id = {$id[1]}";
        } else {
            $sql = "UPDATE ${table} SET ${dataSetString} WHERE id = ${id}";
        }

        $this->_query($sql);
    }

    public function delete($table, $id)
    {
        // delete for comment relation
        if (is_array($id)) {
            $sql = "DELETE FROM ${table} WHERE id = {$id[0]} AND news_id = {$id[1]}";
        } else {
            $sql = "DELETE FROM ${table} WHERE id = ${id}";
        }

        $this->_query($sql);
    }

    public function search($table, $keyword)
    {
        $pattern = "%${keyword}%";
        if ($table === "news") {
            $sql = "SELECT * FROM ${table} WHERE title LIKE '${pattern}' OR content LIKE '${pattern}'";
        } else { // $table === "recruitment"
            $sql = "SELECT * FROM ${table} WHERE title LIKE '${pattern}' OR content LIKE '${pattern}' OR category LIKE '${pattern}'";
        }
        $query = $this->_query($sql);

        $data = [];
        while ($row = mysqli_fetch_assoc($query)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function filter($table, $category)
    {
        $sql = "SELECT * FROM ${table} WHERE category = '${category}'";
        $query = $this->_query($sql);

        $data = [];
        while ($row = mysqli_fetch_assoc($query)) {
            array_push($data, $row);
        }

        return $data;
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