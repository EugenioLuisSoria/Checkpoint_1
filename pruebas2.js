let autos = require ("./autos")

const concesionaria = {
    autos : autos,
    buscarPatente : function (patente) { 
        for (i=0;i<autos.length;i++){ 
        if (autos[i].patente==patente){
            console.log("La patente es: " + patente);
        }
        }
    },
    buscarAuto : function(patente){
        for (i=0;i<autos.length;i++){ 
            if (autos[i].patente==patente){
                console.log("La patente se encuentra en el listado!");
                console.log(autos[i]);
                return true
            }else if (autos[i].patente!=patente){
                return null;   
            }
    }
    },
    venderAuto : function(patente){
        
        if (this.buscarAuto(patente) == true){
            console.log("Se ha vendido este auto:");
        }
        for (i=0;i<autos.length;i++){ 
            if (autos[i].patente==patente){
                autos[i].patente = true;
                console.log("prueba");
                return this.autos[i].vendido = true;
            }else {return null}
    }



    }    
}

concesionaria.buscarPatente("hasd")
