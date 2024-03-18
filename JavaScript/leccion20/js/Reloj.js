const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['ene', 'feb', 'mar', 'abr', 'may', ' jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dec'];
    const dias =['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora = (hora)=>{
    if(hora< 10)
    hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);
