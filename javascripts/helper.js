function loadContent(path) {
    $('.main').empty();
    
    $.ajax({
	   async: false,
       url: path,
       success: function( content ){
            $( ".main" ).html( content );
       },
       dataType:"html"
    }); 
}