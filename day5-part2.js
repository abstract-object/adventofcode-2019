const fs = require("fs");

const inputArray = fs.readFileSync("./day5-input.txt").toString().split(",");

const inputValue = 5;
let outputValue = null;

let opCodeCount = 0;

while (inputArray[opCodeCount].slice(-2) !== "99" && inputArray[opCodeCount].slice(-2) !== "00") {
  let opCode = inputArray[opCodeCount];
  let parameter1 = 0;
  let parameter2 = 0;

  if (inputArray[opCodeCount].length > 2) {
    parameter1 = Number(inputArray[opCodeCount].slice(-3)[0]) || 0;
    parameter2 = inputArray[opCodeCount].length > 3 && Number(inputArray[opCodeCount].slice(-4)[0]) || 0;
  }

  switch (Number(opCode.slice(-2))) {
    case 1:
      inputArray[Number(inputArray[opCodeCount + 3])] = (Number(parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) + Number(parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]))).toString();
      opCodeCount += 4;
      break;
    case 2:
      inputArray[Number(inputArray[opCodeCount + 3])] = (Number(parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) * Number(parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]))).toString();
      opCodeCount += 4;
      break;
    case 3:
      inputArray[Number(inputArray[opCodeCount + 1])] = inputValue.toString();
      opCodeCount += 2;
      break;
    case 4:
      outputValue = Number(parameter1 ? inputArray[opCodeCount + 1] : inputArray[Number(inputArray[opCodeCount + 1])]);
      opCodeCount += 2;
      break;
    case 5:
      if ((parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) !== 0) {
        opCodeCount = Number(parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]));
      } else {
        opCodeCount += 3;
      }
      break;
    case 6:
      if ((parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) === 0) {
        opCodeCount = Number(parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]));
      } else {
        opCodeCount += 3;
      }
      break;
    case 7:
      if ((parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) < (parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]))) {
        inputArray[Number(inputArray[opCodeCount + 3])] = "1";
      } else {
        inputArray[Number(inputArray[opCodeCount + 3])] = "0";
      }
      opCodeCount += 4;
      break;
    case 8:
      if ((parameter1 ? Number(inputArray[opCodeCount + 1]) : Number(inputArray[Number(inputArray[opCodeCount + 1])])) === (parameter2 ? Number(inputArray[opCodeCount + 2]) : Number(inputArray[Number(inputArray[opCodeCount + 2])]))) {
        inputArray[Number(inputArray[opCodeCount + 3])] = "1";
      } else {
        inputArray[Number(inputArray[opCodeCount + 3])] = "0";
      }
      opCodeCount += 4;
      break;
  }

  if (outputValue !== null) {
    console.log(outputValue);
    outputValue = null;
  }
}