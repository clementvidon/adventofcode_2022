"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8").split("\n");

function toNumber(value) {
  return Number(value);
}

function challenge_1(pairs) {
  var overlap = 0;
  var s = [];
  for (var i = 0; i < pairs.length - 1; i++) {
    s = pairs[i].match(/\d+/g).map(toNumber);
    if (s[0] >= s[2] && s[1] <= s[3]) {
      overlap += 1;
    } else if (s[0] <= s[2] && s[1] >= s[3]) {
      overlap += 1;
    }
  }
  return overlap;
}

function challenge_2(pairs) {
  var overlap = 0;
  var s = [];
  for (var i = 0; i < pairs.length - 1; i++) {
    s = pairs[i].match(/\d+/g).map(toNumber);
    if (s[0] >= s[2] && s[1] <= s[3]) {
      overlap += 1;
    } else if (s[0] <= s[2] && s[1] >= s[3]) {
      overlap += 1;
    } else if (s[0] <= s[2] && s[1] <= s[3] && s[1] >= s[2]) {
      overlap += 1;
    } else if (s[0] >= s[2] && s[1] >= s[3] && s[0] <= s[3]) {
      overlap += 1;
    }
  }
  return overlap;
}

console.log("challenge_2 = " + challenge_2(input));
console.log("challenge_1 = " + challenge_1(input));
