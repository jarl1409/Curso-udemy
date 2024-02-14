class Cliente extends Persona{
    static contadorClientes = 0;

    constructor (fechaRegistro){
        this.idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this.contadorClientes;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
        ${this._idCliente} 
        ${this._fechaRegistro}`;
    }
}