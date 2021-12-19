let autos = require("./autos")
const concesionaria = {
    autos : autos,
    buscarPatente : function(patenteN) { 
        for (i=0;i<autos.length;i++){ 
            if (this.autos[i].patente==patenteN){
            console.log("La patente: " + patenteN + " está.");
            return
            }
            
        }
    }
}


concesionaria.buscarPatente("JJK116")