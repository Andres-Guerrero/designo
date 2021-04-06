const locations = [
	{
		country: 'Canada',
		long: 43.64419484706138,
		lat: -79.3945608610694
	},
	{
		country: 'Australia',
		long: -30.329148449296643,
		lat: 149.78822916951194
	},
	{
		country: 'UK',
		long: 53.71041818128988,
		lat: -1.3417707595071173
	}
];

// Draw maps
function drawMaps(country, long, lat) {
	let map = L.map(`${country}`).setView([ `${long}`, `${lat}` ], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			'pk.eyJ1IjoiYW5kcmVzLWd1ZXJyZXJvIiwiYSI6ImNraHYyazluYTB6a28yem4zZHQ5Yjd0aDYifQ.1wjPg4323HXwnB9EbuwguQ'
	}).addTo(map);

	var mapIcon = L.icon({
		iconUrl: '../images/map-marker.png',
		iconSize: [ 30, 50 ]
	});

	var marker = L.marker([ `${long}`, `${lat}` ], { icon: mapIcon }).addTo(map);
}

// Fetch maps for each country
locations.forEach((location) => {
	drawMaps(location.country.toLowerCase(), location.long, location.lat);
});
