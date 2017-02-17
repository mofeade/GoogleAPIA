(function () {
	var map, marker;

	function initMap() {
		map = new google.maps.Map(document.querySelector('.mapWrapper'), {
			center : { lat: 6.621114, lng: 3.372077},
			zoom : 14
		});

		marker = new google.maps.Marker({
			position : {lat: 6.621114, lng: 3.372077},
			map: map, 
			title: "youre here"
		});
	}

	initMap()

})();
