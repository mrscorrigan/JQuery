$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function(){ 
	$("p").css("color","red")
});

	$("h2").hover(function(){ 
	$("h2").css("background-color","#18DE7B")
});
	

	/*$("button").hover(function(){
        $(this).css("background-color", "#31A5CC");
    }, function(){
    $(this).css("background-color", "rgba(129, 187, 201,.85)");

});*/

	$("h2").hover(function(){
		$(this).addClass("header_hover");
	}, function(){
		$(this).removeClass("header_hover");
	});

	/*$("button").hover(function(){
        $("body").css("background-color", "black");
    }, function(){
    $("body").css("background-color", "grey");
});*/ //using classes instead of .css//

 /* $("button").click(function(){
        $(this).siblings("p").toggle("medium");
	});*/ //toggle between hide and show//


/* $("button").click(function(){
        $(this).siblings("p").slideToggle("medium");
	});*/ //slide toggle between hide and show//
	
/*$("button").mouseenter(function(){
$(this).removeClass("makeRed"); 
  });*/ //changing the colours of a button

/*$("button").mouseleave(function(){
$(this).addClass("makeBorder"); 
  });*/ // changing the border of the button on mouse leave

$("button").click( function() {
	console.log ( $(this).siblings("p") );
 	$(this).siblings("p").slideToggle("medium");
 });

//  $("button").click(function(){
//  $(this).siblings("p").slideDown("medium");
// 	});

});
