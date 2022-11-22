<?php 

include 'conn.php';

$id = $_POST['id'];
$name = $_POST['name'];
$type1 = $_POST['type1'];
$type2 = $_POST['type2'];
$region = $_POST['region'];
$pic = $_POST['pic'];

$query = "INSERT INTO Pokemon(ID,Name,Region,type1,type2,picUrl) values (
    '$id','$name','$region','$type1',
    '$type2',
    '$pic'
)";

if (mysqli_query($conn,$query)) {
    echo json_encode("Inserted values");
}

?>