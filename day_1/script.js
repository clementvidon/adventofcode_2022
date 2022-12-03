"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8");

const calcSum = (...args) => args.reduce((a, b) => eval(a) + eval(b));

function contentSums(input) {
  const contentSplit = input.split("\n\n");
  var contentSums = [];
  for (var i = 0; i < contentSplit.length - 1; i++) {
    contentSums.push(Number(calcSum(...contentSplit[i].split("\n"))));
  }
  return contentSums;
}

function challenge_1(input) {
  return Math.max(...contentSums(input));
}

function challenge_2(input) {
  return calcSum(
    ...contentSums(input)
      .sort((a, b) => b - a)
      .slice(0, 3)
  );
}

console.log("challenge_1 = " + challenge_1(input)); // 69206
console.log("challenge_2 = " + challenge_2(input)); // 197400
