function Laufschuh(xml){
  this.klasse="Laufschuh";
  this.inst=xml;
  
  this.daempfung;
}

function getDaempfung(){
    return this.daempfung;
}
function setDaempfung(daempfung){
     this.daempfung = daempfung;
} 

Laufschuh.prototype=Sportschuh.prototype;
Laufschuh.prototype["getDaempfung"]=getDaempfung;
Laufschuh.prototype["setDaempfung"]=setDaempfung;