// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

const debounce = (fn, delay) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const search = (value) => {
  console.log('Buscando por:', value);
}

const searchDebounce = debounce(search, 3000)

document.getElementById('input-debounce').addEventListener('input', (event) => {
    debounce(searchDebounce(event.target.value))
})