// Armazenando uma função em uma variável

const imprimirsoma = function(a, b) {
    console.log(a + b)
}

imprimirsoma(2, 4)

//Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 6))

// Retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(6, 9))


