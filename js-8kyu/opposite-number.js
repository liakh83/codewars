/*
url: https://www.codewars.com/kata/opposite-number
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
 return number * -1
}

console.log(opposite(1))

function opposite1(number) {
  return -number;
}

console.log(opposite1(-1))
