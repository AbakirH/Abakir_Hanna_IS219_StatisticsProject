const Calculator = require('./Calculator');
class Statistics extends Calculator {
    Sum(values){
        let sum = 0;
        for(let i = 0; i < values.length-1; i+=2){
            sum += Calculator.Sum(values[i],values[i+1]).GetResults();
            if((i+2) == values.length-1) {
                sum += Calculator.Sum(0,values[i+2]).GetResults();
            }
        }
        return sum;
    }
    SortList(values){
        values.sort(function(a,b){
            return a-b;
          });
        return values;
    }

    Variance(values) {
        let squareOfSums =  Calculator.Quotient(Calculator.Square(this.Sum(values)).GetResults(),values.length).GetResults();
        for(let i = 0; i < values.length; i++){
            values[i] = Calculator.Square(values[i]).GetResults();
        }
        let sumsOfSquares = this.Sum(values);
        let variance = Calculator.Quotient(Calculator.Difference(sumsOfSquares, squareOfSums).GetResults(), values.length-1);
        return variance;
    }
    StandardDeviation(values) {
        return Calculator.SquareRoot(this.Variance(values).GetResults());
        
    }

    Mean(values) {
        let numValues = values.length;
        return Calculator.Quotient(this.Sum(values),numValues);
    }
    Median(values){
        if (values.length === 0) {
            return 0;
        }
        this.SortList(values)
        let half = Math.floor(values.length / 2);
        if (values.length % 2){
          return values[half];
        }
        return (values[half - 1] + values[half]) / 2.0;
    }
    Mode(values){
        let counts = {}
        let listOfValues = [];
        values.forEach(function(key) {
            if(counts[key] === undefined) {
                counts[key] = 0
            }
            counts[key] += 1
        })
        let max = Math.max(...Object.values(counts));
        for (var key in counts) {
            if (counts[key] == max) {           
                listOfValues.push(parseInt(key));
            }
        }
        return listOfValues;
    }

}
module.exports = Statistics;