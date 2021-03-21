[![Coverage Status](https://coveralls.io/repos/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator/badge.svg?branch=master)](https://coveralls.io/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator?branch=master)
[![Build Status](https://travis-ci.com/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator.svg?branch=master)](https://travis-ci.com/github/AbakirH/Abakir_Hanna_IS219_CodingPrinciplesCalculator)


1. Single Responsibility Principle:

In the Operations folder found in src folder, you see 6 javascript files that conatins one function to do one task

For examble in the Difference.js file we see that the difference function does one thing.
```
function Difference (a,b) {
    return a - b;
}
```
Each file in this operations folder follows a similar format.

Another example of this principle can be found in the Calculator.js file in the src folder where each function in the class has its own task.
For examble: 
```
static clearList(){
    this.Calculations = [];
}
```
This functions only goal is to clear the list of caclulations if we ever need to.

This same concept can be found in the Principle1.test.js file in the tests folder, where each test is only testing one function from the calculator class.

2. Open-Closed Principle

If we look at the Calculator class found in the Calculator.js file we see how we can add new calculations to the list and clear the list without having to modify the array within the class.

```
class Calculator {
    Calculations = [];
    addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    clearList(){
        this.Calculations = [];
    }
}
```

This means that we can add new calculations to the list of Calculations anywhere in our code without having to open our Calculator.js file again. This priciple then can be understood as it is open to exsetention, such as if I want to add a function to multiply 5 numbers together, but previous written code will not need to be changed to accomdate the new code.

3. Liskov Substitution Principle

This principle explains how if we have a parent class and a child class, then we can interchange the parent and child class without getting incorrect results.

For examble the Calculation class has a sum function, that just adds two numbers and returns the sum. However, the child class Calculator sum function takes two numbers to add them and puts them in a list to save them.

Calculation class sum function:
```
class Calculation {
    constructor(a, b, op) {
      this.a = a;
      this.b = b;
      this.op = op;
    }
    static Create(a, b, op){
      return new Calculation(a,b,op);
    }
    GetResults() {
      return this.op(this.a,this.b)
    }
    static Sum(a,b) {
      return a+b;
    }
}
```

Calculator class sum function:
```
class Calculator extends Calculation{
    static Calculations = [];
    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static Sum(a,b) {
        let calculation = Calculation.Create(a,b,Sum);
        this.addCalculation(calculation);
        return calculation;
    }
}
```

Another example is: 
Shape Class
```
class Shape {
    constructor() {
      ....
    }
    area(){
        return 0;
    }
}
```
```
class Circle extends Shape {
    constructor() {
      super()
    }
    area(){
        return Math.PI*r*r;
    }
}
```
We see how the area function for the Circle class is different than the shape one and depending on what class is used, the area function will act accordingly  

4. Interface Segregation Principle

This principle says that clients should not be force to depend on interfaces that they do not use. A simple way to explain this principle is do not have unesseary code in your file and that each function inside a class is useable.

Also, this principle says whenever you expose a module for outside use that only the essentials are needed.

For examble in the sum.js file in the operations folder, the only code you see is as follows:
```
function Sum (a,b) {
    return a + b;
}
module.exports = Sum;
```
This file only needs two numbers to be used and nothing complicated the programmer needs to do to use it.

5. Dependency Inversion Principle

This priciple states that "High-level modules should not depend on low-level modules. Both should depend on abstractions."

If we look at the Calculator class we see one line that is used to specify which operation we are using bewteen two numbers

```
let calculation = Calculation.Create(a,b,Product);
```
Where you see the Product paramter, that can be changed to any other operation that is created in the Operations folder without having to rely on the create function in the Calculation class

This shows how Calculator class does not depend on the Calculation class to figure out what operation to use.
