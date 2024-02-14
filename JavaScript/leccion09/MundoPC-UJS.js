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
        this._monitor = null;
        this._teclado = null;
        this._raton = null;
    }
    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton;
    }
    toString(){
        return 'Computadora ' + this._idComputadora + ': '
        + this._nombre + ' ' + this._monitor + ' ' + this._raton + ' ' + this._teclado;
    }
}

let computadora1 = new Computadora('HP');
console.log(computadora1.toString());

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