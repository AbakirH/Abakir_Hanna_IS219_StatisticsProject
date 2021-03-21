const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let calulationObject = Calculator.Sum(2,2);
    expect(calulationObject.GetResults()).toBe(4);
});
test('Calculator difference between two numbers', () => {
    let calulationObject = Calculator.Difference(2,2);   
    expect(calulationObject.GetResults()).toBe(0);
});