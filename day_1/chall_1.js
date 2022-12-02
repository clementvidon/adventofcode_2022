'use strict';

const fs = require('fs');

const content = fs.readFileSync('resources/chall_1', 'utf8');
const contentSplit = content.split('\n\n');

const calcSum = (...args) => args.reduce((a, b) => eval(a) + eval(b));

function main(contentSplit) {
  var contentSums = [];
  for (var i = 0; i < contentSplit.length - 1; i++) {
    contentSums.push(Number(calcSum(...contentSplit[i].split('\n'))));
  }
  return contentSums;
}

const contentSums = main(contentSplit);

console.log("challenge_1 = " + Math.max(...contentSums));
console.log("challenge_2 = " + calcSum(...contentSums.sort((a,b)=>b-a).slice(0, 3)));
