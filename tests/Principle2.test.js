const Calculator = require('../src/Calculator');
const Calculation = require("../src/Models/Calculation");

test('Calculator adding to calculations', () => {
    Calculator.Quotient(1,2);
    Calculator.Power(1,2);
    let calculations = Calculator.Calculations;
    expect(Calculator.Calculations.length).toBe(2);
    calculations.forEach(function (calc) {
       expect(calc).toBeInstanceOf(Calculation)
    });
});

test('Calculator clearing all previous calculations made', () => {
    Calculator.clearList();
    expect(Calculator.Calculations.length).toBe(0);
});