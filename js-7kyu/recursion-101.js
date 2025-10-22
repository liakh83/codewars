/*
url: https://www.codewars.com/kata/recursion-101

Description:
In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a and b will both be lower than 10E8.

More examples in tests cases. Good luck!

Please also try Simple time difference
*/

function solve(a,b){
  if(a === 0 || b === 0){
    return [a, b]
  }
  else if(a >= 2*b) {
    // console.log('a >= 2*b :','a', a-2*b, 'a', b)
    const result1 = solve((a-2*b), b)
    return result1
  }
   else if(b >= 2*a) {
    // console.log('b >= 2*a:', 'a', a , 'b', b -2*a)
     const result = solve(a, (b -2*a))
     return  result
  }
   return [a, b]
}

console.log(solve(22, 5)) //  [0, 1]

/*
 📉 Почему это ускоряет работу

Если a и b очень большие (до 10^8, как в условии),
цикл a = a - 2*b может выполниться миллионы раз.

А a % (2*b) делает то же самое за одну операцию.
Это оптимизация от O(n) к O(1) по времени.
 */

function solve2(a,b){
  if(a === 0 || b === 0){
    return [a, b]
  }
  else if(a >= 2*b) {
    // console.log('a >= 2*b :','a', a-2*b, 'a', b)
    a = a % (2*b)
    return solve(a, b)
  }
   else if(b >= 2*a) {
    //  console.log('b >= 2*a:', 'a', a , 'b', b -2*a)
     b = b % (2*a)
    return solve(a, b)
  }
   return [a, b]
}

console.log(solve2(22, 5)) //  [0, 1]