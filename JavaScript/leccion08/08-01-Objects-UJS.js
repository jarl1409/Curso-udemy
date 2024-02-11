// Funcion contructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Juan", "Perez", "Jpereasdas12s@mail.com");
console.log(padre);

let madre = new Persona ("Laura", "Quintero", "Lquintero@email.com");
console.log(madre);

padre.nombre = "carlos";
console.log(padre);
console.log(madre);

