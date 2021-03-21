const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Power = require('../src/Operations/Power');
const Root = require('../src/Operations/Root');

test('Test of Calculation Instantiation', () => {
    //Test the instantiation of the calculation object
    let op = Sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    //Test the sum function
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference function', () => {
    //Test the difference function
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    //Test the product function
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    //Test the quotient function
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});
test('Test Get results for Power function', () => {
    //Test the power function
    let op = Power;
    let calculation = new Calculation(3,2,op);
    expect(calculation.GetResults()).toBe(9);
});
test('Test Get results for Root function', () => {
    //Test the root function
    let op = Root;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});
