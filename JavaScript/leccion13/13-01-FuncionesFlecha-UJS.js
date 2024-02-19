let miFuncion = function (){
    console.log('Saludos desde mi función');
}

// const miFuncionFlecha = ()=> {
//     console.log('Saludos desde mi función flecha');
// }

// const miFuncionFlecha = () => console.log('Saludos desde mi función flecha');

miFuncion();
// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función flecha';
// }

const saludar = () => 'Saludos desde función flecha';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lopez'});
console.log(regresaObjeto());

// const funcionConParametros = (mensaje) => console.log( mensaje );
const funcionConParametros = mensaje => console.log( mensaje );
funcionConParametros ('Saludos con parametros')

const funcionConVariosParametrosClasico = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}

console.log( funcionConVariosParametrosClasico(5,5));


const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3,7));
