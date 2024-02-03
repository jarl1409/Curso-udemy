let a = 3, b = 2, c = 1,  d = 4;

let z = a * b + c / d;
// Se multiplica y divide primero, luego se suman esos dos resultados
console.log(z);


z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
// (1+3) * 2 / 1 = 8
console.log(z);

