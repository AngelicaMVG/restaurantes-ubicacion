var obtenerUbicacion = function (e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Actualice su navegador");
	}
};

var mostrarPosicion = function (posicion) {
	var coordenadas = {
		lat: posicion.coords.latitude,
		lng: posicion.coords.longitude
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}



var restaurantes= [{
    "nombre": "Yamasan Ramen House",
    "comida": "Japonesa",
    "foto": "https://igx.4sqi.net/img/general/200x200/25404241_8PNmeduOkJ7QojQUpsCTCaTOP0q--87Ef7XjhpxzxHQ.jpg",
    "direccion": "Calle Tamaulipas 103, Cuauhtémoc, Hipódromo, 06140 Ciudad de México, CDMX",
    "lat": "19.4094816",
    "lng": "-99.1750028"
  },
  {
    "nombre": "Fonda Fina",
    "comida": "Mexicana",
    "foto": "https://igx.4sqi.net/img/general/200x200/76294701_FMQJFOhoH_tEz8qsXeooOPAicLNH7EuJ8GWrRVtLymU.jpg",
    "direccion": "Medellín 79, Roma Nte., 06700 Ciudad de México, CDMX",
    "lat": "19.4176387",
    "lng": "-99.167004"
  },
  {
    "nombre": "Los Bisquets Obregon",
    "comida": "Mexicana",
    "foto": "https://igx.4sqi.net/img/general/200x200/83944764_dqD3pXxR5BMdonvDDDgCdyWn6_sNqnNDkB4ME8Orrn8.jpg",
    "direccion": "Av. Álvaro Obregón 252, Roma Nte., 06700 Ciudad de México, CDMX",
    "lat": "19.4176387",
    "lng": "-99.167004"
  },
  {
    "nombre": "La Botica",
    "comida": "Mexicana",
    "foto": "https://igx.4sqi.net/img/general/200x200/15693219_2315nUctihFzw_oQRlUAv-p6-jx68TglNgm9j0wB45g.jpg",
    "direccion": "Av. Alfonso Reyes 120, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX",
    "lat": "19.4176387",
    "lng": "-99.167004"
  },
  {
    "nombre": "Taqueria el Borrego Viudo",
    "comida": "Tacos",
    "foto": "https://igx.4sqi.net/img/general/200x200/45758641_AQ1byP9Ils6OnXsnd8J9gsBZ2cuffsqaR7u0ZFaCdo4.jpg",
    "direccion": "Av. Alfonso Reyes 120, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX",
    "lat": "19.4176387",
    "lng": "-99.167004"
  }

];

var plantillaRestaurante = '<article class="row restaurante">' +
  '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
  '<div class="row valign-wrapper">' +
  '<div class="col s3">' +
  '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
  '</div>' +
  '<div class="col s9">' +
  '<h5 class="name">__nombre__</h5>' +
  '<span class="black-text">' +
  'Comida: __comida__' + '<br>' +
  '</span>' +
  '<span>' +
  'Direccion:__direccion__' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</article>';

var cargarPagina = function() {
  $("#search-form").submit(filtrarRestaurante);
  obtenerUbicacion();
};

var filtrarRestaurante = function(e) {
  e.preventDefault();
  var criterioBusqueda = $("#search").val().toLowerCase();
  var restaurantesFiltrados = restaurantes.filter(function(restaurante) {
    return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
  });
  mostrarRestaurante(restaurantesFiltrados);
};

var mostrarRestaurante = function(restaurantes) {
  var plantillaFinal = "";
  restaurantes.forEach(function(restaurante) {
    plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurante.nombre)
      .replace("__comida__", restaurante.comida)
      .replace("__foto__", restaurante.foto)
      .replace("__direccion__", restaurante.direccion);
  });
  $(".restaurant").html(plantillaFinal);
};




$(document).ready(cargarPagina);
