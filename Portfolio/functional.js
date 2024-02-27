$( document ).ready(function() {

    // change image when hover over it
	$("#profilephoto").hover(function(){
        $(this).attr("src", "media/Emma.png"); // what to change to
        }, function(){
        $(this).attr("src", "media/Emma.png");
      });

});