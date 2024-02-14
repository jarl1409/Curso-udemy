class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca)
        this._idRaton= ++Raton.contadorRatones; 
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [IdRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

let raton1= new Raton('Usb', 'HP', );
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth', 'Dell')
raton2.marca = 'HP'
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado('Bluetooth', 'VSG');
let teclado2 = new Teclado('USB','Acer');
console.log(teclado1.toString());
console.log(teclado2.toString());


class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

let monitor1 = new Monitor('Dell', '27');
let monitor2 = new Monitor('HP', '15');
console.log(monitor1.toString());
console.log(monitor2.toString());


class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}


let computadora1 = new Computadora('HP', monitor1, teclado2, raton2);
let computadora2 = new Computadora('Armada', monitor2, teclado2, raton2);
console.log(computadora1.toString());
console.log(computadora2.toString());


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    } 
    agregarComputadora(computadora){}
    mostrarOrden(){}
    toString(){
        return 'Orden: ' + this._idOrden + ', ' + this._computadoras;
    }
}