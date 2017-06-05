function initMap(){

    var laboratoriaMexico = {lat: 19.4176387, lng: -99.167004,};

    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center:laboratoriaMexico
    });

    var marker = new google.maps.Marker({
      position:laboratoriaMexico,
      map: map
    });
}

var restaurante = [
	{
		"nombre": "Pulqueria de los Insurgentes",
		"comida": "Pulques Finos",
		"foto": "http://via.placeholder.com/200x200",
    "lat":"19.4176387",
    "lng": "-99.167004"
	},
  {
		"nombre": "Fonda Fina",
		"comida": "Mexicana",
		"foto": "http://via.placeholder.com/200x200",
    "lat":"19.4176387",
    "lng": "-99.167004"
	},

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
            '</div>' +
          '</div>' +
        '</div>' +
	'</article>';
