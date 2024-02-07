// Declaración de la función
function miFuncion( a, b ){
    return a + b;
}

// Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

// declaración de una funtion de tipo expresión
let sumar = function(a, b){return a+ b};

resultado = sumar (1, 2);
console.log(resultado);

(function (a, b){
    console.log("Ejecutando la función: " + (a + b));
})(3, 4);