function productElement(shoe) {
    var template = loadContent('content/produktelement.xhtml');
    
    template = template.replace('{name}', shoe.getName());
    template = template.replace('{url}', shoe.getBildUrl());
    template = template.replace('{price}', shoe.getPreis());
    template = template.replace(/{id}/g, shoe.getId());
    
    return template;
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
    var sum = 0;
    
    for (var id in cart) {
        sum += parseFloat(cart[id].getPreis());
    
        html += '<div class="cart-element">';
        html += '<div class="cart-name">'+cart[id].getName()+'</div>';
        html += '<div class="cart-price">'+cart[id].getPreis()+'&#8364;</div>';
        html += '<div class="cart-delete"><span class="glyphicon glyphicon-remove delete-btn" data-id="'+cart[id].getId()+'" /></div>'
        html += '</div>';
    }
    
    html += '<div class="cart-element">';
    html += '<div class="cart-name"><b>Summe</b></div>';
    html += '<div class="cart-price"><b>'+sum.toFixed(2)+'&#8364;</b></div>';
    html += '<div class="cart-delete"></div>'
    html += '</div>';
    
    return html;
}

function appendItems(items) {
    $('.products').empty();
        
    items.forEach(function(item) {
	   $('.products').append( productElement(item) );
	});
}

function singleProductPage(shoe) {
    var template = loadContent('content/produktseite.xhtml');
    
    template = template.replace('{name}', shoe.getName());
    template = template.replace('{url}', shoe.getBildUrl());
    template = template.replace('{description}', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');
    template = template.replace('{price}', shoe.getPreis());
    template = template.replace('{color}', shoe.getFarbe());
    template = template.replace('{size-from}', shoe.getGroesseVon());
    template = template.replace('{size-to}', shoe.getGroesseBis());
    template = template.replace(/{id}/g, shoe.getId());
    
    return template;
}

function cartPage(cart) {
    var template = $(loadContent('content/warenkorb.xhtml'));
    
    var html = '';
    sum = 0;
    
    for (var id in cart) {
        sum += parseFloat(cart[id].getPreis());
    
        html += '<div class="cart-element">';
        html += '<div class="cart-name">'+cart[id].getName()+'</div>';
        html += '<div class="cart-price">'+cart[id].getPreis()+'&#8364;</div>';
        html += '<div class="cart-delete"><span class="glyphicon glyphicon-remove delete-btn" data-id="'+cart[id].getId()+'" /></div>'
        html += '</div>';
    }
    
    html += '<div class="cart-element">';
    html += '<div class="cart-name"><b>Summe</b></div>';
    html += '<div class="cart-price"><b>'+sum.toFixed(2)+'&#8364;</b></div>';
    html += '<div class="cart-delete"></div>'
    html += '</div>';
    
    template.find('.cart').append(html);
    
    return template;
}