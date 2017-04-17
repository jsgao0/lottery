var numeral = require('numeral');
var Combinatorics = require('js-combinatorics');

(function () {
    'use strict';
    var winnings = []; // NTD
    winnings.push({m: 6, s: 0, bouns: 39299711});
    winnings.push({m: 5, s: 1, bouns: 3230113});
    winnings.push({m: 5, s: 0, bouns: 49011});
    winnings.push({m: 4, s: 1, bouns: 11777});
    winnings.push({m: 4, s: 0, bouns: 1655});
    winnings.push({m: 3, s: 1, bouns: 1000});
    winnings.push({m: 2, s: 1, bouns: 400});
    winnings.push({m: 3, s: 0, bouns: 400});

    var allNumbers = new Array(46).fill(1).map(function (v, i) {return v + i;});
    var allCombinations = Combinatorics.bigCombination(allNumbers, 6);
    console.log(allCombinations.length);
}());