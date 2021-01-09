console.log('benfhala-global-scope works!!');

// Module pattern.
// in the module pattern we assingn the result of an iif to a variable. the result object contains all the public properties and methods.

var chatModule = (function() {
  var leadself = 'Me:',
    leadcomputer = 'Pc:',
    aSaid = ['This is a cyber chat'],
    msgYes = 'Yes! This is a great idea',
    msgNo = 'No! Its a bad mistake',
    aSassyStuff = [
      'Like mold on books, grow myths on history.',
      'She moved like a poem and smiled like a sphinx.',
      'As long as I dont die, this is gobba be one hell of a story',
      'She laughed and the desert sang.',
      "You've got about as much charm as a dead slug.",
    ];

  function echo(msg) {
    console.log(aSaid);

    aSaid.push(msg);
    var start = Math.max(aSaid.length - 6, 0);
    var out = '';

    for (var i = start; i < aSaid.length; i++) {
      out += '\n' + aSaid[i];
    }

    console.log(out);
    return;
  }

  return {
    talk: function talk(msg) {
      echo(leadself + msg);
    },

    replyYesNo: function replyYesNo() {
      var msg = Math.random() > 0.5 ? msgYes : msgNo;
      echo(leadcomputer + msg);
    },

    saySassyStuff: function saySassyStuff() {
      var msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
      echo(leadcomputer + msg);
    },
  };
})();