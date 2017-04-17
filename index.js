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

    var allNumbers = new Array(46).fill(1).map(function (v, i) {return v + i;});
    var allCombinations = Combinatorics.bigCombination(allNumbers, 6);
	var randomIndex = Math.floor(Math.random() * allCombinations.length);
	var c = null;
    while((c = allCombinations.next()) && (--randomIndex));
	console.log(c);
}());