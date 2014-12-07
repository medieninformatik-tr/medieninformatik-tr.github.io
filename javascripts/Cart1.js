
function Cart(repository){
	this.klasse = "Cart";
	this.items = [];
	this.repository = repository;
}

Cart.prototype={
    methods: ["getName","setName"],
    
    addItem: function(id) {
	    items = this.repository.getShoes({id: id});
	    
	    this.items = this.items.concat(items);
    },
    deleteItem: function(id) {
	    var newitems = [];
	    for(var i in this.items) {
	        if(this.items[i].getId() != id) {
	            newitems.push(this.items[i]);
	        }
	    }
	    
	    this.items = newitems;
    },
    getItems: function(id) {
	    return this.items;
    }
}
