// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

let aliquotaInss;
let aliquotaIr;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {  
    aliquotaInss = salarioBruto * 0.08 ;
} else if (salarioBruto <= 2594.92) {  
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {  
    aliquotaInss = salarioBruto * 0.11;
} else {  
    aliquotaInss = 570.88;
}
let salarioBase = salarioBruto - aliquotaInss;

if ( salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.8;
} else if (salarioBase <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354.8;
}  else if (salarioBase <= 4664.68) {
    aliquotaIr = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
}

console.log('Salário: ' + (salarioBase - aliquotaIr));