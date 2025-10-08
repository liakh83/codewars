/*
url: https://www.codewars.com/kata/data-reverse

Description:
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/

function dataReverse(data) {
  let arr = [];
  for (let i = 0; i < data.length; i += 8) {
    const sliceArr = data.slice(0 + i, 8 + i).reverse();
    // console.log(...sliceArr);
    arr.push(...sliceArr);
  }
  return arr.reverse();
}

const reverseData = (data) => {
  let arr = [];

  while(data.length) {
     arr.push(...data.splice(-8));
  }
  return arr;
};

console.log(
  reverseData([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);

/*[
  0, 1, 0, 1, 0, 1, 0, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 1,
  1, 1, 1, 1, 1
]*/

/*expected      [ +0, 1, +0, 1, +0, 1, +0, 1, 1, 1, 1, 1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, 1, 1, 1, 1, 1, 1, 1, 1 ]
to deeply equal [ 1, +0, 1, +0, 1, +0, 1, +0, +0, +0, +0, +0, 1, 1, 1, 1, +0, +0, +0, +0, +0, +0, +0, +0, 1, 1, 1, 1, 1, 1, 1, 1 ]*/
