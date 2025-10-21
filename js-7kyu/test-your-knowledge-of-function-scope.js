/*
 * url: https://www.codewars.com/kata/test-your-knowledge-of-function-scope
 *
 * Description:
    Write a function that adds from two invocations.

    All inputs will be integers.

    add(3)(4)  // 7
    add(12)(20) // 32
 */

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = x => y => y + x;

console.log(add2(3)(5));
