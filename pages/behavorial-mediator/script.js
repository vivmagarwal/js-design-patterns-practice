console.log('behavorial-mediator works!!');

/**
 * Define an object that encapsulates how a set of objects interact. Mediatory promotes loose coupling by keeping objects from referring to each othe explicity and it lets you vary their interaction independently.
 * use it when a set of objects communicate in a structures by complex ways.
 */

function Member(name) {
  this.name = name;
  this.chatRoom = null;
}
 
Member.prototype = {
  send: function (message, toMember) {
    this.chatRoom.send(message, this, toMember);
  }, 
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = { 
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

const chat = new Chatroom();
const bob = new Member('Bob');
const john = new Member('John');
const tim = new Member('Tim');

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hey, john", john);
