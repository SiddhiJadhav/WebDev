$("input").keypress(function(e) {
    

    if(e.which == 13) {
        var newTask = $("input").val();
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+newTask+"</li>");
        $("input").val('');
    }
    // return;
});

$("ul").on("click","span", function(event){
	$(this).parent().remove();
});

$(".fa-plus").click(function(){
	
	if($("input").is(":visible")){
	$("input").hide();	
	}
	else{
		$("input").show();
	}
});

$("ul").on("click","li", function(){
	// alert("abc");
  $(this).toggleClass("completed");
});