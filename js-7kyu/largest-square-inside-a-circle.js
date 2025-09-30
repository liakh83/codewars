/*
url: https://www.codewars.com/kata/largest-square-inside-a-circle

Description:
Determine the area of the largest square that can fit inside a circle with radius r.
*/

function areaLargestSquare(r) {
  return 2*(r ** 2); //code here
}
console.log(areaLargestSquare(3))


const ITERATIONS = 10_000_000;
let r = 123;

// Тест с оператором **
let start = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  let area = 2 * r ** 2;
}
let end = performance.now();
console.log("** operator:", (end - start).toFixed(5), "ms");

// Тест с Math.pow
start = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  let area = Math.pow(r, 2) * 2;
}
end = performance.now();
console.log("Math.pow:", (end - start).toFixed(5), "ms");