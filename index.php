<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_5YQCxiyV4vAg32D_J6epTt7FR4GE5Gs&callback=initMap" async defer></script>
    <script src="scripts/loadmap.js"></script>
    <script src="scripts/CreateRoad.js"></script>
    <title>Ecotransit</title>
</head>
<body>
    <a href="create.php">Créer un nouvel enregistrement</a>
    <div>
        <input type="text" id="start" placeholder="Point de départ">
        <input type="text" id="end" placeholder="Point d'arrivée">
        <button onclick="calculateRoute()">Calculer l'itinéraire</button>
    </div>
    <div id="duration"></div>
    <div id="google-map" style="width: 100%; height: 400px;"></div>
</body>
</html>