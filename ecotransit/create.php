<?php

require_once "dbConnex.php";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["create_user"])) {
    $pseudo = $_POST["pseudo"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Validation des données d'entrée ici (vous devez implémenter la validation selon vos besoins).

    try {
        // Obtenez une instance de la connexion à la base de données
        $conn = DBConnex::getInstance();

        // Commencez une transaction
        $conn->beginTransaction();

        // Insérer l'enregistrement de personne d'abord
        $sql = "INSERT INTO personne (pseudo_personne) VALUES (:pseudo)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pseudo', $pseudo);
        if ($stmt->execute()) {
            $personne_id = $conn->lastInsertId();

            // Ensuite, insérez l'enregistrement d'utilisateur en définissant Id_score à 0 par défaut
            $sql = "INSERT INTO utilisateur (email_utilisateur, mot_de_passe_utilisateur, Id_score, Id_personne) 
                    VALUES (:email, :password, 0, :personne_id)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);
            $stmt->bindParam(':personne_id', $personne_id);

            if ($stmt->execute()) {
                // Validez la transaction
                $conn->commit();
                echo "Utilisateur créé avec succès.";
            } else {
                // Annulez la transaction en cas d'erreur
                $conn->rollBack();
                echo "Erreur lors de la création de l'utilisateur : " . $stmt->errorInfo()[2];
            }
        } else {
            // Annulez la transaction en cas d'erreur
            $conn->rollBack();
            echo "Erreur lors de la création de la personne : " . $stmt->errorInfo()[2];
        }
    } catch (PDOException $e) {
        echo "Erreur de connexion à la base de données : " . $e->getMessage();
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