$(document).ready(function(){
	
	var data = new Repository('xml/schuhdaten.xml');
	data.init();
	
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
});