$(document).ready(function(){
	
	var data = new Schuhdaten('xml/schuhdaten.xml');
	data.init();
	
	// Navigationsevents
	loadContent('content/start.xhtml');
	
	$('.start').click(function() {
	    loadContent('content/start.xhtml');
	    $('.active').removeClass('active');
	    $('.start').toggleClass('active');
	});
	$('.shop').click(function() {
	    loadContent('content/shop.xhtml');
	    $('.active').removeClass('active');
	    $('.shop').toggleClass('active');
	    
	    data.getAll().forEach(function(item) {
		  var element = new HtmlElement(item);
		  $('.products').append(element.get());
	    });
	});
	$('.impressum').click(function() {
	    loadContent('content/impressum.xhtml');
	    $('.active').removeClass('active');
	    $('.impressum').toggleClass('active');
	});
});