let persona ={
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@email.com",
    edad: 20,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);
