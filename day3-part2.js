const fs = require("fs");

const splitLines = fs.readFileSync("./day3-input.txt").toString().split("\n");
const line1 = splitLines[0].split(",");
const line2 = splitLines[1].split(",");

const processedLine1 = line1.map(instruction => {
  return [instruction.substring(0, 1), Number(instruction.substring(1))];
});

const processedLine2 = line2.map(instruction => {
  return [instruction.substring(0, 1), Number(instruction.substring(1))];
});

const occupiedSpaces = {};
let x = 0;
let y = 0;
let steps = 0;

const cross = {};
const cross2 = {};

processedLine1.forEach(instruction => {
  for (let i = 0; i < instruction[1]; i++) {
    switch (instruction[0]) {
      case "U":
        y++;
        break;
      case "R":
        x++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
    }
    steps++;
    occupiedSpaces[`${x},${y}`] = [["1", steps]];
  }
});

x = 0;
y = 0;
steps = 0;
processedLine2.forEach(instruction => {
  for (let i = 0; i < instruction[1]; i++) {
    switch (instruction[0]) {
      case "U":
        y++;
        break;
      case "R":
        x++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
    }
    steps++;
    if (occupiedSpaces[`${x},${y}`] && occupiedSpaces[`${x},${y}`].find(el => el[0] === "1")) {
      cross2[occupiedSpaces[`${x},${y}`].find(el => el[0] === "1")[1] + steps] = true;
    }
  }
});

console.log(Math.min(...Object.keys(cross2)));