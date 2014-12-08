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

function isNumberOrEmpty(number) {
    if(number == "") {
        return 1;
    }
    else if (number.match(/^-?[0-9]*[.,]{0,1}[0-9]+$/)) {
        return 1;
    }
    else {
        return 0;
    }
}