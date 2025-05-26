const leia = require('readline-sync');

let salarioBruto
let adcNoturno
let hrsEx
let descontos



salarioBruto = leia.questionFloat("\nDigite o salário: ", {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});

adcNoturno = leia.questionFloat("\nDigite o Adicional noturno: ", {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});

hrsEx = leia.questionFloat("\nDigite o valor das horas extras: ", {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});

descontos = leia.questionFloat("\nDigite o valor dos descontos: ", {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});

console.log("O salário líquido é: "+ (salarioBruto + adcNoturno + (hrsEx*5) - (descontos)));
