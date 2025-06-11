// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const uniqueWords = (phrase) => {
    const separetedWordsArray = phrase.split(" ");
    const uniqueWordsArray = []
    for(let i = 0; i < separetedWordsArray.length; i++) {
        let cont = 0;
        for(let j = 0; j < separetedWordsArray.length; j++) {
            if(separetedWordsArray[i] === separetedWordsArray[j]) {
                cont++
            }
       }
       if(cont === 1) {
            uniqueWordsArray.push(separetedWordsArray[i])
       }
    }

    if(uniqueWordsArray.length === 0) {
        return 'Não há palavras únicas na frase';
    }

    return uniqueWordsArray;
}

console.log(uniqueWords('ola ola mundo mundo'))
