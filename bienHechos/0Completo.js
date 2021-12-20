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
        
        console.log( "Estos son los autos para vender:")
        console.log(autosParaVender)
        return autosParaVender
       
    },
    autosNuevos : function(){
        let autos0KM = this.autosParaLaVenta().filter(function(m){
            return m.km < 100
        }
        )
        console.log("Estos son los 0KM para vender:")
        console.log(autos0KM)
        return(autos0KM)
    },
    listaDeVentas : function(){
            let lista = [0]
            let k = []
            for(i=0;i<this.autos.length;i++){
                if (autos[i].vendido == true){
                lista.push(this.autos[i].precio)
                }
            }
            console.log(lista)
            return(lista)                
    },
    totalDeVentas : function(){
        let listaDeVentas = this.listaDeVentas()
        let resultadoVentas = listaDeVentas.reduce(function(acum,precio){
            acum = 0
            return (acum + precio)
        })
        if (resultadoVentas[0]==0 || resultadoVentas.length > 1){
            resultadoVentas[0]= 3
            resultadoVentas.shift()
        }
        //console.log(resultadoVentas)

        return resultadoVentas
    }
   
}
        
        



concesionaria.totalDeVentas()