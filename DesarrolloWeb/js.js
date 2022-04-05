$(document).ready(function() {
	$("#html").click(function(event) {
		$('.desarrollo-web .img .carril').css('transform', 'translateX(0px)');
		$('.desarrollo-web .img h1').text('HTML');
		
	});
	
	$("#css").click(function(event) {
		$('.desarrollo-web .img .carril').css('transform', 'translateX(-650px)');
		$('.desarrollo-web .img h1').text('CSS');
	});

	$("#js").click(function(event) {
		$('.desarrollo-web .img .carril').css('transform', 'translateX(-1300px)');
		$('.desarrollo-web .img h1').text('JavaScript');
	});
});