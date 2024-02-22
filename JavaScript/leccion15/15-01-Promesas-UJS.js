let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvio correcto');
    else 
        rechazar('Se produjo un error');
});

// miPromesa.then(
    // valor => console.log(valor),
    // error => console.log(error)
// );

// miPromesa.then ( valor => console.log(valor)).catch(error=>console.log(error));

let promesa = new Promise((resolver) => {
    // console.log('Incio promesa');
    setTimeout( ()=>resolver('Saludos con promesa y timeout'), 3000);
    // console.log('Fin promesa');
});

// promesa.then(valor => console.log(valor));

// async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then (valor => console.log(valor));


