<?php
require_once 'dbConnex.php';

if (isset($_POST['distance']) && isset($_POST['co2'])) {
    try {
        // Obtenez une instance de la connexion à la base de données
        $conn = DBConnex::getInstance();

        $distance = $_POST["distance"];
        $co2 = $_POST["co2"];
        $currentDate = date("Y-m-d H:i:s");

        // Récupérer l'ID de l'utilisateur connecté à partir du cookie de session
        $user_id = $_COOKIE['sessionId'];
        echo $user_id;

        $sql_utilisateur = "SELECT Id_utilisateur, score_utilisateur FROM utilisateur WHERE Id_utilisateur = :user_id";
        $stmt_utilisateur = $conn->prepare($sql_utilisateur);
        $stmt_utilisateur->bindParam(':user_id', $user_id);
        $stmt_utilisateur->execute();

        if ($stmt_utilisateur->rowCount() > 0) {
            $row = $stmt_utilisateur->fetch(PDO::FETCH_ASSOC);
            $Id_utilisateur = $row['Id_utilisateur'];
            $score_utilisateur = $row['score_utilisateur'];

            $nouveau_score = $score_utilisateur + $co2;

            // Insérer l'enregistrement du trajet
            $sql_trajet = "INSERT INTO trajet (nbr_km_trajet, date_trajet, CO2_utiliser_trajet, Id_utilisateur) VALUES (:distance, :currentDate, :co2, :Id_utilisateur)";
            $stmt = $conn->prepare($sql_trajet);
            $stmt->bindParam(':distance', $distance);
            $stmt->bindParam(':currentDate', $currentDate);
            $stmt->bindParam(':co2', $co2);
            $stmt->bindParam(':Id_utilisateur', $Id_utilisateur);

            if ($stmt->execute()) {
                // Mettre à jour le score de l'utilisateur
                $sql_update_score = "UPDATE utilisateur SET score_utilisateur = :nouveau_score WHERE Id_utilisateur = :Id_utilisateur";
                $stmt = $conn->prepare($sql_update_score);
                $stmt->bindParam(':nouveau_score', $nouveau_score);
                $stmt->bindParam(':Id_utilisateur', $Id_utilisateur);

                if ($stmt->execute()) {
                    echo "succès";
                } else {
                    echo "échec1";
                }
            } else {
                echo "échec2";
            }
        } else {
            echo "échec3";
        }
    } catch (PDOException $e) {
        echo "Erreur de connexion à la base de données : " . $e->getMessage();
    }
}
?>