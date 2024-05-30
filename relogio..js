const hora = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dataAtual = new Date();
    let hr = dataAtual.getHours();
    let m = dataAtual.getMinutes();
    let s = dataAtual.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (m < 10) m = '0' + m;

    if (s < 10) s = '0' + s;

    hora.textContent = hr;
    min.textContent = m;
    seg.textContent = s;
})


