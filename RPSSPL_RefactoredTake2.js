const RLSYNC = require('readline-sync');
const WINS =  {ROCK: ['scissors', 'lizard'],
  PAPER: ['rock', 'Spock'],
  SCISSORS: ['paper', 'lizard'],
  LIZARD: ['Spock', 'paper'],
  SPOCK: ['scissors', 'rock']
};
const validHumanShots = ['r','p','s','sp','l'];
const possibleShots = ['ROCK','PAPER','SCISSORS','SPOCK','LIZARD'];


function prompt(message) {
  console.log(`${message}`);
}
function getValueFromPrompt (value) {
  return RLSYNC.question(prompt(`${value}`));
}

prompt('=>Welcome to Rock, Paper, Scissors, Spock, Lizard\n');
prompt('\nHere are the rules:  \nEnter "r" for rock, \n"p" for paper,' +
'\n"s" for scissors, \n"sp" for spock, \n"l" for lizard.\n');


function howManyGamesToPlay() {
  let maxNumberOfGames = getValueFromPrompt(`=>Please enter the number of ` +
  `games you'd like to play: `);
  return maxNumberOfGames;
}

//get human shot and verify
function getHumanShot() {
  let getHumanAnswer = RLSYNC.question(prompt(('Readyyy, Rock, Paper,' +
  'Scissors, Spock, Lizard...Shoot!')));
  console.log(getHumanAnswer);
  while (!validHumanShots.includes(getHumanAnswer)) {
    getHumanAnswer = RLSYNC.question(prompt('Hmm something is off' +
        '. Please try again: '));
  }
  let expandedVerifiedHumanShot = convertHumanShotToFullString(getHumanAnswer);
  return expandedVerifiedHumanShot;
}

function convertHumanShotToFullString(convert) {
  let result;
  switch (convert) {
    case 'r':
      result = "ROCK";
      break;
    case 'p':
      result = 'PAPER'
      break;
    case 's':
      result = 'SCISSORS';
      break;
    case 'sp':
      result = 'SPOCK';
      break;
    case 'l':
      result = 'LIZARD';
      break;
  }
  return result;
}

//get comp shot
function getComputerShot () {
  let compRandomNumber = Math.floor(Math.random() * possibleShots.length);
  let computerShot = possibleShots[compRandomNumber].toLowerCase();
  return computerShot;
}


function determineRoundWinner() {
  let human = getHumanShot();
  console.log('HumanShot:' + human);
  let roundWinner;
  console.log(`human: ${human}`);
  console.log('wins: ' + WINS[human]);
  let computer = getComputerShot().toUpperCase();
  console.log('Computer Shot: ' + computer);
  if (human === computer) {
    return prompt('Tie');
  }
  let keyWins = Object.keys(WINS);
  keyWins.forEach(function(index) {
    if (index === human && keyWins[index] === computer) {
      roundWinner = 'You won!';
    } else {
      roundWinner = 'Computer wins!';
    }
  });
  prompt(roundWinner);
  return roundWinner;
}

// function updateGamesToPlay() {
//   let numberGamesLeft = howManyGamesToPlay();
//   numberGamesLeft -= 1;
//   console.log("num games left:" + numberGamesLeft);
//   return numberGamesLeft > -1;
// }


function checkGamesLeft() {
  let counter = howManyGamesToPlay();
  for(let i = 0; i <= counter; i++) {
    console.log(`i: ${i} & counter: ${counter}`);
    if (i <= counter) {
      return true;
    } else {
      break;
    }
}
}

while (checkGamesLeft()) {
  let gameScore = [0,0];
  if (determineRoundWinner() === 'Tie') {
    continue;
  } else if (determineRoundWinner()) {
    prompt('You won!');
    gameScore = [0,0];
    gameScore[0] += 1;
  } else {
    gameScore[1] += 1;
    prompt('Computer wins!');
  }; 
}