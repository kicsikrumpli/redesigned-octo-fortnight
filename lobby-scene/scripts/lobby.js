$(document).ready(function() {
	$("#bellboy").click(function() {
		$("#speechbubble").fadeToggle();
	});
	
	$("#reception").click(function() {
		$("#main").fadeOut("slow", function() {
			window.location.href = "../room-scene/index.html";
		});
	});
	
	$("#elevator").click(function() {
		$("#main").fadeOut("slow", function() {
			window.location.href = "../bath-scene/index.html";
		});
	});
	
	// QR code container related listeners
	$("#qrbackground").click(function() {
		if($("#qrbackground, #qrcontainer").is(":visible")) {
			$("#qrbackground, #qrcontainer").fadeOut();
		}
	});
	
	$("#qrcontainer").click(function() {
		event.stopPropagation();
	})
	
	$("#stand").click(function(event) {
		event.stopPropagation();
		// Reading from session storage
		$("#firstpart").toggleClass("ui-show", sessionStorage.getItem("left") !== null);
		$("#secondpart").toggleClass("ui-show", sessionStorage.getItem("right") !== null);
		$("#qrbackground, #qrcontainer").fadeIn();
	});
	
	// Control (example for session storage access)
	$("#left").click(function(event) {
		sessionStorage.setItem("left", true);
	});
	$("#right").click(function(event) {
		sessionStorage.setItem("right", true);
	});
	$("#clear").click(function(event) {
		sessionStorage.removeItem('left');
		sessionStorage.removeItem('right');
	});
});