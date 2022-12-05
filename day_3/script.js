"use strict";

const fs = require("fs");
const input = fs.readFileSync("input", "utf8").split("\n");

// - Two large compartments
// - Each rucksack has one item in the wrong compartments
//
// - a rucksack always has the same number of items in each of its 2 compartments
//
// sack_1: vJrwpWtwJgWrhcsFMMfFFhFp
// sack_2: jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// sack_3: PmmdzqPrVvPwwTWBwg
//
// sack_1: vJrwpWtwJgWr hcsFMMfFFhFp
//     p appears in both compartments !
// sack_2: jqHRNqRjqzjGDLGL rsFMfFZSrLrFZsSL
//     L appears in both compartments !
// sack_3: PmmdzqPrV vPwwTWBwg
//     P appears in both compartments !
//
//  Item priority:
//     a to z == 1 to 26
//     A to Z == 27 to 52
//
// So the sum of the priorities of the item type that appears
// in both compartments of each rucksack is p + L + P which
// is 16 + 38 + 42 = 96

const calcSum = (...args) => args.reduce((a, b) => eval(a) + eval(b));

function itemsValue(items) {
  let value = [];
  const upperCaseItems = items.toString().replace(/[^A-Z]/g, "");
  const lowerCaseItems = items.toString().replace(/[^a-z]/g, "");
  for (const i in lowerCaseItems)
    value.push(lowerCaseItems[i].charCodeAt(0) - 96);
  for (const i in upperCaseItems)
    value.push(upperCaseItems[i].charCodeAt(0) - 38);
  return value;
}

function intersection(...arrs) {
  let result = [];
  for (let i = 0; i < arrs.length; i++) {
    let arr = arrs[i];
    for (let j = 0; j < arr.length; j++) {
      let elem = arr[j];
      if (result.indexOf(elem) === -1) {
        let existsInAll = true;
        for (let k = 0; k < arrs.length; k++) {
          if (arrs[k].indexOf(elem) === -1) {
            existsInAll = false;
            break;
          }
        }
        if (existsInAll) {
          result.push(elem);
        }
      }
    }
  }
  return result;
}

function challenge_1(sacks) {
  let commonItems = [];
  for (const i in sacks) {
    let sackList = sacks[i].length;
    let compartmentOne = sacks[i].slice(0, sackList / 2);
    let compartmentTwo = sacks[i].slice(sackList / 2, sackList);
    commonItems.push(intersection(compartmentOne, compartmentTwo)[0]);
  }
  return calcSum(...itemsValue(commonItems));
}

function challenge_2(sacks) {
  let badges = [];
  for (let i = 0; i < sacks.length - 1; i += 3) {
    badges.push(intersection(...sacks.slice(i, i + 3))[0]);
  }
  return calcSum(...itemsValue(badges));
}

console.log("challenge_1 = " + challenge_1(input)); // 7824
console.log("challenge_2 = " + challenge_2(input)); // 2798
