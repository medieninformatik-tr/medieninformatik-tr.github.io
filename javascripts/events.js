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
	    data.getAll().forEach(function(item) {
		  $('.products').append( productElement(item) );
	    });
	});
	$('.impressum').click(function() {
	    loadContent('content/impressum.xhtml');
	    $('.active').removeClass('active');
	    $('.impressum').toggleClass('active');
	});
	
	// Das Event wird persistent auch auf alle neu erstellten Elemente mit der Klasse .category gelegt
	$('body').on('click', '.category', function (evt) {
        $('.category').removeClass('active');
        $(this).toggleClass('active');
        
        $('.products').empty();
        
        data.getShoes({category: $(this).attr("data-id")}).forEach(function(item) {
		  $('.products').append( productElement(item) );
	    });
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
        
        $('.products').empty();
        
        data.getShoes({term: term}).forEach(function(item) {
		  $('.products').append( productElement(item) );
	    });
    });
    
    $('body').on('click', '.delete-btn', function (evt) {
        cart.deleteItem($(this).attr('data-id'));
        
        $('.cart').empty();
        $('.cart').append( cartBlock(cart.getItems()) );
    });
});

