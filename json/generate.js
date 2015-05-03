var approxGaussian = function() {
    return ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}

var generatePoint = function(lat, lng){
	var randomLat = approxGaussian() * 0.003;
	var randomLng = approxGaussian() * 0.003;
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