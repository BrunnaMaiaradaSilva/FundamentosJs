// Operador de desestruturação

const pessoa = {
    nome: 'Brunna',
    idade: 23,
    endereco: {
        logradouro: 'Avenida Luis Antonio Brigadeiro',
        numero: 8,
        apartamento: 82
    }
}

const{ nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)