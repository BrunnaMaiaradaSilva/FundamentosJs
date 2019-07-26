function tratarErro(erro) {
    throw new Error('...')
}

function gritar(obj) {
        try{
        console.log(obj.name.toUppercase() + '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('fim!')
    }
} 

const obj = {nome: 'Brunna'} //erro
gritar(obj) 