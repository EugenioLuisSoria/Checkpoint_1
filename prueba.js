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
                    autos[i].color = "asdlfjhasñldfhasñdlofhañsldjkhfñasjkldh";
                    return autos[i].color = "alksdhjfñlaksdhfñlajksdhf";
                }else {return }
            }
        }
        else { return };
    },
}

concesionaria.venderAuto("JJK116"),
console.log(autos)

    /*
    autosParaLaVenta : function(){
        let autosParaVender = autos.filter(function(n){
            return n.vendido == false
        }
        )
        console.log(autosParaVender)
        return autosParaVender = autosParaVender
    },
    autosNuevos : function(){
        let autos0KM = []
        for(i=0;i<autos.length;i++){
            if(autos[i].km <= 100 && autos[i].vendido == false){
              autos0KM.push(autos[i])
            }
        }
        console.log(autos0KM)
}
}

//concesionaria.autosParaLaVenta()
concesionaria.venderAuto("JJK116")
console.log(autos)
//concesionaria.autosNuevos()

*/