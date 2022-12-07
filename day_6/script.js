"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8");

function hasRepeats(str) {
  return /(.).*\1/.test(str);
}

function challenge_1(str) {
  for (let i = 0; i < str.length; i++) {
    if (!hasRepeats(str.slice(i, i + 4))) {
      return i + 4;
    }
  }
}

function challenge_2(str) {
  for (let i = 0; i < str.length; i++) {
    if (!hasRepeats(str.slice(i, i + 14))) {
      return i + 14;
    }
  }
}

console.log("challenge_1 = " + challenge_1(input)); // 1651
console.log("challenge_2 = " + challenge_2(input)); //
