function Laufschuh(xml){
  this.klasse="Laufschuh";
  this.inst=xml;
}

function getDaempfung(){
 return "<p>Dies ist ein Laufschuh: "+this.inst.getElementsByTagName("Daempfung")[0].firstChild.data+" .</p>";
}
function setDaempfung(name){
     this.inst.getElementsByTagName("Daempfung")[0].firstChild.data=name;
    } 
Laufschuh.prototype=Sportschuh.prototype;
Laufschuh.prototype["methods"][Laufschuh.prototype["methods"].length]="getDaempfung";
Laufschuh.prototype["methods"][Laufschuh.prototype["methods"].length]="setDaempfung";
Laufschuh.prototype["getDaempfung"]=getDaempfung;
Laufschuh.prototype["setDaempfung"]=setDaempfung;