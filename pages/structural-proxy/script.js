console.log('structural-proxy works!!');

/**
 * Proxy design pattern
 * - proxy as a placeholder for another object
 * - proxy can control access to that object
 * - add extra functionality, caching etc.
 */

 // external API service

console.log('.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.'); 

function CryptoCurrencyApi() {
  this.getValue = function (coin) {
    console.log('calling external api');
    switch (coin) {
      case 'bitcoin':
        return 3500
      case 'litcoin':
        return 50
      case 'etherium':
        return 175
    }
   }
}
 
const api = new CryptoCurrencyApi()
console.log(api.getValue('bitcoin'));
console.log(api.getValue('litcoin'));
console.log(api.getValue('etherium'));

// we are making many extra api calls

console.log('<*><*><*><*><*><*><*><*><*><*><*><*><*>');

function CryptoCurrencyProxy() {
  this.api = new CryptoCurrencyApi();
  this.cache = {};

  this.getValue = function (coin) {
    if (!this.cache[coin]) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();
console.log(proxy.getValue('bitcoin'));
console.log(proxy.getValue('bitcoin'));
console.log(proxy.getValue('bitcoin'));
console.log(proxy.getValue('litcoin'));

console.log('.:*~*:._.:*~*:._.:*~*:._.:*~*:._.:*~*:.'); 

// https://www.youtube.com/watch?v=SFTpSFQNPts&list=PLREW9ZuU80uTfmxo61-acnUYk3P_4plIF&index=8&ab_channel=DevSage
// https://www.youtube.com/watch?v=BWprw8UHIzA&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&ab_channel=WebDevSimplified