// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)


const valorProduto = 40;
const valorVenda = 60.99;
const quantProduto = 1000;

let imposto = 20;
let porcentagemImposto = imposto * valorProduto;
let somaImposto = porcentagemImposto / 100;
let impostoAplicado = valorProduto - somaImposto;
let lucro = valorVenda - impostoAplicado;

if(valorProduto <= 0) {
    console.log("Desculpe, as informações inserida estão invalidas. Tente novamente!")
} else {
    console.log(lucro * quantProduto);
}
