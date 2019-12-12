const fs = require("fs");

const inputArray = fs.readFileSync("./day6-input.txt").toString().split("\n");
newArray = inputArray.map(input => input.split(")"));

const AOrbitsBMap = {};
const BOrbitsAMap = {};

newArray.forEach(orbit => {
  AOrbitsBMap[orbit[1]] = orbit[0];
  BOrbitsAMap[orbit[0]] = orbit[1];
});

const findSAN = (currentObj, prev) => {
  let upCounter = 0;
  let downCounter = 0;
  let totalSteps = 0;

  if (BOrbitsAMap[currentObj] === "SAN") {
    return totalSteps;
  } else if (downCounter <= upCounter && BOrbitsAMap[currentObj] !== prev) {
    downCounter++;
    totalSteps += 1;
    return (Number.isNaN(findSAN(BOrbitsAMap[currentObj], currentObj)) ? 0 : findSAN(BOrbitsAMap[currentObj], currentObj)) + totalSteps;
  } else if (upCounter <= downCounter && AOrbitsBMap[currentObj] !== prev) {
    upCounter++;
    totalSteps += 1;
    return (Number.isNaN(findSAN(AOrbitsBMap[currentObj], currentObj)) ? 0 : findSAN(AOrbitsBMap[currentObj], currentObj)) + totalSteps;
  } else {
    return null;
  }
};

console.log(findSAN(AOrbitsBMap["YOU"], "YOU"));