
const readline = require('readline-sync');


let nome = readline.question('Digite seu nome: ');

console.log('Olá, '+nome);

let favFood = readline.question('Digite a senha:  ', {
  hideEchoBack: true 
});



if (readline.keyInYN('Do you want this module?')) {
  console.log('Installing now...');
} else {
  console.log('Searching another...');
}