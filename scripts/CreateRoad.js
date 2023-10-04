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
      
      // Récupérez la durée de l'itinéraire depuis la réponse
      var route = response.routes[0];
      var duration = route.legs[0].duration.text;

      // Affichez la durée sur la page
      document.getElementById('duration').innerHTML = 'Durée du trajet : ' + duration;
    } else {
      window.alert('Erreur de direction : ' + status);
    }
  });
}
