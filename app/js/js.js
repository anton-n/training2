$(".slider").owlCarousel({
	items: 1,
	smartSpeed: 800,
	// loop: true,
	// autoplay: true,
	// autoplayTimeout: 5000,
	// autoplayHoverPause: true,
});


function initialize() {
	var x = 59.93865261522999;
	var y = 30.323874949212723;
	var x1 = 59.93895261522999;
	var y1 = 30.320054949212723;
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(x1, y1),
		scrollwheel: false,
		disableDefaultUI: true
		}
	var map = new  google.maps.Map(
		document.querySelector(".map__google"),
		mapOptions
		);
	var image = "img/lable.png"; 
	var myLatLng = new google.maps.LatLng(x, y);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
		});
}
google.maps.event.addDomListener(window, "load", initialize);


var enter = document.querySelector(".popup-enter");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__close");
var focus = popup.querySelector("[name=login]");

enter.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	focus.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
		}
	}
});