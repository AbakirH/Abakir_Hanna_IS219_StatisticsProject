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
module.exports = Calculation;