const leia = require('readline-sync');

let salario
salario = leia.questionFloat("\nDigite o salário: ", 
    {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});
console.log("O salário é:\t " + new Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL',}).format(salario))
    
let abono

abono = leia.questionFloat("\nDigite o abono: ", 
    {limitMessage: 'Digite o valor em reais e separe centavos com ponto'});    

let salarioabonado= salario+abono

console.log("O novo salário com abono é:\t " + new Intl.NumberFormat('pt-BR', 
    { style: 'currency', currency: 'BRL',}).format(salarioabonado))