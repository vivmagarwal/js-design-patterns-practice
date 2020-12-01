console.log('builder works!!');

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// class User {
//   constructor(name, age, phone, address) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address;
//   }
// }

// JS friendly way - builder pattern :: very popular pattern in the JS world

class User {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User('bob', { age: 10, phone: '9876987666', address: new Address('1234', 'Main') });
console.log(user);