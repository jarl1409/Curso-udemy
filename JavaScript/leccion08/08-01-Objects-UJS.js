let x = 10;

let persona ={
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@email.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);

console.log(persona);


let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.telefono = "12333124";
console.log(persona2);