function calculateRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;

  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 12,
    center: { lat: 48.858844, lng: 2.294351 } // Coordonnées de Paris, France
  });

  directionsDisplay.setMap(map);

  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };

  directionsService.route(request, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);

      // Récupérez la durée et le nombre de kilometre de l'itinéraire depuis la réponse
      var route = response.routes[0];
      var duration = route.legs[0].duration.text;
      var distance = route.legs[0].distance.value / 1000;

      // Effectuez une requête vers l'API pour obtenir les données nécessaires
      fetch("https://api.monimpacttransport.fr/beta/getEmissionsPerDistance")
        .then(response => response.json())
        .then(data => {
          var veiculechoix = document.getElementById("vehicleSelect");
          var valeurVeicule = veiculechoix.value;
          var CO2cons;

          var VoitElec = "VoitElec";
          var VoitTerm = "VoitTerm";
          var Velo = "Velo";
          var veloAssist = "veloAssist";
          var Marche = "Marche";
          var BusTherm = "BusTherm";
          var Tram = "Tram";
          var Metro = "Metro";
          var Scoot = "Scoot";
          var Ter = "Ter";
          var BusElec = "BusElec";
          var BusGNV = "BusGNV";

          if (valeurVeicule == VoitElec) {
              CO2cons = data[0].emissions.gco2e;
          } else if (valeurVeicule == VoitTerm) {
              CO2cons = data[1].emissions.gco2e;
          } else if (valeurVeicule == Velo || valeurVeicule == Marche) {
              CO2cons = data[2].emissions.gco2e;
          } else if (valeurVeicule == veloAssist) {
              CO2cons = data[3].emissions.gco2e;
          } else if (valeurVeicule == BusTherm) {
              CO2cons = data[4].emissions.gco2e;
          } else if (valeurVeicule == Tram) {
              CO2cons = data[5].emissions.gco2e;
          } else if (valeurVeicule == Metro) {
              CO2cons = data[6].emissions.gco2e;
          } else if (valeurVeicule == Scoot) {
              CO2cons = data[7].emissions.gco2e;
          } else if (valeurVeicule == Ter) {
              CO2cons = data[8].emissions.gco2e;
          } else if (valeurVeicule == BusElec) {
              CO2cons = data[9].emissions.gco2e;
          } else if (valeurVeicule == BusGNV) {
              CO2cons = data[10].emissions.gco2e;
          }
          // calcule le CO2 utilisé en multipliant la distance par le nombre de CO2 en foction du veicule
          var CO2_utiliser = distance.toFixed(1) * CO2cons;

          document.getElementById('duration').innerHTML = 'Durée du trajet : ' + duration;
          document.getElementById('distance').innerHTML = 'Nombre de kilomètres du trajet : ' + distance.toFixed(1);
          document.getElementById('CO2').innerHTML = 'Nombre de CO2 utilisé : ' + CO2_utiliser.toFixed(2) + 'g';

          console.log('je suis ici');
          
          $.ajax({
            type: "POST",
            url: "create_trajet.php",
            data: { distance: distance.toFixed(1), co2: CO2_utiliser.toFixed(2)},
            success: function (data) {
              
              console.log(data);
              if (data == "success") {
              }else {
              }
            }
        });

      });
    } else {
      window.alert('Erreur de direction : ' + status);
    }
  });
}




