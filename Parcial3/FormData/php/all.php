<?php 

include 'conn.php';

$query = "SELECT ID,Name,picUrl FROM Pokemon";

$res = mysqli_query($conn,$query);
if ($res-> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>