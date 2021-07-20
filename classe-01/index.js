const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro', 'Caruaru', 'Campinas'];


// Como eu tenho apenas o parâmetro x na arrow function, eu posso retirar os parênteses
// Quando eu tenho um return de uma linha, ou seja, uma condicional simples, eu posso retirar as chaves e o return ao mesmo tempo
// Então a callback ficaria x => x.length <= 8
const cidadesFiltradas = cidades.filter((x) => {
    return x.length <= 8;
    // Que é o mesmo que
    /*
    if (x.length <= 8) {
        return true;
    } else {
        return false;
    }
    */
});

console.log(cidadesFiltradas.join(", "));