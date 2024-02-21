miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('Función 1');
}

function miFuncion2(){
    console.log('Función 2');
}

//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback ( `Resultado: ${res} `);
}
sumar(5,3,imprimir);


// Llamadas asíncronas con uso setTimeout

function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 seg');
}
setTimeout(miFuncionCallback, 3000);//Despues de 3 segundos

setTimeout( function(){console.log('saludo asíncrono 2')}, 5000);

setTimeout( () => console.log('saludo asíncrono 3'), 7000);