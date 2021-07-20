const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'antonella', 'Alisson'];

const novoArray = nomes.filter(x => x.substr(0, 1).toLocaleUpperCase() === 'A');

console.log(novoArray);
