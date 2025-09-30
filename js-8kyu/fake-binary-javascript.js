/*
url: https://www.codewars.com/kata/fake-binary/javascript

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(str) {
  let newStr = "";
  for (let char of str) {
    if (char >= 5) {
      newStr = newStr + "1";
    } else {
      newStr = newStr + "0";
    }
  }
  return newStr;
}

console.log(fakeBin("45385593107843568"));

const fakeBin1 = (str) => {
  let newStr = "";
  for (let char of str) {
    newStr += char >= 5 ? "1" : "0";
  }
  return newStr;
};

console.log(fakeBin1("45385593107843568"));

const fakeBinary = (str) => {
  return str
    .split("")
    .map((char) => (Number(char) >= 5 ? "1" : "0"))
    .join("");
};

console.log(fakeBinary("45385593107843568"))
