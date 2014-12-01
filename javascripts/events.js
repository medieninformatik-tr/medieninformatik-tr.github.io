$(document).ready(function(){
	var data = new Schuhdaten('xml/schuhdaten.xml');
	
	data.init();
	
	data.getAll().forEach(function(item) {
		var element = new HtmlElement(item);
		
		$('.products').append(element.get());
	});
});