//Conceito de atribuição por valor e atribuição por referência
let valor //gera um undefined, variável não inicializada
console.log(valor)

valor = null 
//ausência de valor, null não aponta para nenhum endereço de memória, ausência de valor

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined de forma explícita
console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
