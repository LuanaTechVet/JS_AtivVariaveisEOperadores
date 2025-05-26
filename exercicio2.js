const leia = require('readline-sync');
let nota1
let nota2 
let nota3 
let nota4

nota1 = leia.questionFloat("\nDigite a nota 1: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("1ª nota: " + nota1);

nota2 = leia.questionFloat("\nDigite a nota 2: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("2ª nota: " + nota2);

nota3 = leia.questionFloat("\nDigite a nota 3: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("3ª nota: " + nota3);

nota4 = leia.questionFloat("\nDigite a nota 4: ", 
    {limitMessage: 'Digite um numero separando decimais com ponto'});
console.log("4ª nota: " + nota4);

console.log("A média final é: " + (nota1+nota2+nota3+nota4)/4)