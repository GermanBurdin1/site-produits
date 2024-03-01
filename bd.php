<?php

include '.sql/mainPage.php';

try {
    $host = "localhost";
    $dbname = "vente"; 
    $user = "root";
    $pwd = "";
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd); 
    
    $resultat = top10($connexion);
    $resultat->execute();
    
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
} catch(PDOException $e) {
    echo "Erreur de connexion: " . $e->getMessage();
    die;
}
?>