class Discount {
    constructor(code, percentage) {
      this.code = code;
      this.percentage = percentage;
    }
  
    getCode() {
      return this.code;
    }
  
    setCode(code) {
      this.code = code;
    }
  
    getPercentage() {
      return this.percentage;
    }
  
    setPercentage(percentage) {
      this.percentage = percentage;
    }
  }
  
  export default Discount;
  