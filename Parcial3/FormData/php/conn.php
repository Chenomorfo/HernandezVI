<?php

$conn = mysqli_connect("127.0.0.1:3310", "root", "");

if (!$conn) {
    die("Connection failed" . mysqli_connect_errno());
}

$dbCreate = "CREATE DATABASE IF NOT EXISTS PokedexDB";
mysqli_query($conn, $dbCreate);

mysqli_close($conn);
$conn = mysqli_connect("127.0.0.1:3310", "root", "","PokedexDB");

    $query = "CREATE TABLE IF NOT EXISTS Pokemon(
        ID int(11) NOT NULL,
        Name varchar(255) NOT NULL,
        Region varchar(50),
        type1 varchar(20),
        type2 varchar(20),
        picUrl TEXT
    )";

    mysqli_query($conn, $query);

    
?>