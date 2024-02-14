class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
        return this.idPersona + " " +  this._nombre + " " + this._apellido
    }
    // sobreescribiendo el  metodo de la clase padre (object)
    toString(){
        //Se aplica poliformismo (multiples formas de tiempo de ejeción)
        // El metodo que se ejecuta depende si es una referencia de tipo
        // padre o de tipo hijo.
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde metodo stactic");
    }

    static saludar2(persona){
        console.log(persona._nombre + " " + persona._apellido);
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
    console.log(persona1.toString());

    let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
    console.log(empleado1.toString());
    
    console.log(Persona.contadorPersonas);

    let persona2 = new Persona("Karla", "Ramirez", );
    console.log(persona2.toString());
    console.log(Persona.contadorPersonas);