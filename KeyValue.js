const hi = 'E, ai!' //key - value (contexto léxico)

function exec() {
    const hallo = 'Guten?'
    return hallo
}

//Objetos são grupos aninhados de pares key - value

const client = {
    nome: 'Pierre',
    idade: '45',
    peso: '75',
    endereço: {
        Logradouro: 'Sua casa',
        numero: 'Seu'
    } 
}

console.log(hi)
console.log(exec())
console.log(client)