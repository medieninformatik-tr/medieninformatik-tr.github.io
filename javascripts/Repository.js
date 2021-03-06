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
    methods: ["init","getCategories", "getShoes"],
    
    /* ---------------------------------------------------------------------- 
    Methode: init
    Parameter: none
    Return: none    
    ---------------------------------------------------------------------- */
    init: function() {
	    var data = this.data;
	    
        $.ajax({
	        async:false,
        	url:this.xmlPath,
            success: function(xml){
                // Sucht die Kategorien in den XML-Daten
            	$(xml).find('schuhkategorien').find('kategorie').each(function() {
	            	if ($(this).attr('id') && $(this).attr('name')) {
	            	    data.categories[ $(this).attr('id') ] = $(this).attr('name');
	            	}
            	});
            	
            	// Sucht die Artikel in den XML-Daten
            	$(xml).find('schuhkatalog').find('kategorie').each(function() {
	            	var categoryId = $(this).attr('id');
	            	
	            	$(this).find('artikel').each(function() {
		            	// Erstellt entweder ein Sportschuh- oder Laufschuh-Objekt
		            	if (data.categories[categoryId] == "Laufschuhe") {
		            	    var shoe = new Laufschuh();
		            	        shoe.setDaempfung("1");
		            	}
		            	else {
		            	    var shoe = new Sportschuh();    
		            	}
		            	
		            	// Sucht die Artikelfelder und schreibt sie in das Schuh-Objekt
		            	shoe.setId( $(this).attr('id') );
		            	shoe.setName( $(this).find('name').text() );
		            	shoe.setKurzbeschreibung( $(this).find('kurzbeschreibung').text() );
		            	shoe.setBeschreibung( $(this).find('beschreibung').text() );
		            	shoe.setKategorie( categoryId );
		            	shoe.setZielgruppe( $(this).find('zielgruppe').text() );
		            	shoe.setGroesseVon( $(this).find('groesse_von').text() );
		            	shoe.setGroesseBis( $(this).find('groesse_bis').text() );
		            	shoe.setMarke( $(this).find('marke').text() );
		            	shoe.setFarbe( $(this).find('farbe').text() );
		            	shoe.setBildUrl( $(this).find('bild').text() );
		            	shoe.setPreis( parseFloat($(this).find('preis').text()) );
		            	
		            	data.shoes.push(shoe);
	            	});
            	});
            },
            dataType:"xml"
        }); 
    },
    
    /* ---------------------------------------------------------------------- 
    Methode: getCategories
    Parameter: none
    Return: categories[]
    ---------------------------------------------------------------------- */
    getCategories: function () {
	    return this.data.categories;
    },
    
    /* ---------------------------------------------------------------------- 
    Methode: getShoes
    Parameter: searchParameters{}
    Return: shoeObjects[]
    ---------------------------------------------------------------------- */
    getShoes: function (parameters) {
        var res = [];
        if(parameters) {
	       for (var s in this.data.shoes) {
	           var shoe = this.data.shoes[s];
	           
	           if ( parameters.hasOwnProperty('category') && parameters.category == shoe.getKategorie() ) {
	               res.push(shoe);  
	           }
	           
	           if ( parameters.hasOwnProperty('id') && parameters.id == shoe.getId() ) {
	               res.push(shoe);  
	           }
	           
	           if ( parameters.hasOwnProperty('term') ) {
	               var regex = new RegExp(parameters.term, "i");
	               
	               if(shoe.getName().search(regex) > -1) {
	                   res.push(shoe); 
	               }
	           }
	           
	           if ( parameters.hasOwnProperty('pricefrom') || parameters.hasOwnProperty('pricefrom') ) {
	               if (parameters.pricefrom && parameters.priceto && shoe.getPreis() > parameters.pricefrom && shoe.getPreis() < parameters.priceto ) {
	                   res.push(shoe);  
	               }
	               else if (parameters.pricefrom && !parameters.priceto && shoe.getPreis() > parameters.pricefrom) {
	                   res.push(shoe);  
	               }
	               else if (parameters.priceto && !parameters.pricefrom && shoe.getPreis() < parameters.priceto) {
	                   res.push(shoe);  
	               }
	               else if (!parameters.pricefrom && !parameters.priceto) {
	                   res.push(shoe);
	               }    
	           }
	       }
	    }
	    else {
	        res = this.data.shoes;
	    }
	    return res;
    }
}
