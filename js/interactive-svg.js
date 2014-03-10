$(function(){

	// jQuery.load loads the SVG file into our #stage div and give it the class svgLoaded which we’ll later use to trigger our intro animation
	
	$("#stage").load('stripe1.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally) and have read <strong><a href="http://tympanus.net/codrops/?p=13831#the-javascript">this important part of the tutorial</a></strong>');
		}

	});
});