console.log('behavorial-iterator works!!');

/**
 * Allows you to loop over collection of objects. It lets us define our own rule on how to 
 * traverse an object. 
 * 
 * following example : an iterator that traverses an array. 
 */

const items = [
  1, "vivek", false, 1.24
]
 
function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  }
}

const iter = new Iterator(items)
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());

console.log('---------------------------------------');

const iter2 = new Iterator(items);
while (iter2.hasNext()) {
  console.log(iter2.next());
}