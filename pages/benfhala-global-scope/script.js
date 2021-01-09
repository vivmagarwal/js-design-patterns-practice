console.log('benfhala-global-scope works!!');

// Namespace pattern.
// Everything is living inside the object o now.
// This is basically an object literal.
var com = com || {};
com.vivek = com.vivek || {};
com.vivek.namespace = com.vivek.namespace || {};
com.vivek.namespace.pattern = com.vivek.namespace.pattern || {};

com.vivek.namespace.pattern = {
  leadself: 'Me:',
  leadcomputer: 'Pc:',
  aSaid: ['This is a cyber chat'],
  msgYes: 'Yes! This is a great idea',
  msgNo: 'No! Its a bad mistake',
  aSassyStuff: [
    'Like mold on books, grow myths on history.',
    'She moved like a poem and smiled like a sphinx.',
    'As long as I dont die, this is gobba be one hell of a story',
    'She laughed and the desert sang.',
    "You've got about as much charm as a dead slug.",
  ],

  talk: function talk(msg) {
    this.echo(this.leadself + msg);
  },

  replyYesNo: function replyYesNo() {
    var msg = Math.random() > 0.5 ? this.msgYes : this.msgNo;
    this.echo(this.leadcomputer + msg);
  },

  saySassyStuff: function saySassyStuff() {
    var msg = this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];
    this.echo(this.leadcomputer + msg);
  },

  echo: function echo(msg) {
    console.log(this.aSaid);
    
    this.aSaid.push(msg);
    var start = Math.max(this.aSaid.length - 6, 0);
    var out = '';

    for (var i = start; i < this.aSaid.length; i++) {
      out += '\n' + this.aSaid[i];
    }

    console.log(out);
    return;
  },
};
