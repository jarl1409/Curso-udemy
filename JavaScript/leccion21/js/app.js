const ingresos = [
    new Ingreso ('salario', 2000),
    new Ingreso ('Venta Coche', 1500)
];

const egresos = [
    new Egreso ('Renta Departamento',900),
    new Egreso ('Ropa', 400)
];

let cargarApp = () =>{
    cargarCabecero();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos =()=>{
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}



let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentajeEgresos;
    document.getElementById('ingresos').innerHTML = totalIngresos();
    document.getElementById('egresos').innerHTML = totalEgresos();
}
