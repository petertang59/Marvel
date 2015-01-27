jQuery(document).ready(function($){
    /* prepend menu icon */
	// $('nav').append('<div id="#{{hero.id}}"></div>');
 
	/* toggle nav */
	$("#showme").on("click", function(){
		$(".bio").slideToggle(250);
		$(this).toggleClass("active");
	});
});