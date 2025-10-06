/*
url: https://www.codewars.com/kata/get-decimal-part-of-the-given-number

Description:
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

function getDecimal(n){
  return Math.abs(n)- Math.floor(Math.abs(n))
}

console.log(getDecimal(-0.2))