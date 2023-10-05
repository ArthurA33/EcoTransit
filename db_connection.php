<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "ecotransit";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}


?>