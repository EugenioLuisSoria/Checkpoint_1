/*
let a = 
    {clave1 : 1,
    clave2 : 2,
    clave3 : 3,
    clave4 : 4,
    }   

console.log(a.clave1);  //  1 

const autos = require("./autos");
*/

let a = [
{   clave1 : "Eugenio",
    clave2 : 2,
    clave3 : 3,
    clave6 : 4,
},
{   clave5 : "Eugenio",
    clave6 : 6,
    clave1 : "Holis!",
    clave8 : 8,
}      
]
//console.log(a[0].clave1);


function buscar(n){
    for (i=0;i<a.length;i++){
        // 1º hay q saber si es que está el valor de la calve:
        if (a[i].clave6==n){
            console.log("ESTAAA!");
        }
        }
/*
        }
        if (autos[i].clave >= 0 ) {
            console.log("caca");
        } */
}

 
//buscar("Eugenio")
buscar(6)
