const { Combination } = require('js-combinatorics');

function printProgress(progress) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(progress);
}

(function () {
    'use strict';
    const costPerTicket = 50; // NTD
    const randomNumbers = [1, 2, 3, 4, 5, 6];
    const randomSpecialNumber = 7;
    const prizes = {}; // NTD			
    prizes['6:0'] = { name: '頭獎', m: 6, s: null, bonus: 104538797, acc: 0 };
    prizes['5:1'] = { name: '貳獎', m: 5, s: 1, bonus: 10089281, acc: 0 };
    prizes['5:0'] = { name: '參獎', m: 5, s: null, bonus: 120323, acc: 0 };
    prizes['4:1'] = { name: '肆獎', m: 4, s: 1, bonus: 18129, acc: 0 };
    prizes['4:0'] = { name: '伍獎', m: 4, s: null, bonus: 2000, acc: 0 };
    prizes['3:1'] = { name: '陸獎', m: 3, s: 1, bonus: 1000, acc: 0 };
    prizes['2:1'] = { name: '柒獎', m: 2, s: 1, bonus: 400, acc: 0 };
    prizes['3:0'] = { name: '普獎', m: 3, s: null, bonus: 400, acc: 0 };

    const allNumbers = new Array(49).fill(1).map(function (v, i) {return v + i;});
    const allCombinations = new Combination(allNumbers, 6);

    console.log(`Cost for buying all combinations: NTD ${
        new Intl.NumberFormat().format(allCombinations.length * BigInt(costPerTicket))
    }`);

    let totalBonus = 0n;
    for(let i = 0n; i < allCombinations.length; i++) {
        const comb = allCombinations.nth(i);
        const matchedNumbers = comb.filter(n => randomNumbers.includes(n)).length;
        const matchedSpecialNumber = comb.includes(randomSpecialNumber) ? 1 : 0;
        const prizeKey = `${matchedNumbers}:${matchedSpecialNumber}`;
        const matchedPrize = prizes[prizeKey];
        if (matchedPrize) {
            matchedPrize.acc += matchedPrize.bonus;
            totalBonus += BigInt(matchedPrize.bonus);
            printProgress(`Progress: ${i + 1n}/${allCombinations.length}`);
        }
    }

    console.log(`Bonus if buying all tickets: NTD ${
        new Intl.NumberFormat().format(totalBonus)
    }`);
}());