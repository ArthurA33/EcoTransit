<?php

require_once 'param.php';
require_once 'dbConnex.php'; // Ajout de l'inclusion de dbConnex.php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$db_conn = DBConnex::getInstance();
if ($db_conn === false) {
    die("Can't connect to DB");
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Requête SQL pour récupérer le hachage du mot de passe à partir de la base de données en fonction de l'email
        $sql = "SELECT mdp FROM utilisateur WHERE email_utilisateur = :email";

        $stmt = $db_conn->prepare($sql);
        $stmt->bindParam(":email", $email);

        if ($stmt->execute()) {
            $row = $stmt->fetch();
            // echo $row['mdp'];
            $hashedPasswordFromDatabase = $row['mdp'];

            if ($password == $hashedPasswordFromDatabase) {
                // Mot de passe valide
                echo "Success!";
                return true;
            } else {
                // Mot de passe incorrect
                echo "Mot de passe incorrect";
                return false;
            }
        } else {
            echo "Erreur de requête : " . print_r($stmt->errorInfo(), true); // Utilisation de print_r pour afficher les détails de l'erreur
            return false;
        }

        break;
}

?>