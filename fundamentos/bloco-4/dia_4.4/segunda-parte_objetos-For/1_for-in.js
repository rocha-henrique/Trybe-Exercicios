// 1- Imprima no console uma mensagem de boas-vindas para a personagem abaixo, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Seja Bem-vinda, " + info.personagem);

// 2- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console

info.recorrente = 'Sim';
console.log(info);

// 3- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(value in info) {
    console.log(value);
};

console.log()
// 4- Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

for(value in info) {
    console.log(info[value]);
};

//Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
//Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes <<< //Atenção para essa última linha!


info.personagem = 'Margarida' + ' e ' + 'Tio Patinha';
info.origem = 'Pato Donald' + ' e ' + "Christmas on Bear Mountain, Dell's Four Color Comics #178"
info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'

console.log(info)