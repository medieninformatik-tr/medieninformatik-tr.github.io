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
	$('.impressum').click(function() {
	    loadContent('content/impressum.xhtml');
	    $('.active').removeClass('active');
	    $('.impressum').toggleClass('active');
	});
});