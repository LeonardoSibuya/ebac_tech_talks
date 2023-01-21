AOS.init();

const dataDoEvento = new Date("Apr 08, 2023 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMS = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distaciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distaciaAteEvento % diaEmMs) / HoraEmMS)
    const minutosAteEvento = Math.floor((distaciaAteEvento % HoraEmMS) / minutoEmMs)
    const segundosAteEvento = Math.floor((distaciaAteEvento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distaciaAteEvento < 0) {
        clearInterval(contaHoras)
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
}, 1000);