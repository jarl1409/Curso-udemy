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

// concatenar cada valor de cada propiedad
console.log( persona.nombre + "," + persona.apellido);

// for in
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Object.values
let personaArray = Object.values ( persona );
console.log(personaArray);

// JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);