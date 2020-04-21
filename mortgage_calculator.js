

function prompt(message) {
  console.log(`${message}`);
}
let rlsync = require('readline-sync');

let loanAmount = parseFloat(rlsync.question(prompt('What is the ' +
'loan amount? ')));
let APR = parseFloat(rlsync.question(prompt('What is the APR? ')));
let note = parseFloat(rlsync.question(prompt('How many months is the note? ')));
let aprNote = parseFloat(APR / note / 100);
let monthlyPayment = loanAmount * (aprNote /
(1 - (Math.pow((1 + aprNote),(-note)))));
console.log('$' + monthlyPayment.toFixed(2));