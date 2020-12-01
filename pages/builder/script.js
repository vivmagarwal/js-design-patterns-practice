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

class User {
  constructor(name) {
    this.name = name;
  }
}

// Traditional way
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

let user = new UserBuilder('bob').setAge('10').setPhone('9876987655').build();
console.log(user);

// const user = new User('bob');
// console.log(user);

// const user = new User('bob', null, null, new Address('1', 'main'));
// console.log(user);
