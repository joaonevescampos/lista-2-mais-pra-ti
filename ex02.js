// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const input = require('prompt-sync')();

const guessGame = () => {
    const randomNumber = Math.random().toFixed(2)*100
    let guess = null;
    let i = 1;
    console.log('Estou pensando num número entre 0 a 100.');
    while(guess !== randomNumber) {

        guess = Number(input('Digite seu palpite: '));

        if(guess === randomNumber) {
            console.log(`Parabéns! Você acertou depois de ${i} tentativas!`);
        } else if (guess > randomNumber) {
            console.log('Que pena! Não é este número. O número que pensei é menor!');
        }else {
            console.log('Que pena! Não é este número. O número que pensei é maior!');
        }
        i++
    }
}

guessGame();