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
    expect(variance).toBe(2.5);
});

test('Calculating variance from another list', () => {
    let values = [1,2,3,4,5,9];
    let Stat = new Statistics();
    let variance = Stat.Variance(values);
    expect(variance).toBe(8);
});

test('Calculating Standard Deviation from a list', () => {
    let values = [1,2,3,4,5,9];
    let Stat = new Statistics();
    let standardDeviation = Stat.StandardDeviation(values);
    expect(standardDeviation.GetResults()).toBeCloseTo(2.82, 1);
});

test('Return the Quartile 1, and Quartile 2, and Quartile 3 from a list', () => {
    let Stat = new Statistics();
    let list = [1, 4, 5, 5, 8, 9];
    expect(Stat.Quartiles(list)).toStrictEqual([4, 5, 8]);
});

test('Return the skewness from a list', () => {
    let list = [1,2,3,4,9];
    let Stat = new Statistics();
    expect(Stat.Skewness(list)).toBeCloseTo(0.92,1);
});

test('Return the sample correlation coefficient from a list', () => {
    let Stat = new Statistics();
    let list1 = [1, 5, 2, 4, 5];
    let list2 = [2, 5, 5, 6, 9];
    expect(Stat.PopulationOrSampleCorrelationCoefficient(list1, list2)).toBeCloseTo(0.7786,1);
});

test('Return the Z Score from a list of numbers', () => {
    let Stat = new Statistics();
    let list = [1, 2 , 3 , 4 , 5,6, 7,8];
    expect(Stat.Zscore(list)).toStrictEqual([
        -1.4288690166235207,
        -1.0206207261596576,
        -0.6123724356957946,
        -0.20412414523193154,
        0.20412414523193154,
        0.6123724356957946,
        1.0206207261596576,
        1.4288690166235207
      ]
  );
});

test('Return the  Mean Deviation from a list of numbers', () => {
    let Stat = new Statistics();
    let list = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(Stat.MeanDeviation(list)).toBe(2);
});