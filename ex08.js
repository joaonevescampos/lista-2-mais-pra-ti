// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
    {
        cliente: 'Joao',
        total: 2000
    },
    {
        cliente: 'Julio',
        total: 400
    },{
        cliente: 'Duda',
        total: 3000
    },{
        cliente: 'Maria',
        total: 100
    },{
        cliente: 'Janilson',
        total: 350
    },
     {
        cliente: 'Joao',
        total: 1000
    },
]

const reduceFunction = (vendas) => {
    return vendas.reduce((acumulador, venda) => {
        const {cliente, total} = venda
        acumulador[cliente] = (acumulador[cliente] || 0) + total;
        return acumulador
    }, {})
}

console.log(reduceFunction(vendas));
