/*
url: https://www.codewars.com/kata/vowel-one

Description:
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

function vowelOne(string){
let str = '';
let vowelStr = 'aeoiu'
const lowerStr = string.toLowerCase()
// const joinStr = string.replaceAll(', ', '')
// console.log(joinStr)
for(let char of lowerStr) {
  // console.log(char)
    if(vowelStr.includes(char)) {
      str += '1';
    } else {
      str += '0';
    }
  }
  return str;
}

console.log(vowelOne("aeiou, abc, dfgh"))
