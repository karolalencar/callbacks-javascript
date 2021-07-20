const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã", "jabuticaba", "ACEROLA"];

const frutasModificadas = frutas.map((fruta, indice) => {
    return `${indice} - ${fruta[0].toUpperCase()}${fruta.slice(1).toLowerCase()}`;
});

console.log(frutasModificadas);