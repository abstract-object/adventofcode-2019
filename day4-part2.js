let numberOfPasswords = 0;

for (let i = 124075; i <= 580769; i++) {
  let str = i.toString().split("");

  let repeatDigitCount = {};
  let greatest = 0;
  let neverDecrease = true;
  for (let j = 0; j < str.length; j++) {
    if (Number(str[j]) < greatest) {
      neverDecrease = false;
      break;
    } else if (Number(str[j]) > greatest) {
      greatest = Number(str[j]);
    }
    if (j > 0 && str[j] === str[j - 1]) {
      repeatDigitCount[str[j]] ? repeatDigitCount[str[j]]++ : repeatDigitCount[str[j]] = 1;
    }
  }
  if (neverDecrease) {
    if (Object.values(repeatDigitCount).includes(1)) numberOfPasswords++;
  }
}

console.log(numberOfPasswords);