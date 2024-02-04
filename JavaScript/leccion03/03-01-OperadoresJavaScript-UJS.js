// Ejemplo de AND (&&), regresa tru solo si ambos operandos son true
let a = 5;
let ValMin= 0, ValMax = 10;

if ( a >= ValMin && a <= ValMax){
    console.log( "Dentro del rango");
}
else{
    console.log("Fuera de rango");
}
// Ejemplo de OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = true;

if( vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre esta ocupado");
}
