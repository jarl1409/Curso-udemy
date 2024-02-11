// Funcion contructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

Persona.prototype.tel = "312233123"

let padre = new Persona("Juan", "Perez", "Jpereasdas12s@mail.com");
padre.tel = "123412312"

let madre = new Persona ("Laura", "Quintero", "Lquintero@email.com");
madre.tel = "341232345"

console.log(padre.tel);
console.log(madre.tel);
