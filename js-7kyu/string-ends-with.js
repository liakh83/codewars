/*
url: https://www.codewars.com/kata/string-ends-with

Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/

const stringEndsWith = (str, ending) => {
  return str.endsWith(ending);
};

console.log(stringEndsWith('abcde', 'cde'))
