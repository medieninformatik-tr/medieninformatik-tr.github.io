function productElement(shoe) {
    var template = loadContent('content/produktelement.xhtml');
    
    template = template.replace('{name}', shoe.getName());
    template = template.replace('{description}', shoe.getKurzbeschreibung());
    template = template.replace('{url}', shoe.getBildUrl());
    template = template.replace('{price}', shoe.getPreis().toFixed(2));
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
        html += '<div class="cart-price">'+cart[id].getPreis().toFixed(2)+'&#8364;</div>';
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
    template = template.replace('{description}', shoe.getBeschreibung());
    template = template.replace('{price}', shoe.getPreis().toFixed(2));
    template = template.replace('{color}', shoe.getFarbe());
    template = template.replace('{size-from}', shoe.getGroesseVon());
    template = template.replace('{size-to}', shoe.getGroesseBis());
    template = template.replace(/{id}/g, shoe.getId());
    
    // Bei Objekten der Klasse Laufschuh wird die Dämpfung ausgegeben.
    if (shoe.klasse == "Laufschuh") {
        template = template.replace('{damping}', shoe.getDaempfung());
    }
    else {
        template = template.replace('{damping}', 'Keine');
    }
    
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
        html += '<div class="cart-price">'+cart[id].getPreis().toFixed(2)+'&#8364;</div>';
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

function thankYouMessage() {
    var template = $(loadContent('content/danke.xhtml'));
    
    return template;
}