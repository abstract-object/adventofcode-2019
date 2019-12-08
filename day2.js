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

//part2
const getNewNumArray = (noun, verb) => {
  let newArray = input.map(value => {
    return Number(value);
  });

  newArray[1] = noun;
  newArray[2] = verb;

  return newArray;
};

const getOutput = numArray => {
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

  return numArray[0];
};

let stop = false;
for (let noun = 0; noun < 100 && !stop; noun++) {
  for (let verb = 0; verb < 100 && !stop; verb++) {
    if (getOutput(getNewNumArray(noun, verb)) === 19690720) {
      console.log(100 * noun + verb);
      stop = true;
    }
  }
}