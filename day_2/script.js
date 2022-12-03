"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8").split("\n");

// P1 P2 Score
//  A  X  1      "rock"     > scissors
//  B  Y  2      "paper"    > rock
//  C  Z  3      "scissors" > paper
//
// Score+=
//  0 lost
//  3 draw
//  6 won

function challenge_1(game) {
  let score = 0;
  for (const round in game) {
    if (game[round][0] == "A") {
      score += (game[round][2] == "X") * (3 + 1);
      score += (game[round][2] == "Y") * (6 + 2);
      score += (game[round][2] == "Z") * (0 + 3);
    } else if (game[round][0] == "B") {
      score += (game[round][2] == "X") * (0 + 1);
      score += (game[round][2] == "Y") * (3 + 2);
      score += (game[round][2] == "Z") * (6 + 3);
    } else if (game[round][0] == "C") {
      score += (game[round][2] == "X") * (6 + 1);
      score += (game[round][2] == "Y") * (0 + 2);
      score += (game[round][2] == "Z") * (3 + 3);
    }
  }
  return score;
}

// P1 P2 Score
//  A  X  1      "rock"     < scissors  lost
//  B  Y  2      "paper"    > paper     draw
//  C  Z  3      "scissors" > rock      win
//
// Score+=
//  0 lost
//  3 draw
//  6 won

function challenge_2(game) {
  let score = 0;
  for (const round in game) {
    if (game[round][0] == "A") {
      score += (game[round][2] == "Y") * (3 + 1);
      score += (game[round][2] == "Z") * (6 + 2);
      score += (game[round][2] == "X") * (0 + 3);
    } else if (game[round][0] == "B") {
      score += (game[round][2] == "X") * (0 + 1);
      score += (game[round][2] == "Y") * (3 + 2);
      score += (game[round][2] == "Z") * (6 + 3);
    } else if (game[round][0] == "C") {
      score += (game[round][2] == "Z") * (6 + 1);
      score += (game[round][2] == "X") * (0 + 2);
      score += (game[round][2] == "Y") * (3 + 3);
    }
  }
  return score;
}

console.log("challenge_1 = " + challenge_1(input));
console.log("challenge_2 = " + challenge_2(input));

// challenge_1 = 14069
// challenge_2 = 12411
