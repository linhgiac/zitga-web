<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: *');

if($jwt == "Null data"){
    echo json_encode($jwt);
}
else {
    echo $jwt;
}
?>