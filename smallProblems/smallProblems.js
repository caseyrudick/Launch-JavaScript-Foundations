// function isOdd(number) {
//   absNum = Math.abs(number);
//   if (absNum % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// import { questionNewPassword } from "readline-sync";

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



// write a function that takes two stings as arguments, determines the longer of the two strings
// and then returns the result of concatentating the shorter string, the longer string and teh shorter string once again
// you may assume that the strings are of different lengths 


// function shortLongShort(first, second) {
//   let result = [];
//   if (first.length < second.length) {
//     result.push(first,second,first);
//     result = result.join('');
//   } else {
//     result.push(second,first,second);
//     result = result.join('');
//   }
//   console.log(result);
// }



// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');


// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// function isLeapYear(year) {
//   if (year < 1752 && year % 4 === 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// write a function that computes the sum of all the numbers between 1 and some other number, 
// that are multiples of 3 or 5

// function multisum(num) {
//   let result = 0
//   for (i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i
//     }
//   }
//   console.log(result);
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);

// ASCII String Value


// #1
// write a function that determines and returns the ASCII string value of a string passed 
// as an argument


// function asciiValue(astring) {
//   [astring].forEach(element => {
//     console.log(element);
//   });
//   //console.log(String.prototype.charCodeAt(astring));
// }
// function asciiValue(astring) {
//   let result = 0;
//   astring.split('').forEach(function(i) {
//     result += i.charCodeAt();
//   });
//   console.log(result);
// }
// function asciiValue(astring) {
//   let result = 0;
//   astring.split('').forEach(i => result +=i.charCodeAt());
//   console.log(`result: ${result}`);
// }

// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');  

// #2 
// create a function that takes two arguments, an array and an object.  The array will contain 2 or
// more elements that when combined will produce a persons name
// the object will contain two keys title and occupation.
// function will return a greeting that uses the person's full name and mentions the person's title

// function greetings (name, job) {
//   //let a = name.join(' ');
//   //let values = Object.values(job);
//   //console.log(`Hello, ${a}! Nice to have a ${values[0]} ${values[1]} around`);
//   console.log(`Hello ${name.join(' ')}! Nice to have a ${job['title']} ${job['occupation']} around`);
// }
// greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })

// #3 
// write a program that will ask for a user's name
// the program will then greet the user
// if the user adds !, then the computer yells back;

// let name = require('readline-sync').question('What is your name? ');
// while (name.trimStart() === '') {
//   name = require('readline-sync').question('Try again? ');
// }
// if (name.includes('!')) {
//   name = name.substring(0,name.length - 1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}`);
// }


// #5
// write a progrma that prompts the user for two positive integers, then prints the results 
// of the following operations on those two numbers: addition, subtract product, quotient
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// function num1() {
//   let result = Number(require('readline-sync').question('Enter a number: '))
//   while (Number.isNaN(Number(result))) {
//     result = Number(require('readline-sync').question('Didn\'t work. Enter another number: '))
//   }
//   return result;
// }
// function operation () {
//   let operator = require('readline-sync').question('Please pick an operation to perform: ');
//   while (!['+','-','*','/','%','**'].includes(operator)) {
//     operator = require('readline-sync').question('Incorrect operation choice. Try again: ')
//   }
// }

// function runCalculations(value1, value2, sign) {
//   let result;
//   switch (sign) {
//     case "+":
//       result = value1 + value2;
//       break;
//     case "-":
//       result = value1 - value2;
//       break;
//     case '*':
//       result = value1 * value2;
//       break;
//     case '/':
//       result = value1 / value2;
//   }
//   console.log(`${value1} ${sign} ${value2} equals ${result}`)
// }

// console.log(runCalculations(num1(), num1(), operation()));


// #6
// write a function that reutnrs the next to last word in the string passed to it as an argument

// function penultimate (astring) {
//   let arr = []
//   astring.split(' ').forEach(element => {
//     arr.push(element);
//   });
//   let penul = arr[arr.length - 2];
//   console.log(penul)
// }

// penultimate("last word")
// penultimate("Launch School is great!")

// #7
// write a xor function that returns true if ONLY ONE of the statesments are truthy

// function xor(one, two) {
//   if ((one && !two) || (!one && two)) {
//     return true;
//   }
//   return false;
// }

// function xor(value1, value2) {
//   return (value1 && !value2) || (value2 && !value1);
// }
// console.log(xor(5, 0));
// console.log(xor(false, true));
// console.log(xor(1, 1));
// console.log(xor(true, true));

// #8
// write a function that returns an Array that contains every other
// element of an Array that is apssed in as an argument

// function oddities (arrArg) {
//   let result = [];
//   for (i = 0; i < arrArg.length; i++) {
//     if (i % 2 === 0) {
//       result.push(arrArg[i]);
//     }
//   }
//   return result;
// }

// let oddities = (array) => array.filter(el => array.indexOf(el) % 2 === 0);
// let oddities = (array) => array.filter((_,idx) => idx % 2 === 0);
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); 

// #9
// convet a string to a number NOT using parseInt() or NUMBER

// function stringToInteger(astring) {
//   const DIGITS = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};
//   let newArray = astring.split("").map(char => DIGITS[char]);
//   let value = 0;
//   newArray.forEach(element => (value = (10 * value) + element));
//   return value;
// }

// console.log(stringToInteger("4321"));
// console.log(stringToInteger("570"));

// #10
// convert a string to number that may have a +- in front of it

// function stringtoSignedInteger(astring) {
//   switch (astring[0]) {
//     case '-':
//       return -stringToInteger(astring.slice(1,astring.length));
//     case '+':
//       return stringToInteger(astring.slice(1,astring.length));
//     default:
//       return stringToInteger(astring);
//   }
// }

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100);

// #11
// convert a number to a string! same as #9, but reversed
//

// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// function integerToString(number) {
//   let result = '';
//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     result = DIGITS[remainder] + result;
//   } while (number > 0);
//   return result;
// }



// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890); 

// #12
// convert a number to a string! and add sign


// function signedIntegerToString(number) {
//   switch (Math.sign(number)) {
//     case -1:
//       return `-${integerToString(-number)}`;
//     case +1:
//       return `+${integerToString(number)}`;
//     default:
//       return integerToString(number);
//   }
// }

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

// #13
// write a function that takes a string argyment and returns a new string 
// that contains the value of the original string with all the consectutive duplicate characters
// collapsed into a single character

// function crunch(astring) {
//   let newWord = '';
//   let newarry = astring.split('');
//   for (i=0; i< newarry.length; i++) {
//     if (newarry[i] !== newarry[i+1]) {
//       newWord += newarry[i];
//     }
//   }
//   console.log(newWord);
// }

// let crunch = function(str) {
//   console.log(str.split('').reduce((newStr, char) => {
//     return newStr.endsWith(char) ? newStr : newStr + char;
//   }, ''));
// };

// function crunch(string) {
//   return string.replace(/[^\w\s]|(.)(?=\1)/g, "");
// }


  // newarry.forEach(element => {
  //   let currentLetter = ''
  //   if (element !== currentLetter) {
  //     console.log('element: ' + element)
  //     newWord += element;
  //     currentLetter === element;
  //     console.log(`current letter: ${currentLetter}`)
  //   }
  // });
 // console.log(newWord)

//   for (let char in newarry) {
//     if (newarry[char] !== currentLetter) {
//       newWord += char;
//     } currentLetter === newarry[char];
//   }
//   console.log(newWord)


// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"

// #14
// function logInBox(text) {
//   let dashes = '';
//   let spaces = '    ';
//   for (i in text) {
//     dashes += '-';
//     spaces += ' ';
//   }
//   console.log(('+--') + dashes + ('--+'));
//   console.log("|" + spaces + "|");
//   console.log("|  " + text + "  |");
//   console.log("|" + spaces + "|");
//   console.log(('+--') + dashes + ('--+'));
// }

// function logInBox(message) {
//   let horizontalRule = `+${"-".repeat(message.length + 2 )}+`;
//   let blankSpace = `|${' '.repeat(message.length + 2)}|`;
//   console.log(horizontalRule);
//   console.log(blankSpace);
//   console.log(`| ${message} |`);
//   console.log(blankSpace);
//   console.log(horizontalRule);
// }

// logInBox('To boldly go where no one has gone before.');

// +--+
// |  |
// |  |
// |  |
// +--+


// #15
// write a function that takes one argument, a positive integer and returns a string of 
// alternating '1's and '0's always starting with 1.  The length will match the 
// given integer

// function stringy (num) {
//   let result = '1'
//   let i = 0
//   while (i < num) {
//     result += '0'
//     i ++
//     result += '1'
//     i ++
//   }
//   if (result.length > num) {
//     let difference = (result.length - num)
//     result = result.substring(0,result.length - difference)
//     console.log(result)
//   }
//   else {
//     console.log(result);
//   }
// }

// function stringy(num) {
//   let result = ""
//   for (let i = 0; i< num; i++) {
//     let num = ((i % 2) === 0) ? 1 : 0;
//     result += num;
//   }
//   console.log(result);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// #16
// find the fibonacci number at the requested index

function findFibonacciIndexByLength(length) {
  let first = 1
  let second = 1
  let index = 2
  let fibonacci;
  do {
    fibonacci = first + second;
    index += 1
    first = second;
    second = fibonacci;
  } while (fibonacci.toString().length < length)
  return index;


}
console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// #17 
// function that takes a positive integer, n, as an argument and logs a right tringal whose sids each have n stars

function triangle(number) {
  let i = 0
  while (i <= number) { 
    console.log((" ".repeat(number-i) + ('*'.repeat(i))))
    i ++
  }
}

triangle(5)
triangle(9)


// #19
// Double Doubles
// a double number is an even-length number whose left-side digits are exactly
// the same as its right side digits, i.e. 44, 103103, 7676
// write function that returns inputted number if its not a double, and returns the 
// double if it is
// function twice(number) {
//   let numberToString = number.toString()
//   let numberLength = Number(numberToString.length);
//   let middleIndex = (Math.floor(numberLength/2+1));
//   //console.log(`MiddleIndex: ${middleIndex}`)
//   let firstHalf = numberToString.substring(0,middleIndex-1);
//   //console.log(`firstHalf: ${firstHalf}`)
//   let secondHalf = numberToString.substring(middleIndex-1);
//   //console.log(`The number: ${number} has a length of: ${numberLength}.  First half: ${firstHalf} and Second Half: ${secondHalf}`)
//   //console.log(`secondHalf: ${secondHalf}`)
//   if (numberLength === 2) {
//     numberToString[0] === numberToString[1] ? console.log(number):
//     console.log(number*2)
//     }
//     else if (numberLength % 2 === 0) {
//       firstHalf == secondHalf ? console.log(number):
//       console.log(number*2)
//       }
//       else{
//         console.log(number*2);
//       }
//   }
//   twice(37);          // 74
//   twice(44);          // 44
//   twice(334433);      // 668866
//   twice(444);         // 888
//   twice(107);         // 214
//   twice(103103);      // 103103
//   twice(3333);        // 3333
//   twice(7676);        // 7676

// #21
// write a function that replaces all the non-alphabetic characters, replaced by spaces
// cleanUp("---what's my +*& line?");    // " what s my line "
// function cleanUp(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (isLowerCase(string[i]) || isUpperCase(string[i])) {
//       result += string[i];
//     } else if (result[result.length - 1] !== ' ') {
//       result += ' ';
//     }
//   }
//   console.log(result)
// }
// function isLowerCase(char) {
//   return char >= 'a' && char <= 'z';
// }
// function isUpperCase(char) {
//   return char >= 'A' && char <= 'Z'
// }
// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

// #22
// write a function that takes a year as an input and returns the century
// the return value should be a string that begins with the century number
// and ends with the 'st', 'nd', 'rd', or 'th' as appropriate for that number.
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"
// function getCenturyNumber(number) {
//   let result = number / 100;
//   let value;
//   if (result < 1 ) {
//     value = 1;
//   } else {
//     if (number % 10 !== 0 ) {
//       value = Math.floor(result) + 1;
//     } else {
//       value = Math.floor(result)
//     }
//   }
//   return (value)
// }
// function century (num) {
//   let centuryNumber = getCenturyNumber(num);
//   let centuryNumberString = centuryNumber.toString()
//   let lastDigit = centuryNumberString[centuryNumberString.length-1]
//   let ending = '';
//   switch (lastDigit) {
//     case '1':
//       ending = 'st';
//       break;
//     case '2':
//       ending = 'nd';
//       break;
//     case '3':
//       ending = 'rd';
//       break;
//     default:
//       ending = 'th';
//    }
//    console.log(centuryNumber + ending)
// }


// #25
// write a function that returns true if the string passed as an 
// argument is a palindrome or false otherwise

// function isPalindrome(string) {
//   let forward = string;
//   let backwards = string.split('').reverse().join('');
//   console.log(backwards)
//   if (forward === backwards) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

// #26 
// same as above except you need to take out case sensitivity
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false
// function isRealPalindrome(string) {
//   string = string.replace(/\W/g, '').toLowerCase();
//   // console.log(`string replaced: ${string}`)
//   let forward = string;
//   let backwards = string.split('').reverse().join('');
//   // console.log(backwards)
//   if (forward === backwards) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }

//#28 
// write a function that takes an array of numbers and returns an array with the same
// number of elements, with each element's value being the running total from the original array
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// function runningTotal(array) {
//   let sum = 0
//   let newarray = []
//   newarray = array.map(i => {
//     return sum += i
//   })
//   console.log(newarray)
// }
// function runningTotal(array) {
//   let sum = 0
//   let newarray = []
//   array.forEach((_,element) => {
//     newarray.push(sum += array[element])
//   });
//   console.log(newarray)
// }

//#29
// write a function that takes an array of numbers and returns an array with the same
// number of elements, with each element's value being the running total from the original array
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}
// function wordSizes(string) {
//   let objNew = {}
//   let newArray = string.split(' ');
//   for (i = 0; i < newArray.length; i++) {
//     let wordLength = newArray[i].replace(/[\W]/g,"").length;
//     if (wordLength === 0) {
//       continue;
//     }
//     objNew[wordLength] = objNew[wordLength] ? objNew[wordLength] += 1 : 1
//   }
//   console.log(objNew)
// }

// #30
// letter counter part 2.  Modify the wordSizes function from previous exercises to 
// exclude non-letters when determining wor sizes 
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}
// function wordSizes(string) {
//   let objNew = {}
//   let newArray = string.split(' ');
//   for (i = 0; i < newArray.length; i++) {
//     let wordLength = newArray[i].replace(/[\W]/g,"").length;
//     if (wordLength === 0) {
//       continue;
//     }
//     objNew[wordLength] = objNew[wordLength] ? objNew[wordLength] += 1 : 1
//   }
//   console.log(objNew)
// }


// #32
// cute angles.  Write a function that turns dd to ddmmss
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
// function dms(floater) {
//   let newarray = []
//   let degrees = Math.floor(floater);
//   let minSec = (floater % 1) * 60
//   let minutes = Math.floor(minSec)
//   let seconds = Math.floor((minSec % 1) * 60);
//   newarray.push(degrees.toString(), minutes.toString(), seconds.toString());
//   let newArr = newarray.map(element => {
//     if (element.length < 2) {
//       return 0 + element;
//     } else {
//       return element;
//     }
//   });
//   newArr.splice(1,0,'°');
//   newArr.splice(3,0, "'");
//   newArr.splice(5,0,'"');
//   console.log(newArr.join(''));
// }

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"155
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// #33
// combining arrays.  write a function that takes two arrays as arguments and returns
// an array containing the union of the values from the two.
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
// function union(arr1, arr2) {
//   arr2.forEach(element => {
//     if (!arr1.includes(element)) {
//       arr1.push(element)
//     }
//   });
//   console.log(arr1)
// }

// #34
// write a function that takes an array as an argument, and returns an array that contains two
// elements, each of which is an array.  Put first half of original array into arrayElement#1 and vice versa for 2nd half
// if odd number of elements, put in first half
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]
// function halvsies (array) {
//   let half = Math.ceil(array.length/2);
//   let firstHalf = array.slice(0,half)
//   let secondHalf = array.slice(half)
//   return [firstHalf, secondHalf]
// }

// #35
// find the duplicate.  Given an unordered array and the information that exactly one value in the varray occurs twice
// find the value that occurs twice
// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
// function findDup(arra) { 
//   newarray = []
//   arra.forEach(element => {
//     if (newarray.includes(element)) {
//       console.log(element)
//     } newarray.push(element)
//   });
// }

// #36
// combine two lists.  write a function that combines two arrays passed as arguments 
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
// function interleave(array1, array2) {
//   let newArray = []
//   for (i = 0; i < array1.length; i++) {
//     newArray.push(array1[i], array2[i])
//   }
//   console.log(newArray)
// }

// #37
// multiplicative average.  write a function that takes an array of integers as input
// multiplies all of the integers together, dvivide the result by the number of 
// entries in the array and returns the value as a string to 3 decimals
// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
// function multiplicativeAverage(array) {
//   let result = array.reduce( (a,b) => a * b, 1 ) / array.length;
//   console.log(result.toFixed(3).toString());
// }

// #38
// multiple lists.  Write a function that takes two array arguments, each containing a list of 
// numbers, and returns a new array that contains the product 
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
// function multiplyList(arr1, arr2) {
//   let newArray = []
//   for (let index = 0; index < arr1.length; index++) {
//     let newValue = arr1[index] * arr2[index];
//     newArray.push(newValue)
//   }
//   console.log(newArray)
// }

// #39
// lists of digits. write a function that takes one argument, a positive integer, and returns a list
// of the digits in the number
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]
// function digitList(number) {
//   let newArr = number.toString().split('');
//   let result = []
//   newArr.forEach(element => {
//     result.push(Number(element));
//   });
//   console.log(result)
// }

// #40
// how many. write a function that counts the number of occurrences of each element in a given array
// once counted, log each element alongside the number of occurrences
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];
// countOccurrences(vehicles);
// function countOccurrences(vehicles) {
//   let obj = {};
//   vehicles.forEach(car => {
//     obj[car] = obj[car] ? obj[car] += 1 : 1;
//   });
//   console.log(obj);
//   Object.keys(obj).forEach(element => {
//     console.log(`${element} => ${obj[element]}`);
//   });
// }

// #41
// array average write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer component of the average
// the array will never be empty and the numbers will always be positive integers
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40
// function average(array) {
//   let average = array.reduce((sum, element) => {
//     return sum += element
//   },0) / array.length
//   console.log(Math.floor(average))
// }

// #44
// write a function that takes a string, doubles every character in the string and returns 
// result as new string
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
function repeater(string) {
  let newarray = [];
  string.split('').forEach(i => {
    newarray.push(i,i);
  });
  newstring = newarray.join('')
  console.log(newstring)
}
