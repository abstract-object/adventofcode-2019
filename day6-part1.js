const fs = require("fs");

const inputArray = fs.readFileSync("./day6-input.txt").toString().split("\n");
newArray = inputArray.map(input => input.split(")"));

const orbitMap = {};

newArray.forEach(orbit => {
  orbitMap[orbit[1]] = orbit[0];
});

const recursiveCountOrbit = listOfOrbits => {
  let count = 0;

  for (const orbit of listOfOrbits) {
    let current = orbit;

    while (orbitMap[current]) {
      count++;
      current = orbitMap[current];
    }
  }
  return count;
};

console.log(recursiveCountOrbit(Object.keys(orbitMap)));