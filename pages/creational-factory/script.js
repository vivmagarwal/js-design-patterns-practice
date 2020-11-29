console.log('creational-factory works!!');

// object creation mechanisms - factory pattern
// object that creates different objects
// centralised location
// clean code

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

function Tester(name) {
  this.name = name;
  this.type = "tester"
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type)
    {
      case 1:
        return new Developer(name)
        break;
      case 2:
        return new Tester(name)
        break;
    }
  }
}

function say() {
  console.log(this.name, this.type);
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("Vivek", 1));
employees.push(employeeFactory.create("Bassam", 1));

employees.push(employeeFactory.create("John", 2));
employees.push(employeeFactory.create("Tim", 2));

employees.forEach((emp) => {
  say.call(emp);
})