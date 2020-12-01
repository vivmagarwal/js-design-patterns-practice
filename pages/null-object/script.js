console.log('null-object works!!');

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === 'bob';
  }
}

// null object
class NullUser {
  constructor() {
    this.id = -1;
    this.name = 'guest';
  }
  hasAccess() {
    return false;
  }
}

const users = [
  new User(1, 'bob'),
  new User(2, 'john')
]

function getUser(id) {
  const _user = users.find((user) => user.id === id);
  if (!_user) {
    return new NullUser()
  } else {
    return _user;
  }
}

// without a null object

// function printUser (id){
//   const user = getUser(id);
//   let name = 'guest';
//   if (user && user.name) {
//     name = user.name;
//   }
//   console.log('hello ' + name);

//   if (user && user.hasAccess && user.hasAccess()) {
//     console.log('you have access');
//   } else {
//     console.log('you are not allowed here');
//   }
// }

function printUser (id){
  const user = getUser(id);
  console.log('hello ' + user.name);

  if (user.hasAccess()) {
    console.log('you have access');
  } else {
    console.log('you are not allowed here');
  }
}

printUser(1);
printUser(2);
printUser(3);