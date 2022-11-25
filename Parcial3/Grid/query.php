<?php 

$hostname = "127.0.0.1:3310";
$user = "root";
$psswd = "";
$database = "PokemonDB";



$conn = mysqli_connect($hostname,$user,$psswd,$database);

$getQuery = "SELECT * FROM pokemon";

$res = mysqli_query($conn,$getQuery);
if ($res-> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>