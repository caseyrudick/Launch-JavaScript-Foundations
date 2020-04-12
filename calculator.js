// to install readline-sync run the following command from your lesson directory:
// $ npm install readline-sync --save
// if successful, command should create a directory called node_modeules inside
// your lesson directory.  Confirm it's there and that it contains a readline-sync 
// subdirectory

// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

console.log('Welcome to Calculator!')
// require is a Node built-in function to look for the readline-sync library in the
// node_modules folder.  Function returns the library in the form of an object that 
// we can assign to the rlsync object
rlsync = require('readline-sync')
// now use the question method from readline-sync libray to get input from the user
// need to refer to the method as rlsync.question 
// question method forces the program to wait for keyboard input 
// returns the input as a stringwhen the user presses the return
firstNum = rlsync.question('What\'s the first number? ')
secondNum = rlsync.question('What\'s the second number? ')
// time to ask for operation input
operator = rlsync.question('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide ')
// now begin function
switch(operator){
  case "1":
    console.log('Result: ' + (parseInt(firstNum)+parseInt(secondNum)));
    break;
  case "2":
    console.log('Result: ' + (parseInt(firstNum)-parseInt(secondNum)))
    break;
  case "3":
    console.log('Result: ' + (parseInt(firstNum)*parseInt(secondNum)))
    break;
  case "4":
    console.log('Result: ' + (parseInt(firstNum)/parseInt(secondNum)))
    break
}
// rlsync.question always returns a string, that's why we compare to '1'
// always use '===' because == can coerce one or both values to a different value type
