const fs = require("fs");

const inputArray = fs.readFileSync("./day6-input.txt").toString().split("\n");
newArray = inputArray.map(input => input.split(")"));

const up = {};
const down = {};

newArray.forEach(orbit => {
  if (up[orbit[1]]) {
    up[orbit[1]].push(orbit[0]);
  } else {
    up[orbit[1]] = [orbit[0]];
  }

  if (down[orbit[0]]) {
    down[orbit[0]].push(orbit[1]);
  } else {
    down[orbit[0]] = [orbit[1]];
  }
});

const findSAN = (currentObj, prev, total) => {
  let newOrbits = [];
  prev.push(currentObj);
  if (currentObj === "SAN") {
    console.log(total - 1);
    return total;
  } else if (down[currentObj] && !(down[currentObj].every(obj => prev.includes(obj)))) {
    newOrbits = newOrbits.concat(down[currentObj].map(result => {
      if (!prev.includes(result)) {
        return findSAN(result, prev, total + 1);
      }
    }));
  } else if (up[currentObj] && !(up[currentObj].every(obj => prev.includes(obj)))) {
    newOrbits = newOrbits.concat(up[currentObj].map(result => {
      if (!prev.includes(result)) {
        return findSAN(result, prev, total + 1);
      }
    }));
  } else {
    return null;
  }
  return findSAN(currentObj, prev, total);
};

findSAN(up["YOU"][0], ["YOU"], 0);