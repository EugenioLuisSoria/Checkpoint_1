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
            if (this.autos[i].patente==patente){
                return true
            }else if (autos[i].patente!=patente){
                return null;   
            }
    }
    },
    venderAuto : function(patente){
        if (this.buscarAuto(patente) === true){
            for (i=0;i<autos.length;i++){ 
                this.autos[i].vendido = true;
                return this.autos[i] = true;
            }
            console.log(this.autos[i])
            }
        
    },
    autosParaLaVenta : function(){
        let autosParaVender = this.autos.filter(function(n){
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
concesionaria.venderAuto("JJK116")
