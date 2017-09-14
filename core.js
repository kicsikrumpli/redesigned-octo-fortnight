$(document).ready(function() {
	// QR code container related listeners
	$("#qrbackground").click(function() {
		if($("#qrbackground, #qrcontainer").is(":visible")) {
			$("#qrbackground, #qrcontainer").fadeOut();
		}
	});
	
	$("#qrcontainer").click(function() {
		event.stopPropagation();
	})
	
	$("#qr").click(function(event) {
		event.stopPropagation();
		// Reading from session storage
		$("#firstpart").toggleClass("ui-show", sessionStorage.getItem("left") === "true");
		$("#secondpart").toggleClass("ui-show", sessionStorage.getItem("right") === "true");
		$("#qrbackground, #qrcontainer").fadeIn();
	});
});