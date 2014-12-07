function productElement(shoe) {
    var html = "";
		html += '<div class="col-md-6 col-lg-4">';
		html += '<div class="thumbnail shoe-item">';
		html += '<div class="picture"><img src="'+shoe.getBildUrl()+'" alt="..." /></div>';
		html += '<div class="caption">';
		html += '<h3>'+shoe.getName()+'</h3>';
		html += '<p>Lorem Ipsum</p>';
		html += '</div>';
		html += '<div class="buttons">'
		html += '<button type="button" class="btn btn-success toproduct" data-id="'+shoe.getId()+'">Info</button>';
		html += '<button type="button" class="btn btn-primary tocart" data-id="'+shoe.getId()+'">In den Warenkorb</button>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		
	return html;
}

function categoriesBlock(categories) {
    var html = "";
    
    for (var id in categories) {
        
        html += '<a href="#" class="category glyphicon glyphicon-chevron-right" data-id="'+id+'">'+categories[id]+'</a> <br />';
    }
    
    return html;
}

function cartBlock(cart) {
    var html = "";
    
    for (var id in cart) {
        html += '<div class="cart-element">';
        html += '<div class="cart-name">'+cart[id].getName()+'</div>';
        html += '<div class="cart-price">0 Euro</div>';
        html += '<div class="cart-delete"><span class="glyphicon glyphicon-remove delete-btn" data-id="'+cart[id].getId()+'" /></div>'
        html += '</div>';
    }
    
    html += '<div class="cart-element">';
    html += '<div class="cart-name"><b>Summe</b></div>';
    html += '<div class="cart-price">0 Euro</div>';
    html += '<div class="cart-delete"></div>'
    html += '</div>'
    
    return html;
}

function appendItems(items) {
    $('.products').empty();
        
    items.forEach(function(item) {
	   $('.products').append( productElement(item) );
	});
}