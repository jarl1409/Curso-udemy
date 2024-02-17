class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return  `Empleado: nombre ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento=departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo._departamento);
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Juan', 3000);
let gertente1 = new Gerente('Carlos','5000','sistemas');

determinarTipo( empleado1);

determinarTipo( gertente1);