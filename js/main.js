(function () {
	var map = new google.maps.Map(document.querySelector('.mapWrapper')), marker;

	function initMap(position) {
		map.setCenter ({ lat: position.coords.latitude, lng: position.coords.longitude});
		map.setZoom (14);

		marker = new google.maps.Marker({
			position : {lat: position.coords.latitude, lng: position.coords.longitude},
			map: map, 
			title: "youre here"
		});
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
	} else {
		console.log('it  is broken');
	}

	function handleError() {
		console.log('SOMETHING IS SERIOUSLY WRONG');
	}

	})();
