console.log('command works!!');

/**
 * take the different operations 
 * add feature of undo redo
 * they have execute and undo function
 * make commands separate from the original object
 * mix commands easily; powerful decoupling.
 */

 // https://www.youtube.com/watch?v=UfL8ddQRZrI&ab_channel=VijayKumarChauhan

 // the command pattern is such a nice patten. It really implements the open to extension and closed to modification principle. for any number of operations in the caluclator class we wont need to modify the class itself. Instead we just need to create new command classes. Awesome!!

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  // add(valueToAdd) {
  //   this.value = this.value + valueToAdd
  // }

  // subtract(valueToSubtract) {
  //   this.value = this.value - valueToSubtract
  // }

  // multiply(valueToMultiply) {
  //   this.value = this.value * valueToMultiply
  // }

  // divide(valueToDivide) {
  //   this.value = this.value / valueToDivide
  // }
}

// const calculator = new Calculator();
// calculator.add(10);
// console.log(calculator.value);
// calculator.divide(2);
// console.log(calculator.value);
// calculator.multiply(10);
// console.log(calculator.value);

class AddCommand {
  constructor(valueToAdd){
    this.valueToAdd = valueToAdd;
  }
  
  execute(currentValue) { 
    return currentValue + this.valueToAdd
  }
  
  undo(currentValue) {
    return currentValue - this.valueToAdd
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class AddThenSubtractCommand {
  constructor(valueToAdd, valueToSubtract) {
    this.AddCommand = new AddCommand(valueToAdd);
    this.SubtractCommand = new SubtractCommand(valueToSubtract);
  }

  execute(currentValue) {
    const addedValue = this.AddCommand.execute(currentValue);
    const subtractedValue = this.SubtractCommand.execute(addedValue);
    return subtractedValue;
  }
}
 
// const addCommand = new AddCommand(30);
// const newValue = addCommand.execute(20);
// console.log(newValue);
// console.log(addCommand.undo(newValue));

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(100));
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(1));
calculator.executeCommand(new AddCommand(1));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
calculator.executeCommand(new SubtractCommand(11));
console.log(calculator.value);
calculator.executeCommand(new SubtractCommand(50));
console.log(calculator.value);
calculator.executeCommand(new AddThenSubtractCommand(10, 5))
console.log(calculator.value);