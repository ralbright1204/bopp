var generatePoint = function(lat, lng){
	var randomLat = (Math.random() - 0.5) * 0.01;
	var randomLng = (Math.random() - 0.5) * 0.01;
	return [lat+randomLat, lng+randomLng];
}

$.getJSON("locations.json", function(json) {
	var hotspotList = [];
	$.each(json, function(index, locationData){
		var lat = locationData.location.lat;
		var lng = locationData.location.lng;
		for(i = 0; i < 20; i++){
			hotspotList.push(generatePoint(lat, lng));
		}
	});
	$('textarea#hotspots').val(JSON.stringify(hotspotList));
	console.log(hotspotList);
});