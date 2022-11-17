<?php 

$server= "localhost";
$user= "root";
$password= "";
$database= "classDB";

$conn = mysqli_connect($server,$user, $password,$database) or die("Fail to connect");
$query = "Select * from Student";

$result = mysqli_query($conn,$query) or die("Data does not exists");


$fetch = mysqli_fetch_all($result);
//var_dump($result);

mysqli_close($conn);
echo json_encode($fetch);




?>