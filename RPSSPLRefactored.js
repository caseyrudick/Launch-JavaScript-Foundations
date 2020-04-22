const RLSYNC = require('readline-sync');
let computerShotConvertedString, expandedValidHumanInput, roundResult,
  humanInput, winner, numberOfGames;
let gameScore = [0,0];

function prompt(message) {
  console.log(`${message}`);
}

// SCRIPT: Want to Play?
doYouWantToPlay();
function doYouWantToPlay() {
  let answerToPlay = RLSYNC.question(prompt(`=>Do you want to play? y/n `));
  if (answerToPlay.toLowerCase() === 'y') {
    welcomeToTheGame();
  } else {
    prompt('=>Maybe another time!');
  }
}
// SCRIPT: Welcome
// Enter numberOfGames user wants to play
function welcomeToTheGame() {
  prompt(`\n=>Welcome to Rock, Paper, Scissors, Spock, Lizard. ` +
  `\n=>Please enter the first letter of your move, and "sp for spock"`);
  numberOfGames = RLSYNC.question(prompt("=>Enter the number of games you" +
  " want to play (best of): "));
}

// keep game going for numberOfGames
// get user input and send to checkHumanInput()
while ((gameScore[0] + gameScore[1]) < numberOfGames) {
  humanInput = RLSYNC.question(prompt('=>Ready Rock Paper Scissors Spock ' +
  'Lizard...' +
  'Shoot! ')).toLowerCase();
  checkHumanInput(humanInput);
};

// SCRIPT: end of game
(gameScore[0] > gameScore[1]) ? winner = 'You!': winner = 'Computer!';
prompt(`\n*****************Game Over. ${winner.substring(0,winner.length - 1)}` +
` Won!********************`);

// check validity of user input
// send valid input to expandHumanInputToFullString()
function checkHumanInput(input) {
  while (!['r','p','s','sp','l'].includes(input)) {
    prompt("=>Hmm that doesn't look like a valid choice." +
    "\n=>Please enter: r, p, s, sp, or l");
    humanInput = RLSYNC.question(prompt('=>Shoot Again! ')).toLowerCase();
  }
  let validHumanInput = humanInput;
  expandHumanInputToFullString(validHumanInput);
}

// expand human response from intial to full word, return word
// call generateComputerShot()
function expandHumanInputToFullString (checkingInput) {
  switch (checkingInput) {
    case 'r':
      checkingInput = 'ROCK';
      break;
    case 'p':
      checkingInput = 'PAPER';
      break;
    case 's':
      checkingInput = 'SCISSORS';
      break;
    case 'sp':
      checkingInput = 'SPOCK';
      break;
    case 'l':
      checkingInput = 'LIZARD';
      break;
  }
  expandedValidHumanInput = checkingInput;
  generateComputerShot();
  return expandedValidHumanInput;
}
// computer's turn
// call determineRoundWinner using human and computer's choices as arguments
function generateComputerShot() {
  let computerNumberShot = Math.floor(Math.random() * 5);
  switch (computerNumberShot) {
    case 0:
      computerShotConvertedString = 'ROCK';
      break;
    case 1:
      computerShotConvertedString = 'PAPER';
      break;
    case 2:
      computerShotConvertedString = 'SCISSORS';
      break;
    case 3:
      computerShotConvertedString = 'SPOCK';
      break;
    case 4:
      computerShotConvertedString = 'LIZARD';
      break;
  }
  return determineRoundWinner(expandedValidHumanInput,
    computerShotConvertedString);
}

// determine who won the round
// increment gameScore
function determineRoundWinner(human,computer) {
  if (human === computer) {
    roundResult = 'It\'s a tie!';
  } else if (human === 'ROCK' && (computer === 'LIZARD' ||
  computer === 'SCISSORS')) {
    roundResult = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'PAPER' && (computer === 'ROCK' ||
  computer === 'SPOCK')) {
    roundResult = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'SCISSORS' && (computer === 'PAPER' ||
  computer === 'LIZARD')) {
    roundResult = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'SPOCK' && (computer === 'SCISSORS' ||
  computer === 'ROCK')) {
    roundResult = 'You win!';
    gameScore[0] += 1;
  } else if (human === 'LIZARD' && (computer === 'SPOCK' ||
  computer === 'PAPER')) {
    roundResult = 'You win!';
    gameScore[0] += 1;
  } else {
    roundResult = 'Computer wins!';
    gameScore[1] += 1;
  }
  console.log(`=>You chose ${expandedValidHumanInput} and computer chose: ${computer}` +
  `. ${roundResult}`);
  console.log(`=>Current Score: You: ${gameScore[0]}  Computer: ${gameScore[1]}`);
  return gameScore;
}


