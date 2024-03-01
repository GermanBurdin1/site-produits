<?php

include '../../sql/requete.php';

try {
    $host = "localhost";
    $dbname = "vente"; 
    $user = "root";
    $pwd = "";
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd); 
    
    $sql = clientsParVilles();
    $resultat = $connexion->prepare($sql); 
    $resultat->execute(); 
    
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
} catch(PDOException $e) {
    echo "Erreur de connexion: " . $e->getMessage();
    die;
}
?>