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
    console.log('Incio promesa');
    setTimeout( ()=>resolver('Saludos con promesa y timeout'), 3000);
    console.log('Fin promesa');
});

promesa.then(valor => console.log(valor));


