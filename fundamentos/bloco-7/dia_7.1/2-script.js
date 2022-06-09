// 1- Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const receivedFatorNumber = () => {
    let fatorial = 6;
    let resultado = fatorial;
    let primeiroMultiplicador = fatorial - 1;
    for (let index = primeiroMultiplicador; index > 1; index -= 1) {
        resultado *= index;
        console.log(resultado);
    }
}
receivedFatorNumber()


// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
let big = "";

longestWord.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});

console.log(big);