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
    case "GET":
        $email = $_POST['email'];

        // Requête SQL pour récupérer les données de l'utilisateur et de ses trajets en fonction de l'email
        // !! a voir pour utiliser l'id de l'utilisateur plutot 
        $sql = "SELECT U.Id_utilisateur, U.pseudo_personne, U.email_utilisateur, U.num_utilisateur, U.score_utilisateur, T.Id_trajet, T.nbr_km_trajet, T.date_trajet, T.CO2_utiliser_trajet 
        FROM utilisateur AS U
        INNER JOIN trajet AS T ON U.Id_utilisateur = T.Id_utilisateur
        WHERE U.email_utilisateur = :email";

        $stmt = $db_conn->prepare($sql);
        $stmt->bindParam(":email", $email);

        if ($stmt->execute()) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($results)) {
                // Les données de l'utilisateur et de ses trajets ont été récupérées avec succès
                // Vous pouvez traiter les résultats ici, par exemple, les renvoyer en tant que réponse JSON
                echo json_encode($results);
            } else {
                // Aucun enregistrement trouvé pour l'email spécifié
                echo "Aucun résultat trouvé pour cet email.";
            }
        } else {
            echo "Erreur de requête : " . print_r($stmt->errorInfo(), true); // Utilisation de print_r pour afficher les détails de l'erreur
        }

        break;
    default:
        // Méthode HTTP non supportée
        echo "Méthode HTTP non supportée.";
        break;
}
?>