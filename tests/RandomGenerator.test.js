require('jest-extended');
const RandomGenerator = require('../src/RandomGenerator');
const expect = require("expect");

test('Getting Random Integer Number', () => {
    let RandomNum = new RandomGenerator();
    expect(Number.isInteger(RandomNum.RandomIntgerNumber(0,1))).toBe(true);
});

test('Getting Random Integer Decimal', () => {
    let RandomNum = new RandomGenerator();
    expect(Number.isInteger(RandomNum.RandomDecimalNumber(0,1))).toBe(false);
});

test('A Random Seeded Decimal', () => {
    let RandomNum = new RandomGenerator();
    let rand = RandomNum.SeededRandomDecimalNumber('Magic', 1, 100);
    expect(rand).toBeCloseTo(5.10, 1);
});

test('A Random Seeded Integer', () => {
    let RandomNum = new RandomGenerator();
    let rand = RandomNum.SeededRandomInteger('Magic', 1, 100);
    expect(rand).toBe(5);
});
test('A Random Seeded Integer List', () => {
    let RandomNum = new RandomGenerator();
    let randlist = RandomNum.SeededRandomIntegerList('Magic', 1, 100, 6);
    let ListEqual = [ 5, 43, 66, 92, 69, 19 ];
    expect(randlist).toStrictEqual(ListEqual);
});

test('A Random Seeded Decimal List', () => {
    let RandomNum = new RandomGenerator();
    let randlist = RandomNum.SeededRandomDecimalList('Magic', 1, 100, 6);
    let ListEqual = [
        5.10772369944373,
        43.445365485250925,
        65.93746083470948,
        91.38865378105908,
        68.88999398865145,
        18.86467553384039
      ];
    expect(randlist).toStrictEqual(ListEqual);
});

test('Return a random value from a list', () => {
    let RandomNum = new RandomGenerator();
    let staticList = [ 5, 43, 66, 92, 69, 19 ];
    let randNum = RandomNum.RandomOneNumFromList(staticList);
    expect(staticList).toContain(randNum);
});

test('Return the same random value from a list', () => {
    let RandomNum = new RandomGenerator();
    let staticList = [ 5, 43, 66, 92, 69, 19 ];
    let randNum = RandomNum.SeededRandomOneNumFromList(staticList,"Magic");
    expect(randNum).toBe(5);
});
test('Return multiple numbers from a list randomly', () => {
    let RandomNum = new RandomGenerator();
    let staticList = [ 5, 43, 66, 92, 69, 19 ];
    let rand = RandomNum.RandomNumFromList(staticList, 3);
    for(let i=0; i<rand.length; i++){
        expect(staticList).toContain(rand[i]);
    }
});
test('Return the same multiple numbers from a list randomly', () => {
    let RandomNum = new RandomGenerator();
    let staticList = [ 5, 43, 66, 92, 69, 19 ];
    let rand = RandomNum.SeededRandomNumFromList(staticList,"Magic", 3);
    expect(rand).toStrictEqual([ 5, 66, 92 ]);
});