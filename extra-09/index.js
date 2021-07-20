const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

let novoArray = pessoas.filter(x => x.profissao === "Programador" && x.idade > 20);
console.log(novoArray);

novoArray = pessoas.filter(x => x.profissao === "Jornalista" && x.idade > 30);
console.log(novoArray);

novoArray = pessoas.filter(x => (x.profissao === "Programador" || x.profissao === "Jornalista") && x.idade <= 29);
console.log(novoArray);