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
        console.log( "Estos son los autos para vender:" + autosParaVender)
        return autosParaVender
       
    },
    autosNuevos : function(){
        let autos0KM = this.autosParaLaVenta().filter(function(m){
            return m.km <= 100
        }
        )
        console.log(autos0KM)
    }
}
        
        

console.log("-----------------------");
concesionaria.venderAuto("JJK116")
console.log("-----------------------");
concesionaria.autosNuevos()
