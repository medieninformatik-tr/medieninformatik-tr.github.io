function loadContent(path) {
    html = "";
    
    $.ajax({
	   async: false,
       url: path,
       success: function( content ){
            html = content;
       },
       dataType:"html"
    }); 
    
    return html;
}