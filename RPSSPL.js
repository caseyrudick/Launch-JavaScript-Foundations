const RLSYNC = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}
prompt('Let\'s play rock paper scissors lizard spock!');
prompt('Please enter the first letter of each word of' +
'your choice. And sp for spock');

//function checking the winner and logging the gameScore
let gameCount = 0;
let gameScore = [0,0];
let result;
function checkWinner(human, computer) {
  if (human === computer) {
    result = 'It\'s a tie!';
  } else if (human === 'r' && (computer === 3 || computer === 5)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'p' && (computer === 1 || computer === 4)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 's' && (computer === 3 || computer === 5)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'sp' && (computer === 1 || computer === 3)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'l' && (computer === 4 || computer === 2)) {
    result = 'You win!';
    gameScore[0] += 1;
  } else {
    result = 'Computer wins!';
    gameScore[1] += 1;
  }
  return result + gameScore;
}
//this will continue to loop, until otherwise!
//set human choice to -g firstChoice
let firstChoice;
while (true) {
  //ask user for their shot, lowercase it, check validity, if not ask again
  firstChoice = RLSYNC.question(prompt('Rock paper scissors spock ' +
  'lizard....Shoot! '));
  firstChoice.toLowerCase();
  while (!['r','p','s','sp','l'].includes(firstChoice)) {
    prompt('Hmm that didn\'t work');
    firstChoice = RLSYNC.question(prompt('Try again: '));
  }
  //initiate computer's random shot
  //convert number to string
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
  //expand human answer
  let humanChoiceExpandedString;
  switch (firstChoice) {
    case 'r':
      humanChoiceExpandedString = 'rock';
      break;
    case 'p':
      humanChoiceExpandedString = 'paper';
      break;
    case 's':
      humanChoiceExpandedString = 'scissors';
      break;
    case 'sp':
      humanChoiceExpandedString = 'spock';
      break;
    case 'l':
      humanChoiceExpandedString = 'lizard';
      break;
  }

  //log selections of the round
  console.log(`You chose: ${humanChoiceExpandedString.toUpperCase()} and the computer ` +
  `chose: ${computerChoiceConvertertoStr.toUpperCase()}`);
  //set the game count and log overall winner
  if (gameCount >= 3) {
    console.log('GAME OVER');
    if (gameScore[0] > gameScore[1]) {
      console.log(`You win!`);
    } else {
      console.log('Computer wins!');
    }
    break;
  } else {
    gameCount += 1;
  }
  //log round winner and current score
  checkWinner(firstChoice,firstComputerChoice);
  console.log(`${result} Current score: You: ${gameScore[0]}  Computer: ${gameScore[1]}`);

  //ask to play again
  prompt('Play again? y/n ');
  let answer = RLSYNC.question();
  if (answer.toLowerCase() === 'n') {
    break;
  }
}


