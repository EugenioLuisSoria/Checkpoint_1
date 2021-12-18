let autos = require ("./autos")

const concesionaria = {
    autos : autos,
    buscarAuto : function(patente){
            let k=1
            for (i=0;i<autos.length;i++){ 
                if (autos[i].patente==patente){
                    console.log("La patente se encuentra en el listado!");
                    console.log(autos[i]);
                    return (autos[i])
                }else if (autos[i].patente!=patente){
                    return null;        
                }         
            }
    }

}

concesionaria.buscarAuto("JA123")