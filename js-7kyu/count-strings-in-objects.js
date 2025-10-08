/*
url: https://www.codewars.com/kata/count-strings-in-objects

Description:
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

function strCount(obj) {
  let count = 0;
  for(const value of Object.values(obj).flat()) {
    if(typeof value === 'string') {
      count ++;
    } else if (value && typeof value === 'object') {
      count += strCount(value)
    }
  }

  return count;
}

const stringCount = (obj) => {
  let count = 0;
  for(key in obj) {
    if(typeof obj[key] === 'string') count ++;
    if(typeof obj[key] === 'object') count += stringCount(obj[key]);
  }
return count;
}

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null,
// });

const obj1 = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: { 1: "name" },
};

console.log(strCount(obj1));

console.log(stringCount(obj1))
