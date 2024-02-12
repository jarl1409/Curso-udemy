class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this.apellido;
    }
    set apellido(apellido){
    this._apellido = apellido
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido
    }
    }

    class Empleado extends Persona{
        constructor (nombre, apellido, departamento){
            super(nombre, apellido);//Llamar constructor de la clase padre
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        // Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto() + ", " + this._departamento + ".";
        }
    }

    let persona1 = new Persona("Carlos", "Perez");
    console.log(persona1);

    let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
    console.log(empleado1);
// Hereda los metodo get y set de la clase padre (Persona)
    console.log(empleado1.nombreCompleto());
