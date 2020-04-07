export  class Country {
    constructor(name,code, newConfirmed, totalConfirmed, newDeaths,newRecovered,totalDeaths,totalRecovered) {
        this.name = name;
        this.code=code
        this.newConfirmed = newConfirmed;
        this.totalConfirmed = totalConfirmed;
        this.percent=0;
        this.newDeaths=newDeaths;
        this.newRecovered=newRecovered;
        this.totalDeaths=totalDeaths;
        this.totalRecovered=totalRecovered;
        
    }
    setPercent(){
        this.percent=((this.newConfirmed/this.totalConfirmed)*100).toFixed(2);
    }
}
