let autos = require ("./autos")

const concesionaria = {
    listado : autos,
    buscarPatente : function(patente){
        console.log(autos.indexOf(patente))
        
    },
   
};



console.log(concesionaria.buscarPatente("aaa123"));
