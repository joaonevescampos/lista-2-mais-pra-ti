// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.


const ehDataValida = (dia, mes, ano) => {
    const date = new Date(ano, mes - 1, dia);
    const isValidDate = date.getDate() === dia && date.getMonth() === mes - 1 && date.getFullYear() === ano;
    return isValidDate;
}

console.log(ehDataValida(28,2,2022));