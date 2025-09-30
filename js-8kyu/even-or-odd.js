/*
url: https://www.codewars.com/kata/even-or-odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(evenOrOdd(0));

const evenOrOdd1 = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log(evenOrOdd1(2));
