/*
url: https://www.codewars.com/kata/lottery-ticket

Description:
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it.
If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have
one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win).
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

function bingo(ticket, win) {
  let minWin = 0;
  for (let i = 0; i < ticket.length; i += 1) {
    let strArr = [...ticket[i][0]];
    console.log(strArr)
    for (let char of strArr) {
      console.log(char)
      console.log(char.charCodeAt())
      console.log(ticket[i][1])
      console.log(char.charCodeAt() === ticket[i][1])

      if (char.charCodeAt() === ticket[i][1]) {
        minWin++;
        break;
      }
    }
    console.log("minMin:", minWin);
  }
  // return minWin;
  console.log("minMin:", minWin, 'win:', win, "boolean:", minWin === win);

  return minWin >= win ? "Winner!" : "Loser!";
}

const bingo1 = (ticket, win) => {
  const minWin = ticket.filter(arr => arr[0].split('').some(l => l.charCodeAt() == arr[1])).length
  return minWin >= win ? "Winner!" : "Loser!";
}

const bingo2 = (ticket, win) => {
  let minWin = 0;
  ticket.forEach(game => {
    if(game[0].includes(String.fromCharCode(game[1]))) {
      minWin ++;
    }
  })

  return minWin >= win ? "Winner!" : "Loser!";
}

/*console.log(
  bingo([
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ]),
  2
); // 'Loser!'
*/

console.log(
  bingo2(
   [['KHJHHSK',75], ['SPRM',67]], 2
  )
); // 'Loser!'
