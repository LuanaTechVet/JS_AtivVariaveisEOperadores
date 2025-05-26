const leia = require('readline-sync');
let numero1
let numero2 
let numero3 
let numero4

numero1 = leia.questionFloat("\nDigite o numero 1: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("Numero 1: " + numero1);

numero2 = leia.questionFloat("\nDigite o numero 2: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("Numero 2: " + numero2);

numero3 = leia.questionFloat("\nDigite o numero 3: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("Numero: " + numero3);

numero4 = leia.questionFloat("\nDigite o numero 4: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("Numero: " + numero4);

console.log("A diferença entre o número 1 X número 2 e número 3 X número 4 é: " + 
    ((numero1*numero2)-(numero3*numero4)));