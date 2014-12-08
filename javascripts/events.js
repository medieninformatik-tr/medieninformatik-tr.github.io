$(document).ready(function(e){
	
	var data = new Repository('xml/schuhdaten.xml');
	data.init();
	
	var cart = new Cart(data);

	// Navigationsevents
	loadContent('content/start.xhtml');
	
	$('.start').click(function() {
	    html = loadContent('content/start.xhtml');
	    
	    $('.main').empty();
        $( ".main" ).html(html);
	    $('.active').removeClass('active');
	    $('.start').toggleClass('active');
	});
	$('.shop').ready(function() {
	    html = loadContent('content/shop.xhtml');
	    
	    $('.main').empty();
        $( ".main" ).html(html);
	    $('.active').removeClass('active');
	    $('.shop').toggleClass('active');
	    
	    // Erstellt die Kategorien
	    var categories = data.getCategories();
	    $('.categories').append( categoriesBlock(categories) );
	    
	    // Zeigt alle Schuhe an
	    appendItems( data.getShoes() );
	});
	
	$('.projekt').click(function() {
	    html = loadContent('content/projekt.xhtml');
	    
	    $('.main').empty();
        $( ".main" ).html(html);
	    $('.active').removeClass('active');
	    $('.projekt').toggleClass('active');
	});

	$('.impressum').click(function() {
	    html = loadContent('content/impressum.xhtml');
	    
	    $('.main').empty();
        $( ".main" ).html(html);
	    $('.active').removeClass('active');
	    $('.impressum').toggleClass('active');
	});
	
	$('body').on('click', '.category', function (evt) {
        $('.category').removeClass('active');
        $(this).toggleClass('active');
        
        appendItems( data.getShoes( {category: $(this).attr("data-id")} ) );
    });
    
    $('body').on('click', '.tocart', function (evt) {
        cart.addItem($(this).attr('data-id'));
        
        $('.cart').empty();
        $('.cart').append( cartBlock(cart.getItems()) );
        $('.modal-page').modal('hide');
    });
    
    $('body').on('click', '.search-btn', function (evt) {
        html = loadContent('content/shop.xhtml');
	    
	    $('.main').empty();
        $( ".main" ).html(html);
	    $('.active').removeClass('active');
	    $('.shop').toggleClass('active');
	    
        var term = $('.search-input').val();
        
        appendItems(data.getShoes({term: term}));
    });
    
    $('body').on('click', '.delete-btn', function (evt) {
        cart.deleteItem($(this).attr('data-id'));
        
        $('.cart').empty();
        $('.cart').append( cartBlock(cart.getItems()) );
    });
    
    $('body').on('click', '.toproduct', function (evt) {
        var id = $(this).attr('data-id');
        var items = data.getShoes({id: id});
        
        $('.modal-content').html( singleProductPage(items[0]) );
        $('.modal-page').modal('show');
    });
    
    $('body').on('click', '.buy-btn', function (evt) {
        $('.modal-content').html( cartPage(cart.getItems()) );
        $('.modal-page').modal('show');
    });
    
    $('body').on('click', '.search-price-btn', function (evt) {
        var priceFrom = parseFloat( $('.price-from-input').val().replace(',', '.') );
        var priceTo = parseFloat( $('.price-to-input').val().replace(',', '.') );
        
        if ( !priceFrom && $('.price-from-input').val() != "" ) {
            alert("Falsche Eingabe");
            $('.price-from-input').toggleClass('red-border');
        }
        else if (!priceTo && $('.price-to-input').val() != "") {
            alert("Falsche Eingabe!");
            $('.price-to-input').toggleClass('red-border');
        }
        else if (priceFrom > priceTo) {
            alert("Der Startpreis darf nicht höher als der Endpreis sein!");
            $('.price-from-input').toggleClass('red-border');
            $('.price-to-input').toggleClass('red-border');
        }
        else {
            $('.price-from-input').removeClass('red-border');
            $('.price-to-input').removeClass('red-border');
            
            appendItems( data.getShoes({
                pricefrom: priceFrom,
                priceto: priceTo
            }));
        }
    });
    
    $('body').on('click', '.reset-price-btn', function (evt) {
        $('.price-from-input').val('');
        $('.price-to-input').val('');
        
        appendItems( data.getShoes() );
    });
    
    
    
    $('body').on('submit', "form[name='bestellung']", function (evt) {
        
        var firstName = $(this).find("input[name='vorname']").val();
        var lastName = $(this).find("input[name='nachname']").val();
        var street = $(this).find("input[name='strasse']").val();
        var number = $(this).find("input[name='nr']").val();
        var postalcode = $(this).find("input[name='plz']").val();
        var city = $(this).find("input[name='ort']").val();
        
        var message = "";
        
        message += "Vorname: "+firstName+"\n";
        message += "Nachname: "+lastName+"\n";
        message += "Straße: "+street+"\n";
        message += "Hausnummer: "+number+"\n";
        message += "PLZ: "+postalcode+"\n";
        message += "Ort: "+city+"\n";
        message += "\n\nBestellung\n";
        
        for ( var i in cart.getItems() ) {
            shoe = cart.getItems()[i];
            message += "- " + shoe.getId() + ": " + shoe.getName() + " - " + shoe.getPreis().toFixed(2) + "€\n"; 
        }
        
        window.location.href = "mailto:user@example.com?subject=Bestellung%20bei%20SchuhScout&body="+encodeURI(message);
        
        $('.modal-content').html( thankYouMessage );
        
        return false;
    });
});

