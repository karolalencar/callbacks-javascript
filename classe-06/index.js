const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho', 'Kico', 'Bibelô'];

const tempoJogador = 10 / (jogadores.length);

let i = 0;
const timeId = setInterval(() => {
    console.log(jogadores[i++])
    if (i === jogadores.length) {
        clearInterval(timeId);
        console.log("A rodada terminou!");
    }
}, tempoJogador * 1000);



