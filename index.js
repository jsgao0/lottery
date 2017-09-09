var numeral = require('numeral');
var Combinatorics = require('js-combinatorics');

(function () {
    'use strict';
    var winnings = []; // NTD
    winnings.push({m: 6, s: null, bouns: 39299711});
    winnings.push({m: 5, s: 1, bouns: 3230113});
    winnings.push({m: 5, s: null, bouns: 49011});
    winnings.push({m: 4, s: 1, bouns: 11777});
    winnings.push({m: 4, s: null, bouns: 1655});
    winnings.push({m: 3, s: 1, bouns: 1000});
    winnings.push({m: 2, s: 1, bouns: 400});
    winnings.push({m: 3, s: null, bouns: 400});

    var allNumbers = new Array(49).fill(1).map(function (v, i) {return v + i;}),
        allCombinations = Combinatorics.bigCombination(allNumbers, 6);

    function hasBalls(nums, matchs) {
        return matchs.every(function (match) {
            return nums.indexOf(match) > -1;
        });
    }

    console.log(allCombinations.filter(function (nums) {
        return hasBalls(nums, [1, 2, 3, 4, 5, 6]);
    }));
}());