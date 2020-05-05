
// // #9
// // convert a string to a number NOT using parseInt() or NUMBER
// console.log(stringToInteger("4321"));
// console.log(stringToInteger("570"));
// move from string to number
// break up string into array
// create array of integers from array of letters by looking up in obj, create it via map
// look up number via object, run loop adding value = value *10 + element

// // #10
// // convert a string to number that may have a +- in front of it
// // console.log(stringToSignedInteger("4321") === 4321); // logs true
// // console.log(stringToSignedInteger("-570") === -570); // logs true
// // console.log(stringToSignedInteger("+100") === 100);
// if string[0] == '-' return -stringtointeger(number)



// // #11
// //convert a number to a string! same as #9, but reversed
// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890); 
// can look up string value via index of strings & join it
// first need to iterate through string and get % 10 and add to array
// do while loop to hack it apart with %, followed by Math.floor

// // #12
// // convert a number to a string! and add sign
// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");


// #13
// write a function that takes a string argyment and returns a new string 
// that contains the value of the original string with all the consectutive duplicate characters
// collapsed into a single character
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// split string, iterate through array 
// if value of previous index ==! current, add to result


// #15
// write a function that takes one argument, a positive integer and returns a string of 
// alternating '1's and '0's always starting with 1.  The length will match the 
// given integer
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"
// do while 
// loop thru and if idnex % 2 = 0; increment result by '0'


// #16
// find the fibonacci number at the requested index
// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74
// set one, two, and index 
// do while
// while index.toString().length <= number

// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74

// #21
// write a function that replaces all the non-alphabetic characters, replaced by spaces
// cleanUp("---what's my +*& line?");    // " what s my line "
//replace /\W/g, ''
// if previous was ' ', replace ''
// function cleanUp(string) { 
//   let newstring = string.replace(/[\W]/g, ' ').replace(/ +/g, " ");
//   console.log(newstring)
// }
// cleanUp("---what's my +*& line?");    // " what s my line "

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

// #22
// build a program that randomly generates Teddy's age and logs it to the console
// have the number between 20 & 120 inclusive

// #25
// write a function that returns true if the string passed as an 
// argument is a palindrome or false otherwise
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false


// #26 
// same as above except you need to take out case sensitivity
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

//#28 
// write a function that takes an array of numbers and returns an array with the same
// number of elements, with each element's value being the running total from the original array
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []
// function runningTotal(array) {
//   let newone = 0;
//   newarray = []
//   for (i = 0; i < array.length; i++) {
//     newarray.push(newone += array[i])
//   }
//   console.log(newarray)
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []


// #29
// write a function that takes a string consisting of zero or more
// space separated words, and returns an object that shows the number of words
// of different sizes
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

// #30
// letter counter part 2.  Modify the wordSizes function from previous exercises to 
// exclude non-letters when determining word sizes 
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}

// #34
// write a function that takes an array as an argument, and returns an array that contains two
// elements, each of which is an array.  Put first half of original array into arrayElement#1 and vice versa for 2nd half
// if odd number of elements, put in first half

// #36
// combine two lists.  write a function that combines two arrays passed as arguments 
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]



// #37
// multiplicative average.  write a function that takes an array of integers as input
// multiplies all of the integers together, dvivide the result by the number of 
// entries in the array and returns the value as a string to 3 decimals
// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// #39
// lists of digits. write a function that takes one argument, a positive integer, and returns a list
// of the digits in the number
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// #40
// how many. write a function that counts the number of occurrences of each element in a given array
// once counted, log each element alongside the number of occurrences
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];
// countOccurrences(vehicles);

// #41
// array average write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer component of the average
// the array will never be empty and the numbers will always be positive integers
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// #42
// after midnight. Write a function that takes a time useing minute based format and returns
// the time of day in a 24hr format.  Should work 
// function timeOfDay(number) {
//   let operation;
//   let result;
//   let hours = Math.floor(number / 60);
//   let days = Math.floor(hours / 24);
//   let minutes = (number % 60)
//   String(number)[0] === '-' ? operation = 'subtract' : operation = 'add';
//   if ((Math.abs(number) < 60) && (operation === 'subtract')) {
//     result = `23:${60 + number}`;
//   } else if (number === 0) {
//     result = '00:00';
//   } else if ((Math.abs(number) < 60)) {
//     result = `00:${number}`
//   } else if ((days > 1) && (operation === 'add')) {
//     hour = hours % 24
//     result = `${hour}:${minutes}`;
//   }
//   console.log(result)
// }
// function timeOfDay(number) {
//   let hours = Math.abs(number) / 60;
//   let hour;
//   let minutes;
//   switch (hours) {
//     case hours > 1440:
//       hour = Math.floor(hours % 24);
//       minutes = hour % 60;
//   }
//   console.log(`${hour}:${minutes}`);
// }

// console.log(timeOfDay(0)) //=== "00:00");
// console.log(timeOfDay(-3)) //=== "23:57");
// console.log(timeOfDay(35)) //=== "00:35");
// console.log(timeOfDay(-1437)) //=== "00:03");
// console.log(timeOfDay(3000)) //=== "02:00");
// console.log(timeOfDay(800)) //=== "13:20");
// console.log(timeOfDay(-4231)) //=== "01:29");

// #43

// #44
// write a function that takes a string, doubles every character in the string and returns 
// result as new string
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// #45
// write a function that takes a string, double every consonant character in the string and returns the
// result as a new string.  The function should not double vowels digits, punct or whitespace

// function doubleConsonants(string) {
//   let newArry = string.split();
//   let result = []
//   let consonants = ['b','c','d','f','g','h','i','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
//   newArry.forEach(element => {
//     console.log(element);
//     if ((consonants.includes(element))) {
//       result.push(element, element);
//     } else {
//       result.push(element);
//     }
//     results = result.join()
//   });
//   console.log(results)
// }
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""
let consonants = ['b','c','d','f','g']
let word = consonants.shift(2)
console.log(word)