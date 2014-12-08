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
	    appendItems( data.getAll() );
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
        
        $('.modal-content').html( singleProductPage(items[0]) );
        $('.modal-page').modal('show');
    });
    
    $('body').on('click', '.buy-btn', function (evt) {
        $('.modal-content').html( cartPage(cart.getItems()) );
        $('.modal-page').modal('show');

    });
});

