let autos = require ("./autos")

const concesionaria = {
    listado : autos,
    buscarPatente : function(patente){
            let k=1
            for (i=0;i<autos.length;i++){ 
                // 1º hay q saber si es que está el valor de la calve:
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