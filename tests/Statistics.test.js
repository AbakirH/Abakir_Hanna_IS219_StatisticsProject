const Statistics = require('../src/Statistics');
const expect = require("expect");

test('Calculating mean', () => {
    let values = [1,2];
    let Stat = new Statistics();
    let mean = Stat.Mean(values);
    expect(mean.GetResults()).toBe(1.5);
});
test('Calculating mean with a bigger list', () => {
    let values = [1,2,3,4,5,9];
    let Stat = new Statistics();
    let mean = Stat.Mean(values);
    expect(mean.GetResults()).toBe(4);
});

test('Calculating mean with an odd number list', () => {
    let values = [1,2,3,4,5];
    let Stat = new Statistics();
    let mean = Stat.Mean(values);
    expect(mean.GetResults()).toBe(3);
});

test('Calculating Median from a list', () => {
    let values = [1,2,3,4,5];
    let Stat = new Statistics();
    let median = Stat.Median(values);
    expect(median).toBe(3);
});
test('Calculating Median from an even list', () => {
    let values = [1,6,4,4,5];
    let Stat = new Statistics();
    let median = Stat.Median(values);
    expect(median).toBe(4);
});
test('Calculating Mode from a list', () => {
    let values = [1,6,4,4,5];
    let Stat = new Statistics();
    let mode = Stat.Mode(values);
    expect(mode).toEqual([4]);
});

test('Calculating variance from list', () => {
    let values = [1,2,3,4,5];
    let Stat = new Statistics();
    let variance = Stat.Variance(values);
    expect(variance.GetResults()).toBe(2.5);
});

test('Calculating variance from another list', () => {
    let values = [1,2,3,4,5,9];
    let Stat = new Statistics();
    let variance = Stat.Variance(values);
    expect(variance.GetResults()).toBe(8);
});

test('Calculating Standard Deviation from a list', () => {
    let values = [1,2,3,4,5,9];
    let Stat = new Statistics();
    let standardDeviation = Stat.StandardDeviation(values);
    expect(standardDeviation.GetResults()).toBeCloseTo(2.82, 1);;
});

