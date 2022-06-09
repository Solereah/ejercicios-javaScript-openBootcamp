let map;
let marcadores = [];

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  marcadores.push(
    new google.maps.Marker({
      position: {
        lat: 40.430082096586446,
        lng: -3.7061694690682954,
      },
      map,
      title: "Madrid",
    })
  );

  marcadores.push(
    new google.maps.Marker({
      position: {
        lat: 51.4808397983302,
        lng: -0.13287762662228284,
      },
      map,
      title: "Londres",
    })
  );

  marcadores.push(
    new google.maps.Marker({
      position: {
        lat: 48.91352775978367,
        lng: 2.3534352866526786,
      },
      map,
      title: "Paris",
    })
  );
}
