/*
url: https://www.codewars.com/kata/combine-objects

Description:
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys
are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

function combine(...args) {
  let obj = {};

  for (let i = 0; i < args.length; i += 1) {
    for (let key in args[i]) {
      (`${key}` in obj) ?  obj[key] += args[i][key] : obj[key] = args[i][key] ;
      // if (`${key}` in obj) {
      //   obj[key] += args[i][key];
      // } else {
      //   obj[key] = args[i][key];
      // }
    }
  }
  return obj;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };


combine(objA, objB);
console.log('combine : ', combine(objA, objB))

function combine1(...objects) {
return objects.reduce((result, currentObj) => {
   for (let key in currentObj) {
     result[key] = (result[key] || 0) + currentObj[key]
   }
  return result
},{});
}

console.log('combine1 : ', combine1(objA, objB))
