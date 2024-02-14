class Empleado extends Persona{
    static contadorEmpleados =0;
    constructor(sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._Sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._Sueldo
    }
    set sueldo(sueldo){
        return this._Sueldo;
    }

    toString(){
        return `${super.toString()} 
        ${this._idEmpleado} 
        ${this._Sueldo}`;
    }
}