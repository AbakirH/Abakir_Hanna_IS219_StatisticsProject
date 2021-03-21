const Calculator = require('../src/Calculator');
const Calculation = require("../src/Models/Calculation");

test('Calculator adding two numbers', () => {
    let calulationObject = Calculator.Sum(2,2);
    expect(calulationObject.GetResults()).toBe(4);
});
test('Calculation adding two numbers', () => {
    let calulationObject = Calculation.Sum(5,2)
    expect(calulationObject).toBe(7);
});