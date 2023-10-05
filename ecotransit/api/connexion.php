<?php

require_once 'param.php';
require_once 'dbConnex.php'; 

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

session_start(); // Démarrez la session PHP

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
        $sql = "SELECT mdp, Id_utilisateur FROM utilisateur WHERE email_utilisateur = :email";

        $stmt = $db_conn->prepare($sql);
        $stmt->bindParam(":email", $email);

        if ($stmt->execute()) {
            $row = $stmt->fetch();
            $hashedPasswordFromDatabase = $row['mdp'];

            if ($password == $hashedPasswordFromDatabase) {
                // Mot de passe valide
                $_SESSION['user_id'] = $row['Id_utilisateur']; // Stockez l'ID de l'utilisateur dans la session
                echo json_encode(array('message' => 'Success', 'user_id' => $row['Id_utilisateur']));
            } else {
                // Mot de passe incorrect
                echo json_encode(array('message' => 'Mot de passe incorrect'));
            }
        } else {
            // Erreur de requête
            echo json_encode(array('message' => 'Erreur de requête : ' . print_r($stmt->errorInfo(), true)));
        }
        break;

    case "GET":
        // Obtenez le paramètre "user_id" de l'URL
        $userId = $_GET['user_id'];

        // Requête SQL pour récupérer les informations de l'utilisateur et de ses trajets en fonction de son ID
        $sql = "SELECT U.Id_utilisateur, U.pseudo_personne, U.email_utilisateur, U.num_utilisateur, U.score_utilisateur, T.Id_trajet, T.nbr_km_trajet, T.date_trajet, T.CO2_utiliser_trajet 
        FROM utilisateur AS U
        INNER JOIN trajet AS T ON U.Id_utilisateur = T.Id_utilisateur
        WHERE U.Id_utilisateur = :userId";

        $stmt = $db_conn->prepare($sql);
        $stmt->bindParam(":userId", $userId);

        if ($stmt->execute()) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($results)) {
                // Les données de l'utilisateur et de ses trajets ont été récupérées avec succès
                // Vous pouvez traiter les résultats ici, par exemple, les renvoyer en tant que réponse JSON
                echo json_encode($results);
            } else {
                // Aucun enregistrement trouvé pour cet utilisateur
                echo json_encode(array('message' => 'Aucun résultat trouvé pour cet utilisateur.'));
            }
        } else {
            // Erreur de requête
            echo json_encode(array('message' => 'Erreur de requête : ' . print_r($stmt->errorInfo(), true)));
        }

        break;
}
?>