/**
 * url: https://www.codewars.com/kata/are-arrow-functions-odd
 *
 * Description:
   Time to test your basic knowledge in functions! Return the odds from a list:

   [1, 2, 3, 4, 5]  -->  [1, 3, 5]
   [2, 4, 6]        -->  []
 */

function odds(values){
  // arrow it
  return values.filter((item) => item % 2 !== 0);
}

console.log(odds([1, 2, 3, 4, 5]))