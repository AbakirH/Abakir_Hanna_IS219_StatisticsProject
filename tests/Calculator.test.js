const Calculator = require('../src/Calculator');
const Calculation = require("../src/Models/Calculation");

test('Calculator adding two numbers', () => {
    let calulationObject = Calculator.Sum(1,2);
    expect(calulationObject.GetResults()).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let calulationObject = Calculator.Difference(1,2);   
    expect(calulationObject.GetResults()).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let calulationObject = Calculator.Product(1,2);
    expect(calulationObject.GetResults()).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let calulationObject = Calculator.Quotient(1,2);
    expect(calulationObject.GetResults()).toBe(.5);
});
test('Calculator power of two numbers', () => {
    let calulationObject = Calculator.Power(2,3);
    expect(calulationObject.GetResults()).toBe(8);
});
test('Calculator root of two numbers', () => {
    let calulationObject = Calculator.Root(4,2);
    expect(calulationObject.GetResults()).toBe(2);
});
test('Calculator square of a number', () => {
    let calulationObject = Calculator.Square(8);
    expect(calulationObject.GetResults()).toBe(64);
});
test('Calculator square root of a number', () => {
    let calulationObject = Calculator.SquareRoot(16);
    expect(calulationObject.GetResults()).toBe(4);
});
test('Calculator adding to calculations', () => {
    Calculator.clearList();
    Calculator.Quotient(1,2);
    Calculator.Power(1,2);
    let calculations = Calculator.Calculations;
    expect(Calculator.Calculations.length).toBe(2);
    calculations.forEach(function (calc) {
       expect(calc).toBeInstanceOf(Calculation)
    });
});

test('Calculation Get Last Calculation', () => {
    Calculator.Product(1,2);
    let calulationObject = Calculator.getLastCalculation();
    expect(calulationObject.GetResults()).toBe(2);
});