let rlsync = require('readline-sync');


function prompt(message) {
  console.log(`${message}`);
}

prompt('Welcome to Calculator!');
let num1 = rlsync.question(prompt('Please enter a number: '));
while (invalidNumber(num1)) {
  prompt("Hmm that doesn't seem right");
  num1 = rlsync.question(prompt('Try again: '));
}
let num2 = rlsync.question(prompt('Please enter a number: '));
while (invalidNumber(num2)) {
  prompt("Hmm that doesn't seem right, try again");
  num2 = rlsync.question(prompt('Try again: '));
}
function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}
let operator = rlsync.question(prompt("What operation would you like" +
"to perform? 1) Addition 2) Subtraction 3) 4) ? "));
while (!['1','2','3','4'].includes(operator)) {
  prompt("try again:");
  operator = rlsync.question(prompt("What operation would you like" +
"to perform? 1) Addition 2) Subtraction 3) 4) ? "));
}

let result;
let ops;
switch (operator) {
  case '1':
    result = num1 + num2;
    ops = '+';
    break;
  case '2':
    result = num1 - num2;
    ops = '-';
    break;
  case '3':
    result = num1 * num2;
    ops = '*';
    break;
  case '4':
    result = num1 / num2;
    ops = '/';
    break;
}
console.log(`${num1} ${ops} ${num2} equals ${result}`)