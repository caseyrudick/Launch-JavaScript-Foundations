const RLSYNC = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

let result;
function checkWinner(human, computer) {
  if (human === computer) {
    result = 'It\'s a tie!';
  } else if (human === 1 && computer === 3) {
    result = 'You win!';
  } else if (human === 2 && computer === 1) {
    result = 'You win!';
  } else {
    result = 'Computer wins!'
  }
  return result;
}

prompt('Let\'s play rock paper scissors!');
while (true) {
  let firstChoice = RLSYNC.question(prompt('Rock paper scissors.....'
  + 'Shoot! '));
  firstChoice.toLowerCase();
  while (!['rock','paper','scissors'].includes(firstChoice)) {
    prompt('Hmm that didn\'t work');
    firstChoice = RLSYNC.question(prompt('Try again: '));
  }
  let stringConvertedToNum;
  switch (firstChoice) {
    case 'rock':
      stringConvertedToNum = 1;
      break;
    case 'paper':
      stringConvertedToNum = 2;
      break;
    case 'scissors':
      stringConvertedToNum = 3;
      break;
  }
  let firstComputerChoice = Math.floor((Math.random() * 3)+1);
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
  }
  console.log(`You chose: ${firstChoice.toUpperCase()} and the computer ` +
  `chose: ${computerChoiceConvertertoStr.toUpperCase()}`);

  console.log(checkWinner(stringConvertedToNum,firstComputerChoice));

  prompt('Play again? y/n ');
  let answer = RLSYNC.question();
  if (answer.toLowerCase() === 'n') {
    break;
  }
}


