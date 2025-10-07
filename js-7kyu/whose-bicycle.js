/*
url: https://www.codewars.com/kata/whose-bicycle

Description:
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for
someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:

ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
           }
*/

function whoseBicycle(diary1, diary2, diary3) {
  const arrObj = [diary1, diary2, diary3];
  const arr = [
    "I need to buy a bicycle for my first son.",
    "I need to buy a bicycle for my second son.",
    "I need to buy a bicycle for my third son.",
  ];
  let arrSum = [];
  for (let i = 0; i < arrObj.length; i++) {
    let sum = 0;
    for (let key in arrObj[i]) {
      sum += arrObj[i][key];
      console.log(arrObj[i][key]);
      console.log("sum", sum);
    }
    arrSum.push(sum);
  }
  console.log(...arrSum);
  const maxNum = Math.max(...arrSum);
  const maxIndex = arrSum.indexOf(maxNum);
  if (arrSum[0] == arrSum[1] && arrSum[1] == arrSum[2]) {
    return arr[2];
  } else if (arrSum[0] == arrSum[1] && arrSum[1] > arrSum[2]) {
    return arr[1];
  } else if (arrSum[0] == arrSum[2] && arrSum[1] < arrSum[2]) {
    return arr[2];
  } else if (arrSum[1] == arrSum[2]) {
    return arr[2];
  } else {
    return arr[maxIndex];
  }
}

const whoseBicycle2 = (diary1, diary2, diary3) => {
  const diaries = [diary1, diary2, diary3];
  const son = {
    0: "first",
    1: "second",
    2: "third",
  };

  const sumDiary = diaries.map((diary) => {
    const sum =  Object.values(diary).reduce((acc, cur) => acc + cur, 0);
    return sum;
  });
  console.log('sumDiary', sumDiary)
  const maxValue = Math.max(...sumDiary);
  const maxIndex = sumDiary.lastIndexOf(maxValue);
  return `I need to buy a bicycle for my ${son[maxIndex]} son.`
};

console.log(
  whoseBicycle2(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 5,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    }
  )
); //

// console.log(
//   whoseBicycle(
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 5,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     },
//     {
//       algebra: 6,
//       history: 7,
//       physics: 8,
//       geography: 9,
//       chemistry: 10,
//     }
//   )
// );
