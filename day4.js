let numberOfPasswords = 0;

for (let i = 124075; i <= 580769; i++) {
  let str = i.toString().split("");

  let adjacentRepeatedDigit = false;
  let greatest = 0;
  let neverDecrease = true;
  for (let j = 0; j < str.length; j++) {
    if (!adjacentRepeatedDigit && j > 0 && str[j] === str[j - 1]) adjacentRepeatedDigit = true;
    if (Number(str[j]) < greatest) {
      neverDecrease = false;
      break;
    } else if (Number(str[j]) > greatest) {
      greatest = Number(str[j]);
    }
  }
  if (neverDecrease && adjacentRepeatedDigit) numberOfPasswords++;
}

console.log(numberOfPasswords);