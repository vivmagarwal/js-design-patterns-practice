console.log('behavorial-observer works!!');

/**
 * define a 1 to many dependency
 * subject - observers
 * observers watch the subjects
 */

function Subject() {
  this.observers = [] // array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) {
        return fn;
      }
    })
  },

  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    })
  }
}

const subject = new Subject();

function ovserver1 (){
  console.log('observer1 firign')
}

function ovserver2 (){
  console.log('observer2 firign')
}

subject.subscribe(ovserver1);
subject.subscribe(ovserver2);

subject.fire();