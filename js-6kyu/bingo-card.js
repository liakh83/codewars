/*
url: https://www.codewars.com/kata/bingo-card

Description:
After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

a bingo card
 B  I  N  G  O
14 28
12 27
5
6
3

*/

function getCard() {
  let randomBingo = [];
  const letter = ['B', 'I', 'N', 'G', 'O'];
  const minRange = [1, 16, 31, 46, 61]
  const maxRange = [15, 30, 45, 60, 75]
  const count = [5, 5, 4, 5, 5]

  for(let i = 0; i < letter.length; i += 1) {
    let randomLine = new Set();
    // for(let j = 0; j < 5; j += 1) {
     while(randomLine.size < count[i]) {
      let randomNumber = Math.floor(Math.random() * (maxRange[i] - minRange[i])) + minRange[i];
      randomLine.add(randomNumber)
      // console.log('set collection', randomLine)
      // console.log(randomNumber);
      // if(!randomLine.includes(randomNumber)) {

      //   randomLine.push(randomNumber)
      //   console.log(randomLine)
      // }
      // while(randomLine.includes(randomNumber)){
      //   randomNumber =  Math.floor(Math.random() * (maxRange[i] - minRange[i])) + minRange[i];;
      //   console.log('after',randomNumber);
      // }
    }
    //console.log('randomLine', [...randomLine])
    randomBingo.push(...[...randomLine].map(char => letter[i] + char))
    //console.log('randomBingo : ', randomBingo)
  }
  console.log(randomBingo.length)
  //  randomBingo.splice(12, 1)
return randomBingo;
}

// Math.floor(Math.random() * (max - min)) + min
const value = Math.floor(Math.random() * (15 - 1) + 1)
console.log(getCard())
