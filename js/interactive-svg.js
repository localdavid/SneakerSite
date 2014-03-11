$(function(){

	// jQuery.load loads the SVG file into our #stage div and give it the class svgLoaded which we’ll later use to trigger our intro animation. Important: We load the SVG using JavaScript to gain access to its DOM. Chrome (and maybe other browsers) will not let you do this locally; it only works when run from the HTTP protocol for security reasons. So if you are having issues getting the SVG to load, be sure you are testing from a web server or running on localhost
	
	$("#stage").load('stripe1.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally) and have read <strong><a href="http://tympanus.net/codrops/?p=13831#the-javascript">this important part of the tutorial</a></strong>');
		}

	});
});