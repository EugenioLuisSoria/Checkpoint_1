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
    buscarAuto : function(patente,vender){
            if ( vender == undefined) {
                let k=1
                for (i=0;i<autos.length;i++){ 
                    if (autos[i].patente==patente){
                        console.log("La patente se encuentra en el listado!")
                        console.log(autos[i]);
                        return autoi[i]
                    } else if (autos[i].patente!=patente){
                        k = 0;        
                    }         
                if (k == 0 ) {
                    console.log("La patente no se encuenta en el listado");
                }
                }
            }else if (vender == 1){
                for (i=0;i<autos.length;i++){ 
                    if (autos[i].patente==patente){
                        console.log("La patente se encuentra en el listado!")
                        autos[i].vendido = true
                        return (console.log(autos[i]))
                    }
            }
    }
    },
    venderAuto : function(patente){
        vender = 1 
        busquedaActual = this.buscarAuto(patente, vender)
        console.log("Vendidooooo!!");
    }
}    


concesionaria.venderAuto("APL123")
