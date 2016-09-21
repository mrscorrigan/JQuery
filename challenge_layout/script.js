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
	

	$("a.bottom_button").hover(function(){
        $(this).css("background-color", "#31A5CC");
    }, function(){
    $(this).css("background-color", "rgba(129, 187, 201,.85)");

});

	$("h2").hover(function(){
		$(this).addClass("header_hover");
	}, function(){
		$(this).removeClass("header_hover");
	});

	$("a.bottom_button").hover(function(){
        $("body").css("background-color", "black");
    }, function(){
    $("body").css("background-color", "grey");
});
});
