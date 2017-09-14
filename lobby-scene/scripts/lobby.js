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