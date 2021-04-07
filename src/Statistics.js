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
        let mean = this.Mean(values).GetResults();
        let total = 0;
        for (let i = 0; i < values.length; i++){
            total += Math.pow((values[i] - mean),2);
        }
        return total / (values.length-1);
    }
    StandardDeviation(values) {
        return Calculator.SquareRoot(this.Variance(values));
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
    Quartiles(list){
        let list1 = [];
        let list2 = [];
        this.SortList(list);
        let length = list.length;
        if (length % 2 === 0) {
            list1 = list.slice(0, length/2);
            list2 = list.slice(length/2, length);
        } else {
            list1 = list.slice(0, (length-1)/2);
            list2 = list.slice((length-1)/2+1, length);
        }
        return [this.Median(list1), this.Median(list), this.Median(list2)];
    }
    Skewness(list){
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += (list[i] - this.Mean(list).GetResults()) *
                        (list[i] - this.Mean(list).GetResults()) *
                        (list[i] - this.Mean(list).GetResults());
        }
        return (total / ((list.length-1) * this.StandardDeviation(list).GetResults() *
            this.StandardDeviation(list).GetResults() *
            this.StandardDeviation(list).GetResults()));
    }
    PopulationOrSampleCorrelationCoefficient(list1, list2) {
        if(list1.length !== list2.length){
            return false;
        }
        let sumX = 0, sumY = 0, sumXY = 0;
        let squareSumX = 0, squareSumY = 0;

        for (let i = 0;i < list1.length;i++){
            sumX = sumX + list1[i];

            sumY = sumY + list2[i];

            sumXY = sumXY + list1[i] * list2[i];

            squareSumX = squareSumX + list1[i] * list1[i];
            squareSumY = squareSumY + list2[i] * list2[i];
        }

        return (list1.length * sumXY - sumX * sumY) /
            (Math.sqrt((list1.length * squareSumX -
                sumX * sumX) * (list1.length * squareSumY -
                sumY * sumY)));
    }
    Zscore(list){
        let ZScorelist = [];
        for (let i = 0; i < list.length; i++) {
            ZScorelist.push((list[i]-this.Mean(list).GetResults())/this.StandardDeviation(list).GetResults());
        }
        return ZScorelist;
    }
    MeanDeviation(list){
        let mean = this.Mean(list).GetResults();
        let total = 0;
        for (let i = 0; i < list.length; i++){
            total += Math.abs(list[i] - mean);
        }
        return total / list.length;
    }

}
module.exports = Statistics;