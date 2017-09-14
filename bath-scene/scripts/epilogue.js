function endSequence() {
    $('#epilogue').show();
}

$(document).ready(function(){
	$("#qrcontainer").click(function() {
		sessionStorage.setItem("right", true);
		window.location.href = "../lobby-scene/index.html";
	});
});
