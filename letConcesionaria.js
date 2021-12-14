let autos = require ("./autos")

const concesionaria = {
    autos : autos,
    buscarPatente : function(patente){
            let k=1
            for (i=0;i<autos.length;i++){ 
                if (autos[i].patente==patente){
                    console.log("La patente se encuentra en el listado!");
                    return (autos[i].vendido = true )
                }else if (autos[i].patente!=patente){
                    k = 0;        
                }         
            }
            if (k == 0 ) {
                console.log("La patente no se encuenta en el listado");
            }
    }

}

concesionaria.buscarPatente("APL123")
//console.log(concesionaria.autos);