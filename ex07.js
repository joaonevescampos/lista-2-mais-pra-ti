// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    {nome: 'TV', preco: 3000},
    {nome: 'cafeteira', preco: 200},
    {nome: 'smartphone', preco: 2400},
    {nome: 'Monitor', preco: 1000},
    {nome: 'Led', preco: 100},
    {nome: 'Mesa', preco: 500},
    {nome: 'Sofá', preco: 5000},
    {nome: 'Notebook', preco: 3500},
    {nome: 'Alexa', preco: 300},
]

const productsOrdenated = () => {
    const produtosOrdenados = produtos.sort((product, nextProduct) => product.preco - nextProduct.preco); //ordena os produtos
    const nomesOrdenados = produtosOrdenados.map(produto => produto.nome); //cria um array somente com os nomes dos produtos do array anterior
    console.log(nomesOrdenados)
}

productsOrdenated()