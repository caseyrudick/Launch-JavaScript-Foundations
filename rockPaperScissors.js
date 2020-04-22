const RLSYNC = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}
let counter = 5;
let gameScore = [0,0];
let result;
function checkWinner(human, computer) {
  counter -= 1;
  if (human === computer) {
    result = 'It\'s a tie!';
  } else if (human === 1 && (computer === 3 || computer === 5)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 2 && (computer === 1 || computer === 4)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 3 && (computer === 3 || computer === 5)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 4 && (computer === 1 || computer === 3)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 5 && (computer === 4 || computer === 2)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else {
    result = 'Computer wins!';
    gameScore[1] += 1;
  }
  return result + gameScore;
}

prompt('Let\'s play rock paper scissors lizard spock!');
prompt('Please enter the first letter of each word of' +
'your choice. And sp for spock');

while (true) {
  let firstChoice = RLSYNC.question(prompt('Rock paper scissors spock ' +
  'lizard....Shoot! '));
  firstChoice.toLowerCase();
  while (!['r','p','s','sp','l'].includes(firstChoice)) {
    prompt('Hmm that didn\'t work');
    firstChoice = RLSYNC.question(prompt('Try again: '));
  }
  let humanChoiceConvertedBack;
  let stringConvertedToNum;
  switch (firstChoice) {
    case 'r':
      stringConvertedToNum = 1;
      humanChoiceConvertedBack = 'rock';
      break;
    case 'p':
      stringConvertedToNum = 2;
      humanChoiceConvertedBack = 'paper';
      break;
    case 's':
      stringConvertedToNum = 3;
      humanChoiceConvertedBack = 'scissors';
      break;
    case 'sp':
      stringConvertedToNum = 4;
      humanChoiceConvertedBack = 'spock';
      break;
    case 'l':
      stringConvertedToNum = 5;
      humanChoiceConvertedBack = 'lizard';
      break;
  }
  let firstComputerChoice = Math.floor((Math.random() * 3) + 1);
  let computerChoiceConvertertoStr;
  switch (firstComputerChoice) {
    case 1:
      computerChoiceConvertertoStr = 'rock';
      break;
    case 2:
      computerChoiceConvertertoStr = 'paper';
      break;
    case 3:
      computerChoiceConvertertoStr = 'scissors';
      break;
    case 4:
      computerChoiceConvertertoStr = 'spock';
      break;
    case 5:
      computerChoiceConvertertoStr = 'lizard';
      break;
  }
  console.log(`You chose: ${humanChoiceConvertedBack.toUpperCase()} and the computer ` +
  `chose: ${computerChoiceConvertertoStr.toUpperCase()}`);

  while (counter > 0) {
    console.log(checkWinner(stringConvertedToNum,firstComputerChoice));
    counter -= 1;
    prompt('Play again? y/n ');
    let answer = RLSYNC.question();
    if (answer.toLowerCase() === 'n') {
      break;
    }
  }
}


