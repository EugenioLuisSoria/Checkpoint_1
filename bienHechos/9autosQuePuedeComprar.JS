// **************************************

let autos = require("./autos")

// **************************************

let personaJuan = {
    nombre : "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

// **************************************

const concesionaria = {
    autos : autos,
    buscarPatente : function(patente) { 
        for (i=0;i<autos.length;i++){ 
            if (this.autos[i].patente==patente){
            console.log("La patente: " + patente + " está.");
            return true
            }
            
        }
    },
    buscarAuto : function(patente){
            let k=0
            for (i=0;i<autos.length;i++){ 
                if (autos[i].patente==patente){
                    //console.log("La patente se encuentra en el listado!");
                    console.log(autos[i]);
                    return autos[i]
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
        
        //console.log( "Estos son los autos para vender:")
        //console.log(autosParaVender)
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
    },
    puedeComprar : function(patente, persona){
        let index = this.autos.indexOf(this.buscarAuto(patente))
        precioXPatente = this.autos[index].precio
        cuotoasXPatente = this.autos[index].cuotas
        if(precioXPatente <= persona.capacidadDePagoTotal && 
                             precioXPatente/cuotoasXPatente <= persona.capacidadDePagoEnCuotas){
            console.log("siiii, puede!!!")
            return true
        }else{
            console.log("noooo, no puede!!!")
            return false
            
        }
    },
    autosQuePuedeComprar : function(persona){
        let autosDisponibles = this.autosParaLaVenta().filter(function(m){
            let precioXCuota = (m.precio / m.cuotas)
            return (m.precio <= persona.capacidadDePagoTotal && precioXCuota <= persona.capacidadDePagoEnCuotas)
        }
        )
        console.log(autosDisponibles)
        return(autosDisponibles)
    }
}
          
    

//concesionaria.vvenderAuto("JJK116")
concesionaria.autosQuePuedeComprar(personaJuan)
   

        
        

