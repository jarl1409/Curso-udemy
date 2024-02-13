class Persona{

static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona ++;
        console.log("Se incrementa contador" + Persona.contadorObjetosPersona);
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
    console.log(persona1);

    let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
    console.log(empleado1);
// Hereda los metodo get y set de la clase padre (Persona)
    console.log(empleado1.nombreCompleto());


console.log(empleado1.toString());


// persona1.saludar(); No es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);