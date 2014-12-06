function productElement(shoe) {
    var html = "";
		html += '<div class="col-md-6 col-lg-4">';
		html += '<div class="thumbnail shoe-item">';
		html += '<img src="'+shoe.getBildUrl()+'" alt="..." />';
		html += '<div class="caption">';
		html += '<h3>'+shoe.getName()+'</h3>';
		html += '<p>Lorem Ipsum</p>';
		html += '</div>';
		html += '<button type="button" class="btn btn-primary tocart">In den Warenkorb</button>';
		html += '</div>';
		html += '</div>';
		
	return html;
}

function categoriesBlock(categories) {
    var html = "";
    
    for (var id in categories) {
        html += '<input class="category" type="checkbox" name="'+categories[id]+'" id="'+id+'"/> ' +
                '<label for="'+id+'">'+categories[id]+' <span class="badge">8</span> </label><br />';
    }
    
    return html;
}