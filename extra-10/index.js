const notas = [6, 8, 9, 8, 20, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

let novoArray = [];

notas.forEach(x => {
    const verificaExistencia = novoArray.find(valor => valor === x);

    if (!verificaExistencia) {
        novoArray.push(x);
    }
});

console.log(novoArray);
