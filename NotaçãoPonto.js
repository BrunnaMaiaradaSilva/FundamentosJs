console.log( typeof console)
console.log(Math.ceil(6.1))

const anything = {}
anything.nome = 'Oi'
console.log(anything.nome)

function Obj(nome) {
    this.nome = nome //this torna a função pública
    this.exec = function () {
        console.log('Exec...')
    }
}

const anything2 = new Obj('Cadeira')
const anything3 = new Obj('Mesa')

console.log(anything2.nome)
console.log(anything3.nome)
anything3.exec()
