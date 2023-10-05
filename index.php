
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_5YQCxiyV4vAg32D_J6epTt7FR4GE5Gs&callback=initMap" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="scripts/loadmap.js"></script>
    <script src="scripts/CreateRoad.js"></script>
    <title>Ecotransit</title>
</head>
<body>
    <a href="create.php">Créer un nouvel enregistrement</a>
    <div>
        <input type="text" id="start" placeholder="Point de départ">
        <input type="text" id="end" placeholder="Point d'arrivée"><br>

        <select id="vehicleSelect" value="">
            <option value="">Sélectionnez un véhicule</option>
            <option value="VoitElec">Voiture électrique</option>
            <option value="VoitTerm">Voiture thermique</option>
            <option value="Velo">Vélo</option>
            <option value="veloAssist">Vélo assister</option>
            <option value="Marche">Marche</option>
            <option value="BusTherm">Bus thermique</option>
            <option value="BusElec">Bus électrique</option>
            <option value="BusGNV">Bus GNV</option>
            <option value="Tram">Tramway</option>
            <option value="Metro">Métro</option>
            <option value="Scoot">Scooter / moto légère</option>y
            <option value="Ter">TER</option>
        </select><br><br>
        
        <button onclick="calculateRoute()">Calculer l'itinéraire</button>
    </div>
    <div id="duration"></div>
    <div id="distance"></div>
    <div id="CO2"></div>
    <div id="google-map" style="width: 100%; height: 400px;"></div>
</body>
</html>