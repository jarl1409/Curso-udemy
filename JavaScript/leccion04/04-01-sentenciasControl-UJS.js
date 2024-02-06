let hora = "10am";
let mensaje;

if ( hora == "6am" || hora == "7am" || hora == "8am" || hora == "9am" || hora == "10am" || hora == "11am"){
    mensaje = "Buenos dias <3"
}
else if ( hora == "12pm" || hora == "13pm" || hora == "14pm" || hora == "15pm" || hora == "16pm" || hora == "17pm" || hora == "18pm"){
    mensaje = "Buenas tardes <3"
}
else if ( hora == "19pm" || hora == "20pm" || hora == "21pm" || hora == "22pm" || hora == "23pm" || hora == "24pm"){
    mensaje = "Buenas noches <3"
}
if ( hora == "0am" || hora == "1am" || hora == "2am" || hora == "3am" || hora == "4am" || hora == "5am"){
    mensaje = "Durmiendo UnU"
}
console.log(mensaje);