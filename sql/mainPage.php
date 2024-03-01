<?php

function top10 () {
    return "SELECT a.num_article, a.description_article, SUM(l.quantite_cde) AS total_sold
    FROM ligne_commande l
    JOIN article a ON l.num_art = a.num_article
    GROUP BY l.num_art
    ORDER BY total_sold DESC
    LIMIT 10;";
};
?>