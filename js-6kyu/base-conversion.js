/*
url: https://www.codewars.com/kata/base-conversion

Description:
In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets.
 Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string).
You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Examples
  /convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

  /other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript.
In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
*/

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

const base = (obj) => {
  const result = {};
  for (key in obj) {
     result[key] = obj[key].length
  }
  return result;
}

console.log('result:' ,base(Alphabet))

function convert(input, source, target) {
  if(source === target) {
    return input;
  }

  let value = 0;
  const sourceBase = source.length
  for(const char of input) {
    value = value * sourceBase + source.indexOf(char);
    console.log('source', value)
  }
console.log(value)
  if(value === 0) {
    return target[0]
  }
  const targetBase = target.length
  let result = '';
  while(value > 0) {
   result += target[(value % targetBase)]
   value = Math.floor(value / targetBase)
   console.log(value, result)
  }
  return [...result].reverse().join('');
}

//  console.log(convert("SAME", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')) //'SAME', '"SAME" alpha_upper -> alpha_upper';
// console.log(convert("27", '0123456789', 'abcdefghijklmnopqrstuvwxyz')); // should return "bb"
// console.log(convert("15", '0123456789', '01'));  '1111', '"15" dec -> bin'
console.log(convert("0", '0123456789', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',))  //'a', '"0" dec -> alpha')
console.log(convert("15", '0123456789', '01234567')) // '17', '"15" dec -> oct'
