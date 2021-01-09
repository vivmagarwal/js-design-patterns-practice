console.log('benfhala-global-scope works!!');

// Module Revealpattern.
// in the module pattern we assingn the result of an iif to a variable. 
// the result object contains all the public properties and methods.
// the probelm with the module pattern is that the private methods and
// variables now dont have access to the public variables and methods.

// the module reveal pattern solves this issue, in this patter we 
// keep our public methods and variable too inside the function body 
// and in the return we just return a reference to what ever
// we want to expose to the public.

// the probelm with the module reveal pattern is that, now we have
// access to the reference to the function so we cant override those
// public methods any more becaue we dont have access to them. its
// basically not extensible. 

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

  function talk(msg) {
    echo(leadself + msg);
  };
  
  function replyYesNo() {
    var msg = Math.random() > 0.5 ? msgYes : msgNo;
    echo(leadcomputer + msg);
  };
  
  function saySassyStuff() {
    var msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
    echo(leadcomputer + msg);
  }

  return {
    talk: talk,
    replyYesNo: replyYesNo,
    saySassyStuff: saySassyStuff,
  };
})();