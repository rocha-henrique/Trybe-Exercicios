// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!';
const awaking = () => 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const goDrinkCoffee = () => 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const goSleeping = () => 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(awaking);
doingThings(goDrinkCoffee);
doingThings(goSleeping);
