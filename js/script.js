1
2
3
4
5
6
7
8
9
10
11
12
13
$(function(){
 
    $("#stage").load('interactive.svg',function(response){
 
        $(this).addClass("svgLoaded");
         
        if(!response){
            // Error loading SVG!
            // Make absolutely sure you are running this on a web server or localhost!
        }
 
    });
});