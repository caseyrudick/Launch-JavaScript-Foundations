const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
let rlsync = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

prompt(MESSAGES[LANGUAGE]["welcome"]);
let lang = rlsync.question(prompt('What Language do you want?' +
'1) English 2) Spanish: '));

// function selectLanguageFunction() {
let val1;
if (lang === "1") {
  val1 = 'en';
} else if (lang === "2") {
  val1 = 'es';
} else {
  val1 = 'Something went wrong!';
}
//  return val1;
//}

// selectLanguageFunction(lang);
// console.log(selectLanguageFunction(lang));
getOperatorAndResult();


function getNumbers() {
//  let val = selectLanguageFunction();
  let newArray = [];
  newArray[0] = rlsync.question(prompt(MESSAGES[val1]['enterNum1']));
  while (invalidNumber(newArray[0])) {
    prompt(MESSAGES[val1]['validNum']);
    newArray[0] = rlsync.question(prompt(MESSAGES[val1]['tryAgain']));
  }
  newArray[1] = rlsync.question(prompt(MESSAGES[val1]['enterNum2']));
  while (invalidNumber(newArray[1])) {
    prompt(MESSAGES[val1]["enterNum2"]);
    newArray[1] = rlsync.question(MESSAGES[val1]['tryAgain']);
  }
  function invalidNumber(num) {
    return num.trimStart() === "" || Number.isNaN(Number(num));
  }
  return newArray;
}


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


function playAgain() {
  let newCalcAns = Number(rlsync.question(prompt('Do you want to try another'
+ ' calculation? \n1)Yes or 2)No ')));
  if (newCalcAns === 1) {
    prompt("Welcome to the Calculator!");
    getOperatorAndResult();
    return true;
  } else {
    return false;
  }
}
while (playAgain() === true) {
  playAgain();
}