let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    nombreCompleto: function( titulo, tel){
        // return this.nombre + " " + this.apellido;
        return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara",
}

// uso de call para usar
// el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto("Lic.", "12434123"));

let arreglo = ["Ing.", "312345513"];
console.log( persona1.nombreCompleto.apply(persona2, arreglo) );


