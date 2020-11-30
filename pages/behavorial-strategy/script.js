console.log('behavorial-strategy works!!');

/**
 * Encaplsuate a group or family of closely related algorithms. these algorithms
 * are called strategies. They are just functions. It allows you to swap strategies
 * in and out for each other very easily. 
 */

function Fedex() {
  this.calculate = package => {
    return 2.45;
  }
} 

function UPS() {
  this.calculate = (package) => {
    return 1.56;
  }
}

function USPS() {
  this.calculate = (package) => {
    return 4.5;
  }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = {from: 'alabama', to: 'georgia', weight: 1.56}
// fedex.calculate(package);
// ups.calculate(package);
// usps.calculate(package);

// Shipping strategy
function Shipping() {
  this.company;
  this.setStrategy = (company) => {
    this.company = company;
  }

  this.calculate = (package) => {
    return this.company.calculate(package); // ex. if fedex is set fedex.calculate(package) is called.
  }
}

const shipping = new Shipping()
shipping.setStrategy(fedex);
console.log('fedex: ',shipping.calculate(package));

shipping.setStrategy(ups);
console.log('ups: ',shipping.calculate(package));

shipping.setStrategy(usps);
console.log('usps: ',shipping.calculate(package));

/**
 * all of the above methods like fedex, ups, usps all have a common method called calculate
 * but with different strategies of calculation.
 * 
 * So we create a Shipping (strategy) function and provide a method to pass a
 * shipping company to it using the setStrategy() 
 */