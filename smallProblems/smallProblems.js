// function isOdd(number) {
//   absNum = Math.abs(number);
//   if (absNum % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7))

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// collect user input to get area of roo in meters and feet


// let width = Number(require('readline-sync').question('Enter length of the room in meters: '));
// let length = Number(require('readline-sync').question('Enter width of the room in meters: '));

// function returnArea(x, y) {
//   let squareMeters = (x * y);
//   let squareFeet = 10.7639 * squareMeters;
//   console.log(`The area of the room is ${squareMeters} square meters (${squareFeet.toFixed(2)} square feet).`);
// }

// returnArea(width, length);

//tip calculator
// let bill = Number(require('readline-sync').question('What is the bill? '));
// let percent = Number(require('readline-sync').question('What is the percentage? '));

// let tip = bill * percent / 100;
// let total = bill + tip

// console.log(`The tips is ${tip}`);
// console.log(`The total is ${total}`)

// program that asks user to enter integer greater than 0, then asks if they want to determine the sum
// or product of all the numbers between 1 and the entered integer


function calculateSum (verifiedValue) {
  let result = 0;
  for (let i = 1; i <= verifiedValue; i++) {
    result += i;
  }
  return result;
}

function calculateProduct (numberVerified) {
  let result = 1;
  for (let i = 1; i <= numberVerified; i++) {
    result *= i;
  }
  return result;
}

function verifyInteger (userInputtedInteger) {
  while (!Number.isInteger(Number(userInputtedInteger))) {
    userInputtedInteger = require('readline-sync').question("Try " +
      "another number: ");
  }
  console.log('\nnumber in verifyInteger:' + userInputtedInteger);
  return Number(userInputtedInteger);
}

function verifyOperator (userInputtedSign) {
  while (!['s','p'].includes(userInputtedSign)) {
    console.log('Incorrect operation command');
    userInputtedSign = require('readline-sync').question('Please enter either "s" or "p"');
  };
  return userInputtedSign;
}

function getCalculation(value, sign) {
  verifyInteger(value);
  console.log(`\nverified in getCalculation: ${verified}`);
  let verifiedOperator = verifyOperator(sign);
  let calculationResult;
  let operator;
  if (verifiedOperator === 's') {
    console.log('\nFinal Value in getCalculation: ' + Number (calculateSum(verified)));
    calculationResult = Number(calculateSum(verified));
    operator = 'sum';
  } else {
    calculationResult = calculateProduct(verified);
    operator = 'product';
  }
  console.log(`\nThe ${operator} between 1 and ${value} equals ${calculationResult}`);
}
let num = require('readline-sync').question('What is the number? ');
let operation = require('readline-sync').question('Enter "s" to '
  + 'compute the sum, or "p" to compute the product. ');
getCalculation(num, operation);


