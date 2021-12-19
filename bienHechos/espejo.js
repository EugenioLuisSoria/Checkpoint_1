let autos = require("./autos")

const concesionaria = {
    autos : autos,
    buscarPatente : function(patente) { 
        for (i=0;i<autos.length;i++){ 
            if (this.autos[i].patente==patente){
            console.log("La patente: " + patente + " está.");
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
                    return true
                }
                else{k++}
            }
            if (k>0){
            return null}

    },
    venderAuto : function(patente){
        for (i=0;i<this.autos.length;i++){ 
            if (this.buscarAuto(patente) == true){
                this.autos[i].vendido = true
            };
        console.log(autos[i]);       
        return this.autos[i];
        }
    },
    autosParaLaVenta : function(){
        let autosParaVender = autos.filter(function(n){
            return n.vendido == false
        }
        )
        console.log(autosParaVender)
        return autosParaVender
       
    },
    autosNuevos : function(){
        let autos0KM = []
        for(i=0;i<autos.length;i++){
            if(autos[i].km <= 100 && autos[i].vendido == false){
              autos0KM.push(autos[i])
            }
        }
        console.log(autos0KM)
        return autos0KM
}


};


console.log("-----------------------")
concesionaria.autosParaLaVenta()
console.log("-----------------------")

console.log("-----------------------")
