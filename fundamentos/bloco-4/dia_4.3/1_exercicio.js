//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

function fatorial(n) {
    let resultado = n;
    for(let index = 1; index < n; index += 1) {
        resultado = resultado * index;
    }
    return resultado;
}

console.log(fatorial(10));