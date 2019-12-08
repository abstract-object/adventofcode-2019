const fs = require("fs");

const input = fs.readFileSync("./day2-input.txt").toString().split(",");
const numArray = input.map(value => {
  return Number(value);
})

//part1
numArray[1] = 12;
numArray[2] = 2;

let opCodeCount = 0;
while (numArray[opCodeCount] !== 99) {
  let opCode = numArray[opCodeCount];

  switch (opCode) {
    case 1:
      numArray[numArray[opCodeCount + 3]] = numArray[numArray[opCodeCount + 1]] + numArray[numArray[opCodeCount + 2]];
      break;

    case 2:
      numArray[numArray[opCodeCount + 3]] = numArray[numArray[opCodeCount + 1]] * numArray[numArray[opCodeCount + 2]];
      break;
  }

  opCodeCount += 4;
};

console.log(numArray[0]);