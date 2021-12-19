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
    },
    buscarAuto : function(patente){
            let k=0
            for (i=0;i<autos.length;i++){ 
                if (autos[i].patente==patente){
                    //console.log("La patente se encuentra en el listado!");
                    console.log(autos[i]);
                    return (autos[i])
                }
                else{k++}
            }
            if (k>0){
            return null}

    }
}


//console.log(concesionaria.buscarAuto("APL123"))
concesionaria.buscarAuto("JJK116")