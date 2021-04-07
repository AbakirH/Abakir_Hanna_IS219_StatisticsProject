const randSeed = require('random-seed');

class RandomGenerator {
    RandomIntgerNumber(value1, value2){
        return Math.floor(Math.random() * (value2 - value1) + value1);
    }
    SeededRandomInteger(seed, min, max){
        let rand = randSeed.create(seed);
        return rand.intBetween(min, max);
    }
    RandomDecimalNumber(value1, value2){
        return Math.random() * (value2 - value1) + value1;
    }
    SeededRandomDecimalNumber(seed, min, max){
        let rand = randSeed.create(seed);
        return rand.floatBetween(min, max);
    }
    SeededRandomIntegerList(seed, min, max, n){
        let randomListOfNums = [];
        let rand = randSeed.create(seed);
        for(let i=0; i<n; i++){
            randomListOfNums.push(rand.intBetween(min, max));
        }
        return randomListOfNums;
    }
    SeededRandomDecimalList(seed, min, max, n){
        let randomListOfNums = [];
        let rand = randSeed.create(seed);
        for(let i=0; i<n; i++){
            randomListOfNums.push(rand.floatBetween(min, max));
        }
        return randomListOfNums;
    }
    RandomOneNumFromList(list){
        return list[this.RandomIntgerNumber(0, list.length - 1)];
    }
    SeededRandomOneNumFromList(list, seed){
        return list[this.SeededRandomInteger(seed, 0, list.length - 1)];
    }
    RandomNumFromList(list, n){
        let randomListOfNums = [];
        for(let i=0; i<n; i++){
            randomListOfNums.push(list[this.RandomIntgerNumber(0, list.length - 1)]);
        }
        return randomListOfNums;
    }
    SeededRandomNumFromList(list, seed, n){
        let randomListOfNums = [];
        let rand = randSeed.create(seed);
        for(let i=0; i<n; i++){
            randomListOfNums.push(list[rand.intBetween(0, list.length - 1)]);
        }
        return randomListOfNums;
    }
    // SortList(values) {
    //     values.sort(function(a,b){
    //         return a-b;
    //       });
    //     return values;
    // }
}

module.exports = RandomGenerator;