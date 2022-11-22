<?php 

include 'conn.php';

$id = $_POST['id'];

$query = "SELECT * FROM Pokemon WHERE ID = $id";

$res = mysqli_query($conn,$query);
if ($res-> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>