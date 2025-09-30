/*
url: https://www.codewars.com/kata/16-plus-18-equals-214

Description:
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
   1 6
   +
   1 8
  ------
   2 14

*/

function add(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const maxLength = Math.max(str1.length, str2.length);

  const arr1 = str1.padStart(maxLength, "0").split("");
  const arr2 = str2.padStart(maxLength, "0").split("");

  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(+arr1[i] + +arr2[i]);
    console.log("result : ", result);
  }

  return parseInt(result.join(""));
}

function add1(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const maxLength = Math.max(str1.length, str2.length);

  return parseInt(
    [...str1.padStart(maxLength, "0")]
      .map((digit, i) => +digit + +str2.padStart(maxLength, "0")[i])
      .join("")
  );
}

console.log(add(122, 81)); //214

let str1 = (1234).toString();
const str = [...str1.padStart(5, "0")];

console.log(str);
