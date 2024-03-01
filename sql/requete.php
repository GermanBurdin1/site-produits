<?php

function clientsParVilles () {
    return "SELECT * FROM clients, villes_france_free WHERE clients.code_ville = villes_france_free.ville_id;";
};


function produitsParClients ($connexion) {
    $requete = "SELECT * FROM clients, villes_france_free WHERE clients.code_ville = villes_france_free.ville_id;";
    return $connexion->prepare($requete);
};

function accueil ($connexion) {
    $requete = "SELECT * FROM clients, villes_france_free WHERE clients.code_ville = villes_france_free.ville_id;";
    return $connexion->prepare($requete);
};

