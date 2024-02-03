// Ejemplos de tipos de 
// datos en JavaSrcipt

// Tipo de dato String
var nombre = "Carlos";

console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);


// Tipo de dato numerico
var numero = "1000"
console.log(numero)

// Tipo de dato Object

var objeto = {
    nombre : "juan",
    apellido : "Perez",
    telefono : "1212123441"
}

console.log(typeof objeto)

// Tipo de dato boolean (true,false)

var bandera = false;
console.log(typeof bandera);

// Tipo de dato function
function mifuncion(){}
console.log(typeof mifuncion)

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}

console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(x);

x = undefined;
console.log(x);

// null = ausencia de valor
var y = null
console.log(y);