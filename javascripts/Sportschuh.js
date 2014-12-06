function Sportschuh() {
	this.id;
	this.name;
	this.kategorie;
	this.zielgruppe;
	this.groesse_von;
	this.groesse_bis;
	this.marke;
	this.farbe;
	this.bildUrl;
}

Sportschuh.prototype = {
    methods: ["getId","setId", "getName","setName", "getKategorie", "setKategorie", "getZielgruppe","setZielgruppe", "getGroesseVon","setGroesseVon", "getGroesseBis","setGroesseBis", "getMarke","setMarke", "getFarbe","setFarbe"],
    
    getId: function (){
        return this.id;
    },
    setId: function (id){
     	this.id = id;
    },
    getName: function () {
        return this.name;
    },
    setName: function (name){
     	this.name = name;
    },
    getKategorie: function (){
        return this.kategorie;
    },
    setKategorie: function (kategorie){
     	this.kategorie = kategorie;
    },
    getZielgruppe: function (){
        return this.zielgruppe;
    },
    setZielgruppe: function (zielgruppe){
     	this.zielgruppe = zielgruppe;
    },
    getGroesseVon: function (){
        return this.groesse_von;
    },
    setGroesseVon: function (groesse_von){
     	this.groesse_von = groesse_von;
    },
    getGroesseBis: function (){
        return this.groesse_bis;
    },
    setGroesseBis: function (groesse_bis){
     	this.groesse_bis = groesse_bis;
    },
    getMarke: function (){
        return this.marke;
    },
    setMarke: function (marke){
     	this.marke = marke;
    },
    getFarbe: function (){
        return this.farbe;
    },
    setFarbe: function (farbe){
     	this.farbe = farbe;
    },
    getBildUrl: function (){
        return this.bildUrl;
    },
    setBildUrl: function (bildUrl){
     	this.bildUrl = bildUrl;
    }
}