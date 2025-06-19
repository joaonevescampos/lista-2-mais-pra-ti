// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args); // cria uma chave única com base nos argumentos

    if (cache[key]) {
      console.log('Retornando do cache:', key);
      return cache[key];
    }

    console.log('Calculando e salvando no cache:', key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

//Testando cache com a função fatorial

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemo = memoize(fatorial);

console.log(fatorialMemo(5)); // Calcula e salva
console.log(fatorialMemo(5)); // Retorna do cache
