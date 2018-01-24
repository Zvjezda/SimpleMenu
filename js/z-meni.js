$(document).ready(function () {
    var meniHeight = $(window).height();
    $('div[name="z-meni"]').css('height', meniHeight);
	
	$(".closeMeny").on("click", function(){
		$(this).hide("slide", { direction: "left" }, 1000);
		
	});
});