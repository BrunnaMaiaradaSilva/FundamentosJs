//Função sem retorno
function imprimirsoma(a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)
imprimirsoma(7) 
imprimirsoma(2, 3, 4, 5, 6)

//Função com retorno
function soma(a,b = 0) {
    return a + b
}

console.log(soma(6, 9))
console.log(soma(2))
console.log(soma())