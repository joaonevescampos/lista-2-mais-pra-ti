// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.
const arrayDePares = [['nome', 'João'], ['idade', 27]]
const objeto = {
    nome: 'João',
    idade: 27
}

function paresParaObjeto(pares) {
    const obj = {}
    for(par of pares) {
        obj[par[0]] = par[1]
    }
    return obj
}

function objetoParaPares(obj) {
    const pares = []
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares
}

console.log(paresParaObjeto(arrayDePares));
console.log(objetoParaPares(objeto));

