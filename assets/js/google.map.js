(function($) {
"use strict";
	var map = L.map('googleMap').setView([45.075, 7.667], 13);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
})(jQuery);
