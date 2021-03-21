class RandomGenerator {
    static randomListOfNums = [];
    constructor() {}
    RandomIntgerNumber(value1, value2){
        return Math.floor(Math.random() * (value2 - value1) + value1);
    }
    RandomDecimalNumber(value1, value2){
        return Math.random() * (value2 - value1) + value1;
    }
    SortList(values) {
        values.sort(function(a,b){
            return a-b;
          });
        return values;
    }
}

module.exports = RandomGenerator;