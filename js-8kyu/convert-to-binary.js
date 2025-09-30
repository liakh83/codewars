/*
url:https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

Examples:

n = 1 should return 1
n = 5 should return 101
n = 11 should return 1011
*/

function toBinary(n){
  return Number(n.toString(2));
}

console.log(toBinary(12))

// for converting binary to decimal

const binaryToDecimal = (str) => {
  return parseInt(str, 2)
}

console.log(binaryToDecimal('101'))
