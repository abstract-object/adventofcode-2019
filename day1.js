const fs = require("fs");

const input = fs.readFileSync("./day1-input.txt").toString().split("\n");

//part 1
const fuelArray = input.map(mass => {
  return Math.floor(mass / 3) - 2;
});

console.log(fuelArray.reduce((a, b) => a + b, 0));

//part 2
const recursiveFuelCalc = initialMass => {
  let fuelMass = Math.floor(initialMass / 3) - 2;
  if (Math.floor(fuelMass / 3) - 2 <= 0) return fuelMass;

  return fuelMass + recursiveFuelCalc(fuelMass);
};

const newFuelArray = input.map(mass => {
  return recursiveFuelCalc(mass);
});

console.log(newFuelArray.reduce((a, b) => a + b, 0));