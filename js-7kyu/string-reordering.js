/*
url: https://www.codewars.com/kata/string-reordering

Description:
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

function sentence(arrayOfObjects) {
  const mergedObj = Object.assign({}, ...arrayOfObjects)
   let arr = [];
   console.log(mergedObj)
   const keys = Object.keys(mergedObj).sort((a,b) => a - b);

 for (let i = 0; i < keys.length; i += 1) {
    arr.push(mergedObj[keys[i]])
 }

console.log('keys', keys)
    return arr.join(' ');
}

const List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

const sentences = (List) => {
 return List.sort((a, b) => Object.keys(a) - Object.keys(b)).map((obj) => Object.values(obj)).join(' ')
}

console.log(sentences([
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]))

// console.log( sentence([{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}])) //  'dog took Vatsan for a spin'