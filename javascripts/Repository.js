/* Anwendungsklasse Schuhshop */
function Repository(xmlPath){
	this.klasse = "Repository";
	this.data = {
		categories: [],
		shoes: []
	};
	this.xmlPath = xmlPath;
}

Repository.prototype={
    methods: ["getName","setName"],
    
    init: function() {
	    var data = this.data;
	    
        $.ajax({
	        async:false,
        	url:this.xmlPath,
            success: function(xml){
            	$(xml).find('schuhkategorien').find('kategorie').each(function() {
	            	if ($(this).attr('id') && $(this).attr('name')) {
	            	    data.categories[ $(this).attr('id') ] = $(this).attr('name');
	            	}
            	});
            	
            	$(xml).find('schuhkatalog').find('kategorie').each(function() {
	            	var categoryId = $(this).attr('id');
	            	
	            	$(this).find('artikel').each(function() {
		            	var shoe = new Sportschuh();
		            	
		            	shoe.setId( $(this).attr('id') );
		            	shoe.setName( $(this).find('name').text() );
		            	shoe.setKategorie( categoryId );
		            	shoe.setZielgruppe( $(this).find('zielgruppe').text() );
		            	shoe.setGroesseVon( $(this).find('groesse_von').text() );
		            	shoe.setGroesseBis( $(this).find('groesse_bis').text() );
		            	shoe.setMarke( $(this).find('marke').text() );
		            	shoe.setFarbe( $(this).find('farbe').text() );
		            	shoe.setBildUrl( $(this).find('bild').text() );
		            	
		            	data.shoes.push(shoe);
	            	});
            	});
            },
            dataType:"xml"
        }); 
    },
    
    getAll: function() {
	    return this.data.shoes;
    },
    
    getCategories: function () {
	    return this.data.categories;
    },
    
    getShoes: function (parameters) {
	    
    }
}
