<?php
try {
    $host = "localhost";
    $dbname = "vente"; 
    $user = "root";
    $pwd = "";
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd); 
    $requete = "SELECT * FROM clients, villes_france_free WHERE clients.code_ville = villes_france_free.ville_id;";
    $resultat=$connexion->prepare($requete);
    $resultat->execute();
    $data=$resultat->fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($data));
} catch(PDOException $e) {
    echo "Erreur de connexion: " . $e->getMessage();
    die;
}
?>
