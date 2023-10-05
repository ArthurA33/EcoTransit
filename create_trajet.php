<?php 
include("db_connection.php");

/*echo 'recu en GET : ';
print_r($_GET);
echo 'recu en POST : ';
print_r($_POST);
die;/** */


if (isset($_POST['distance']) && isset($_POST['co2'])) {
    
    $distance = $_POST["distance"];
    $co2 = $_POST["co2"];
    $currentDate = date("Y-m-d H:i:s");
    $name_user = 'arthur'; // changer par l'utilisateur connecter

    $sql_utilisateur = "SELECT Id_utilisateur, score_utilisateur FROM utilisateur WHERE pseudo_personne = '$name_user'";
    $result_utilisateur = $conn->query($sql_utilisateur);
    if ($result_utilisateur->num_rows > 0) {
        $row = $result_utilisateur->fetch_assoc();
        $Id_utilisateur = $row['Id_utilisateur'];
        $score_utilisateur = $row['score_utilisateur'];

        $nouveau_score = $score_utilisateur + $co2;

        // Insérer l'enregistrement du trajet
        $sql_trajet = "INSERT INTO trajet (nbr_km_trajet, date_trajet, CO2_utiliser_trajet, Id_utilisateur) VALUES ('$distance', '$currentDate', '$co2', '$Id_utilisateur')";

        if ($conn->query($sql_trajet) === TRUE) {
            // Mettre à jour le score de l'utilisateur
            $sql_update_score = "UPDATE utilisateur SET score_utilisateur = '$nouveau_score' WHERE Id_utilisateur = '$Id_utilisateur'";
            
            if ($conn->query($sql_update_score) === TRUE) {
                echo "succes";
            } else {
                echo "echec1";
            }
        } else {
            echo "echec2";
        }
    } else {
        echo "echec3";
    }
}

?>