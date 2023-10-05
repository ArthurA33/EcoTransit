<?php

require_once 'dbConnex.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$db_conn = DBConnex::getInstance();
if($db_conn===false){
    die("Can't connect to DB");
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    // case "GET":
    //     $allUser = $db_conn->query("SELECT * FROM utilisateur");
    //     if($allUser->rowCount() > 0){
    //         $json_array["userdata"] = array();
    //         while ($row = $allUser->fetch()) {
    //             $json_array["userdata"][] = array("id" => $row['Id_utilisateur'], 
    //                                                 "pseudo" => $row['pseudo_personne'],
    //                                                 "email" => $row['email_utilisateur'],
    //                                                 "telephone" => $row['num_utilisateur'],
    //                                                 "mdp" => $row['mdp'],
    //                                                 "score" => $row['score_utilisateur'],
    //                                                 "isAdmin" => $row['isAdmin'],);
    //         }

    //         echo json_encode($json_array["userdata"]);
    //         return;
    //     }
    //     else{
    //         echo json_encode(["result"=>"Check data"]);
    //     }
    // break;


    case "POST":
        $userPostData = json_decode(file_get_contents("php://input"));
    
        // Vérification des champs
        if (!isset($userPostData->email) || !isset($userPostData->password) || !isset($userPostData->verif_password)) {
            echo json_encode(["Error" => "Missing fields"]);
            return;
        }
    
        if ($userPostData->password !== $userPostData->verif_password) {
            echo json_encode(["Error" => "Passwords do not match"]);
            return;
        }
    
        // Insertion de l'utilisateur dans la base de données
        $sql = "INSERT INTO utilisateur(pseudo_personne, email_utilisateur, mdp, num_utilisateur, score_utilisateur) 
        VALUES(:pseudo, :email, :password, :phone_number, '0')";
    
        $stmt = $db_conn->prepare($sql);
        $stmt->bindParam(":pseudo", $userPostData->pseudo);
        $stmt->bindParam(":email", $userPostData->email);
        $stmt->bindParam(":password", $userPostData->password);
        $stmt->bindParam(":phone_number", $userPostData->phone_number);
    
        if ($stmt->execute()) {
            echo json_encode(["Success" => "User added"]);
            return;
        } else {
            echo json_encode(["Error" => "Error adding user"]);
            return;
        }
    
        break;
}

?>