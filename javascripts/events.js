$(document).ready(function(e){
	
	var data = new Repository('xml/schuhdaten.xml');
	data.init();
	
	var cart = new Cart(data);
	
	
	// Navigationsevents
	loadContent('content/start.xhtml');
	
	$('.start').click(function() {
	    loadContent('content/start.xhtml');
	    $('.active').removeClass('active');
	    $('.start').toggleClass('active');
	});
	$('.shop').ready(function() {
	    loadContent('content/shop.xhtml');
	    $('.active').removeClass('active');
	    $('.shop').toggleClass('active');
	    
	    // Erstellt die Kategorien
	    var categories = data.getCategories();
	    $('.categories').append( categoriesBlock(categories) );
	    
	    // Zeigt alle Schuhe an
	    appendItems( data.getAll() );
	});
	
	$('.projekt').click(function() {
	    loadContent('content/projekt.xhtml');
	    $('.active').removeClass('active');
	    $('.projekt').toggleClass('active');
	});

	$('.warenkorb').click(function() {
	    loadContent('content/warenkorb.xhtml');
	    $('.active').removeClass('active');
	    $('.warenkorb').toggleClass('active');
	});

	$('.suchen').click(function() {
	    loadContent('content/suchen.xhtml');
	    $('.active').removeClass('active');
	    $('.suchen').toggleClass('active');
	});

	$('.impressum').click(function() {
	    loadContent('content/impressum.xhtml');
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
    });
    
    $('body').on('click', '.search-btn', function (evt) {
        loadContent('content/shop.xhtml');
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
        
        $('.modal-title').text(items[0].getName());
        $('.modal-image').html('<img src="'+items[0].getBildUrl()+'" alt="..." />');
        $('.product-page').modal('show')

    });
});

