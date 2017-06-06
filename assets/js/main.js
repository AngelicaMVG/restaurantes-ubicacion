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

var ubicacion = function(position){
  	var latitud = $(this).data('latitud');
		var longitud = $(this).data('longitud');

		var coordenadas = {
			lat: latitud,
			lng: longitud
		};

		mostrarMapa(coordenadas);
};



var restaurantes= [
	{
    "nombre": "Yamasan Ramen House",
    "comida": "Japonesa",
    "foto": "https://igx.4sqi.net/img/general/200x200/25404241_8PNmeduOkJ7QojQUpsCTCaTOP0q--87Ef7XjhpxzxHQ.jpg",
    "direccion": "Calle Tamaulipas 103, Cuauhtémoc, Hipódromo, 06140 Ciudad de México, CDMX",
    "coordenadas": {"lat": "19.4094816", "lng": "-99.1750028"}
  },
  {
    "nombre": "Fishers",
    "comida": "Marisqueria",
    "foto": "https://igx.4sqi.net/img/general/200x200/g3BtSg12PXsfoUjm1XAg5fLU_8GcqgPEugQuPTUNVSU.jpg",
    "direccion": "Durango 197, Cuauhtémoc, Roma Norte, Roma Nte., 06700 Ciudad de México, CDMX",
    "coordenadas": { "lat": "19.420134", "lng": "-99.167399"}
  },
  {
    "nombre": "Los Bisquets Obregon",
    "comida": "Mexicana",
    "foto": "https://igx.4sqi.net/img/general/200x200/83944764_dqD3pXxR5BMdonvDDDgCdyWn6_sNqnNDkB4ME8Orrn8.jpg",
    "direccion": "Av. Álvaro Obregón 252, Roma Nte., 06700 Ciudad de México, CDMX",
    "coordenadas": {  "lat": "19.416677", "lng": "-99.166744"}
  },
  {
    "nombre": "Buenos Aires",
    "comida": "Argentina",
    "foto": "https://igx.4sqi.net/img/general/200x200/lsEyh-40_A1hsGdF16i7jpDLNSCX81un7CNtKrruTE8.jpg",
    "direccion": "  Direccion: Yucatán 33, Hipódromo Condesa, Cuauhtémoc, 06170 Ciudad de México, CDMX",
    "coordenadas": {  "lat": "19.415763", "lng": "-99.166119"}
  },
  {
    "nombre": "Taqueria el Borrego Viudo",
    "comida": "Tacos",
    "foto": "https://igx.4sqi.net/img/general/200x200/45758641_AQ1byP9Ils6OnXsnd8J9gsBZ2cuffsqaR7u0ZFaCdo4.jpg",
    "direccion": "Revolución, Tacubaya, Ciudad de México, CDMX",
		"coordenadas" : {"lat": "19.399412", "lng": "-99.185153"}
  }

];

var plantillaRestaurante = '<article class="row restaurante">' +
  '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
  '<div class="row valign-wrapper">' +
  '<div class="col s3">' +
  '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
  '</div>' +
  '<div class="col s6">' +
  '<h5 class="name">__nombre__</h5>' +
  '<span class="black-text">' +
  'Comida: __comida__' + '<br>' +
  '</span>' +
  '<span>' +
  'Direccion:__direccion__' + '</span>' + '</br>'
	+ '<div class="col s2">' +
	'<button type="button" class=" btn-ubicacion btn btn-primary btn-medium" data-latitud="__latitud__" data-longitud="__longitud__">Ubicacion</button>' +
	'</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</article>';

var cargarPagina = function() {
  $("#search-form").submit(filtrarRestaurante);
  obtenerUbicacion();
	$(document).on("click", ".btn-ubicacion", ubicacion);
};

var filtrarRestaurante = function(e) {
  e.preventDefault();
  var criterioBusqueda = $("#search").val().toLowerCase();
  var restaurantesFiltrados = restaurantes.filter(function(restaurante) {
    return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
  });
  var restaurantesFiltradosComida = restaurantes.filter(function(restaurante) {
    return restaurante.comida.toLowerCase().indexOf(criterioBusqueda) >= 0;
  });
  mostrarRestaurante(restaurantesFiltrados);
  // mostrarRestaurante(restaurantesFiltradosComida);
};

var mostrarRestaurante = function(restaurantes) {
  var plantillaFinal = "";
  restaurantes.forEach(function(restaurante) {
    plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurante.nombre)
      .replace("__comida__", restaurante.comida)
      .replace("__foto__", restaurante.foto)
      .replace("__direccion__", restaurante.direccion)
			.replace("__latitud__", restaurante.coordenadas.lat)
			.replace("__longitud__", restaurante.coordenadas.lng);
  });
  $(".restaurant").html(plantillaFinal);

};




$(document).ready(cargarPagina);
