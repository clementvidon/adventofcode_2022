"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8").split("\n");

function toNumber(value) {
  return Number(value);
}

function applyProcedure_2(stacks, procedure) {
  let i = 0;
  let tmp = [];
  while (procedure[i]) {
    let move = procedure[i][0];
    let from = stacks[procedure[i][1] - 1];
    let to = stacks[procedure[i][2] - 1];
    for (let n = 0; n < move; n++) {
      tmp.unshift(from[0]);
      from.shift();
    }
    for (let n = 0; n < move; n++) {
      to.unshift(tmp[0]);
      tmp.shift();
    }
    i++;
  }
  return stacks;
}

function applyProcedure_1(stacks, procedure) {
  let i = 0;
  while (procedure[i]) {
    let move = procedure[i][0];
    let from = stacks[procedure[i][1] - 1];
    let to = stacks[procedure[i][2] - 1];
    for (let n = 0; n < move; n++) {
      to.unshift(from[0]);
      from.shift();
    }
    i++;
  }
  return stacks;
}

function parseProcedure(procedure) {
  for (let i = 0; i < procedure.length - 1; i++) {
    procedure[i] = procedure[i].match(/\d+/g).map(toNumber);
  }
  return procedure;
}

function parseStacks(stacks) {
  const height = stacks.length - 1;
  let res = [];
  let col = 0;
  for (let j = 0; j < 9; j++) {
    let col = stacks[height].indexOf(String(j + 1));
    let stack = "";
    for (let i = 0; i < height; i++) {
      if (stacks[i][col] && stacks[i][col].match("^[A-Z]$"))
        stack = stack.concat(stacks[i][col]);
    }
    res.push(stack.split(""));
  }
  return res;
}

function challenge_1(input) {
  let res = "";
  let stacks;
  let procedure;
  for (let i = 0; i < input.length; i++) {
    if (input[i].match("^$")) {
      stacks = input.slice(0, i);
      procedure = input.slice(i + 1);
      break;
    }
  }
  stacks = parseStacks(stacks);
  procedure = parseProcedure(procedure);
  applyProcedure_1(stacks, procedure);
  for (let i = 0; i < 9; i++) {
    res = res.concat(stacks[i][0]);
  }
  return res;
}

function challenge_2(input) {
  let res = "";
  let stacks;
  let procedure;
  for (let i = 0; i < input.length; i++) {
    if (input[i].match("^$")) {
      stacks = input.slice(0, i);
      procedure = input.slice(i + 1);
      break;
    }
  }
  stacks = parseStacks(stacks);
  procedure = parseProcedure(procedure);
  applyProcedure_2(stacks, procedure);
  for (let i = 0; i < 9; i++) {
    res = res.concat(stacks[i][0]);
  }
  return res;
}

console.log("challenge_1 = " + challenge_1(input)); // QGTHFZBHV
console.log("challenge_2 = " + challenge_2(input)); // MGDMPSZTM
