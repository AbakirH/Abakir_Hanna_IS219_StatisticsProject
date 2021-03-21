require('jest-extended');
const RandomGenerator = require('../src/RandomGenerator');
const expect = require("expect");

test('Getting Random Integer Number', () => {
    let RandomNum = new RandomGenerator();
    expect(Number.isInteger(RandomNum.RandomIntgerNumber(0,1))).toBe(true);
});

test('Getting Random Integer Number', () => {
    let RandomNum = new RandomGenerator();
    expect(Number.isInteger(RandomNum.RandomDecimalNumber(0,1))).toBe(false);
});
