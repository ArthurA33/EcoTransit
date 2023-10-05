<?php

include("db_connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["create_user"])) {
    $pseudo = $_POST["pseudo"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validation des données d'entrée ici (vous devez implémenter la validation selon vos besoins).

    // Insérer l'enregistrement de personne d'abord
    $sql = "INSERT INTO personne (pseudo_personne) VALUES ('$pseudo')";
    if ($conn->query($sql) === TRUE) {
        $personne_id = $conn->insert_id;

        // Ensuite, insérez l'enregistrement d'utilisateur en définissant Id_score à 0 par défaut
        $sql = "INSERT INTO utilisateur (email_utilisateur, mot_de_passe_utilisateur, Id_score, Id_personne) 
                VALUES ('$email', '$password', 0, $personne_id)";
        if ($conn->query($sql) === TRUE) {
            echo "Utilisateur créé avec succès.";
        } else {
            echo "Erreur lors de la création de l'utilisateur : " . $conn->error;
        }
    } else {
        echo "Erreur lors de la création de la personne : " . $conn->error;
    }
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
</head>
<body>
    <h2>Inscription</h2>
    <form method="POST" action="create.php">
        <label for="pseudo">Pseudo :</label>
        <input type="text" name="pseudo" id="pseudo" required><br>

        <label for="email">Email :</label>
        <input type="email" name="email" id="email" required><br>

        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" required><br>

        <input type="submit" name="create_user" value="Créer Utilisateur">
    </form>
</body>
</html>