/*
url: https://www.codewars.com/kata/55606aeebf1f0305f900006f

Description:
Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form.
To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as (https://en.wikipedia.org/wiki/Two's_complement); assume all numbers are integers stored using 4
bytes (or 32 bits) in any language.

Your output should ignore leading 0s.

Examples (input --> output):
3  --> "11"
-3 -->"11111111111111111111111111111101"
Be Ready for Large Numbers. Happy Coding ^_^
*/

function toBinary(n){
  if (n < 0) {
    n += Math.pow(2, 32);
  }
  return n.toString(2);
}

function toBinary1(n) {
  return (n >>> 0).toString(2)
}

console.log(toBinary(-5));
