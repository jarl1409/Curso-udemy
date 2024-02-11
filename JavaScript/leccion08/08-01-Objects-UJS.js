// Funcion contructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona("Juan", "Perez", "Jpereasdas12s@mail.com");
console.log(padre.nombreCompleto());

let madre = new Persona ("Laura", "Quintero", "Lquintero@email.com");
console.log(madre.nombreCompleto());

padre.nombre = "carlos";
console.log(padre);
console.log(madre);


var miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

console.log(miCadena2);

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean1 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion1 = function(){};