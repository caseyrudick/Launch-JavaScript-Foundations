// function findGreatest(numbers){
//   let savedNumber = numbers[0]
//   numbers.forEach(num=> {
//     if(num>savedNumber){
//       savedNumber = num
//     }
//   })
//   return savedNumber
// }

// write a function that returns the sum of two numbers

// SET variable = randomNumber1
// SET var2 = randomNumber2
// PRINT var1 + var2

//

// 2) a function that takes an array of strings and returns a string that is all those
//    strings concatenated together

// SET var = arrayofStrings
// SET varString = ''
// SET i
// WHILE i < arrayofStrings.length:
//   varString += arrayofStrings[i]

// let arr1 = ['sadf','dg','wer']
// let varString = arr1.join('')
// console.log(varString)
// let i
// while (i < arr1.length) {
//   varString += arr1[i]
//   i++
// } console.log(varString)

arr2 = [1,4,5,6,87,8,2]
newarry = []
let i = 0
while (i < arr2.length) {
  if(i % 2 === 0){
    newarry.push(arr2[i])
  } i += 1
}console.log(newarry)