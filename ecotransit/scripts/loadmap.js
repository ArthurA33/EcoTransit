function initMap() {
  // Coordonnées du centre de la carte
  var center = { lat: 48.8566, lng: 2.3522 }; // Exemple : Paris

  // Options de la carte
  var mapOptions = {
    center: center,
    zoom: 12 // Niveau de zoom initial
  };

  // Créez une instance de carte et attachez-la à l'élément avec l'ID "google-map"
  var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
}

window.addEventListener('load', initMap);