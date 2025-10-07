/*
url: https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1

Description:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22)
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/

function minSum(arr) {
  let sum = 0
  const sortArr = arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length/2; i += 1) {
    console.log(`${i}`, sum, (sortArr[i] * sortArr[sortArr.length - (1 + i)]))
    sum += (sortArr[i] * sortArr[sortArr.length - i - 1])
  }
 return sum;

}

const minSumReduce = (arr) => {
  return arr.sort((a, b) => a - b).slice(0, arr.length / 2).reduce((acc, cur, index) => acc + cur * arr[arr.length - index -1], 0)
}

console.log(minSumReduce([12,6,10,26,3,24]))

console.log(minSum([9,2,8,7,5,4,0,6]))