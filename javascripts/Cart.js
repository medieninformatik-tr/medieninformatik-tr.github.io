
function Cart(repository){
	this.klasse = "Cart";
	this.items = [];
	this.repository = repository;
}

Cart.prototype={
    methods: ["addItem","deleteItem", "getItems"],
    /* ---------------------------------------------------------------------- 
    Methode: addItem
    Parameter: shoeId
    Return: none
    ---------------------------------------------------------------------- */
    addItem: function(id) {
	    items = this.repository.getShoes({id: id});
	    
	    this.items = this.items.concat(items);
    },
    
    /* ---------------------------------------------------------------------- 
    Methode: deleteItem
    Parameter: shoeId
    Return: none
    ---------------------------------------------------------------------- */
    deleteItem: function(id) {
	    var newitems = [];
	    for(var i in this.items) {
	        if(this.items[i].getId() != id) {
	            newitems.push(this.items[i]);
	        }
	    }
	    
	    this.items = newitems;
    },
    
    /* ---------------------------------------------------------------------- 
    Methode: getItems
    Parameter: none
    Return: cartItems[]
    ---------------------------------------------------------------------- */
    getItems: function() {
	    return this.items;
    }
}
