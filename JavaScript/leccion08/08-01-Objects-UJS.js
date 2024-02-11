let persona ={
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@email.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

persona.tel = "33211233";

console.log(persona);

delete persona.tel;

console.log(persona);
