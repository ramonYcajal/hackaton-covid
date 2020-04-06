export  class Country {
    constructor(name,code, newConfirmed, totalConfirmed) {
        this.name = name;
        this.code=code
        this.newConfirmed = newConfirmed;
        this.totalConfirmed = totalConfirmed;
        this.percent=0;
        
    }
    setPercent(){
        this.percent=((this.newConfirmed/this.totalConfirmed)*100).toFixed(2);
    }
}
