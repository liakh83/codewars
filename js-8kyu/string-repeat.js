/*
url: https://www.codewars.com/kata/string-repeat

Description:
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// repeat - Принимает в качестве параметра число и повторяет строку указанное количество раз.

function repeatStr (n, s) {
  return s.repeat(n);
}


