const RLSYNC = require('readline-sync');
const WINS =  {ROCK: ['SCISSORS', 'LIZARD'],
  PAPER: ['ROCK', 'SPOCK'],
  SCISSORS: ['PAPER', 'LIZARD'],
  LIZARD: ['SPOCK', 'PAPER'],
  SPOCK: ['SCISSORS', 'ROCK']
};
const MOVES = {r: "ROCK", p: "PAPER", s: "SCISSORS", sp: "SPOCK", l: "LIZARD"};

function prompt(message) {
  console.log(`${message}`);
}
function getValueFromPrompt (value) {
  return RLSYNC.question(prompt(`${value}`));
}

prompt('\n=>Welcome to Rock, Paper, Scissors, Spock, Lizard\n');
prompt('\n=>Here are the rules:  \nEnter "r" for rock, \n"p" for paper,' +
  '\n"s" for scissors, \n"sp" for spock, \n"l" for lizard.\n');

playTheGame();

function howManyGamesToPlay(score) {
  score.games = Number(getValueFromPrompt(`=>Please enter the number of ` +
    `games you'd like to play (Select a number between 1 & 10): `));
  while (![1,2,3,4,5,6,7,8,9,10].includes(score.games)) {
    score.games = Number(getValueFromPrompt(`\n=>Hmm that didn't register. ` +
    `Please enter 1-10: `));
  }
  return score;
}

function doYouWantToPlayAgain() {
  let playAgain = getValueFromPrompt(`\n=>Do you want to play again?`);
  while (!['y','Y','n','N'].includes(playAgain)) {
    playAgain = getValueFromPrompt(`\n=>Hmm that didn't register.` +
    `  Please enter y/n: `);
  }
  if (playAgain === 'y') {
    return true;
  } else {
    return false;
  }
}

function verifyHumanShot() {
  let validHumanShots = Object.keys(MOVES)
  let result = (getValueFromPrompt('Readyyy, Rock, Paper,' +
    ' Scissors, Spock, Lizard...Shoot!')).toLowerCase();
  while (!validHumanShots.includes(result)) {
    result = (getValueFromPrompt('Hmm response didn\'t work. ' +
      'Please shoot again, choosing either "r", "p", "s", "sp", "or" "l": ')).toLowerCase();
  }
  return MOVES[result];
}

function getComputerShot () {
  let compRandomNumber = Math.floor(Math.random() * Object.keys(MOVES).length);
  let possibleShots = Object.values(MOVES);
  let computerShot = possibleShots[compRandomNumber];
  return computerShot;
}
 
function determineRoundWinner(score) {
  let roundWinner;
  let human = verifyHumanShot();
  console.log('\nYou choose: ' + human);
  let computer = getComputerShot();
  console.log('The computer shot: ' + computer);
  if (human === computer) {
    roundWinner = '\nIt\'s a tie';
  } else if (WINS[human].includes(computer)) {
    roundWinner = '\nYou won!';
  } else {
    roundWinner = '\nComputer wins!';
  }
  prompt(roundWinner);
  incrementScore(roundWinner, score);
  return roundWinner;
}

function incrementScore(winner, score) {
  switch (winner) {
    case '\nYou won!':
      score.human += 1;
      score.total += 1;
      break;
    case '\nComputer wins!':
      score.computer += 1;
      score.total += 1;
      break;
    default:
      score.total += 1;
  }
  console.log(`\n*********** Current Score --- You: ${score.human} ` +
    `Computer: ${score.computer} Game #: ${score.total}/` +
    `${score.games} *************\n`);
}

function displayFinalWinner(score) {
  let humanWon = `You Won! ${score.human} to ${score.computer}`;
  let computerWon = `Computer Won! ${score.human} to ${score.computer}`;
  let tie = `It's a tie! ${score.human} to ${score.computer}`;
  if (score.human > score.computer) {
    console.log(`+-${'-'.repeat(humanWon.length)}-+`);
    console.log(`| ${' '.repeat(humanWon.length)} |`);
    console.log(`|    GAME OVER    |`);
    console.log(`| ${humanWon} |`);
    console.log(`| ${' '.repeat(humanWon.length)} |`);
    console.log(`+-${'-'.repeat(humanWon.length)}-+`);
  } else if (score.human < score.computer) {
    console.log(`+-${'-'.repeat(computerWon.length)}-+`);
    console.log(`| ${' '.repeat(computerWon.length)} |`);
    console.log(`|      GAME OVER       |`);
    console.log(`| ${computerWon} |`);
    console.log(`| ${' '.repeat(computerWon.length)} |`);
    console.log(`+-${'-'.repeat(computerWon.length)}-+`);
  } else {
    console.log(`+-${'-'.repeat(tie.length)}-+`);
    console.log(`| ${' '.repeat(tie.length)} |`);
    console.log(`|      GAME OVER     |`);
    console.log(`| ${tie} |`);
    console.log(`| ${' '.repeat(tie.length)} |`);
    console.log(`+-${'-'.repeat(tie.length)}-+`);
  }
}

function resetScore(score) {
  score.human = 0;
  score.computer = 0;
  score.total = 0;
  score.games = 0;
}


function playTheGame() {
  let score = {human: 0, computer: 0, total: 0, games: 0};
  while (true) {
    if (score.total === 0) {
      howManyGamesToPlay(score);
    }
    determineRoundWinner(score);
    if (score.games <= score.total) {
      displayFinalWinner(score);
      score = resetScore(score);
      while (doYouWantToPlayAgain()) {
        howManyGamesToPlay(score);
        determineRoundWinner();
        if (score.games <= score.total) {
          displayFinalWinner(score);
          score = resetScore(score);
        }
        break;
      }
    }
  }
}

