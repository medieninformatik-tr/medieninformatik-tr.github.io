function HtmlElement(shoe) {
	this.shoe = shoe;
}

HtmlElement.prototype = {
	get: function() {
		var html = "";
		
		html += '<div class="col-md-6 col-lg-4">';
		html += '<div class="thumbnail shoe-item">';
		html += '<img src="images/schuhdaten/1.jpg" alt="..." />';
		html += '<div class="caption">';
		html += '<h3>'+this.shoe.getName()+'</h3>';
		html += '<p>Lorem Ipsum</p>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		
		return html;
	}
}