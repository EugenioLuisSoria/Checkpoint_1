

function Autos (marca, modelo, precio, km, color, cuotas, anio, patente, vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio ;
    this.km = km;
    this.color = color;
    this.cuotas = cuotas ;
    this.anio = anio;
    this.patente = patente ;
    this.vendido = vendido;
}

let auto1 = new Autos ("Toyota", "Ford", 150000, 200, "Azul", 12, 2019, "APL123", true);
let auto2 = new Autos ("Toyota", "Corolla", 100000, 0, "blanco", 14, 2019, "JJK116", true);
console.log( auto1 , auto2);



/* El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.




marca, modelo, precio, km, color, cuotas, anio, patente, vendido.*/