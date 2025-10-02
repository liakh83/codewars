/*

url: https://www.codewars.com/kata/colour-association

Description:
Color plays an important role in our lifes. Most of us like this color better then another.
 User experience specialists believe that certain colors have certain psychological meanings for us.

You are given a 2D array, composed of a color and its 'common' association in each array element.
The function you will write needs to return the color as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

const colorAssociation = (array) => {
  const arr = []
  for (let i = 0; i < array.length; i += 1) {
    const obj = {};
    obj[array[i][0]] = array[i][1];
    arr.push(obj)
  }
  return arr
};

const colorAssociation2 = (array) => {
  return array.map(([color, association]) => ({ [color]: association }))
}

console.log(
  colorAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
); // [{white:"goodness"},{blue:"tranquility"}]
