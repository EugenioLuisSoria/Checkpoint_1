let autos = require ("./autos")

const concesionaria = {
    listado : autos,
    buscarPatente : function(patente){
            for (i=0;i<autos.length;i++){
                // 1º hay q saber si es que está el valor de la calve:
                if (autos[i].patente==patente){
                    console.log("La patente se encuentra en el listado!");
                } else {
                    console.log("No se encuentra la patente en el listado");
                    
        }
   
        };
    }
}



concesionaria.buscarPatente("APL123")