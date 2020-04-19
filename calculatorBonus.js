let rlsync = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

prompt("Welcome to the Calculator!");
getNumbers();
function getNumbers() {
  let newArray = [];
  newArray[0] = rlsync.question(prompt("Enter a number: "));
  while (invalidNumber(newArray[0])) {
    prompt("Hmm that doesn't seem like a number");
    newArray[0] = rlsync.question(prompt("Try again: "));
  }
  newArray[1] = rlsync.question(prompt("Enter another number: "));
  while (invalidNumber(newArray[1])) {
    prompt("Hmm that doesn't seem like a number");
    newArray[1] = rlsync.question(prompt("Try again: "));
  }
  function invalidNumber(num) {
    return num.trimStart() === "" || Number.isNaN(Number(num));
  }
  return newArray;
}
getOperatorAndResult();
function getOperatorAndResult() {
  let numsArray = getNumbers();
  let operator = rlsync.question(prompt("Select the following " +
"operation: \n 1) Add 2) Subtract 3) Multiply 4) Divide: "));
  while (!['1','2','3','4'].includes(operator)) {
    prompt("Hmm looks like an invalid selection, try again...");
    operator = rlsync.question(prompt("Select the following " +
  "operation: \n 1) Add 2) Subtract 3) Multiply 4) Divide: "));
  }
  let ops, result;
  switch (Number(operator)) {
    case 1:
      result = Number(numsArray[0]) + Number(numsArray[1]);
      ops = '+';
      break;
    case 2:
      result = Number(numsArray[0]) - Number(numsArray[1]);
      ops = '-';
      break;
    case 3:
      result = Number(numsArray[0]) * Number(numsArray[1]);
      ops = '*';
      break;
    case 4:
      result = Number(numsArray[0]) / Number(numsArray[1]);
      ops = '/';
      break;
  }
  console.log(`${numsArray[0]} ${ops} ${numsArray[1]} equals ${result}`);
}
playAgain();
function playAgain() {
  let newCalcAns = Number(rlsync.question(prompt('Do you want to try another'
+ ' calculation? \n1)Yes or 2)No ')));
  if (newCalcAns === 1) {
    prompt("Welcome to the Calculator!");
    getNumbers();
    getOperatorAndResult();
    return true;
  } else {
    return false;
  }
}
while (playAgain() === true) {
  playAgain();
}