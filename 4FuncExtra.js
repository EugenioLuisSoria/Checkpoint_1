let autos = require ("./autos")
//console.log(autos)

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
                return true
            }else if (autos[i].patente!=patente){
                return null;   
            }
    }
    },
    venderAuto : function(patente){
        if (this.buscarAuto(patente) == true){
            for (i=0;i<autos.length;i++){ 
                if (autos[i].patente==patente){
                    autos[i].vendido = true;
                    return autos[i].vendido == true;
                }else {return null}
            }
        }
    },
    autosParaLaVenta : function(){
        let autosParaVender = autos.filter(function(n){
            return n.vendido == false
        }
        )
        console.log(autosParaVender)
       
    }
}

//console.log("atuos para la venta")
concesionaria.autosParaLaVenta()
//console.log("vendiendo un auto")
concesionaria.venderAuto("APL123")
//console.log(autos)
//console.log("nuevo listado de autos para vender")
concesionaria.autosParaLaVenta()
