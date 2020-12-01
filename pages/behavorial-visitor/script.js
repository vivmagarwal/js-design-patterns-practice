console.log('behavorial-visitor works!!');

// new functionlities ; extending ;

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  }
}

console.log('=======================================');

const vivek = new Employee("vivek", 10000);
console.log(vivek.getSalary());

console.log('=======================================');

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

vivek.accept(ExtraSalary);
console.log(vivek.getSalary());

//  https://www.youtube.com/watch?v=BWprw8UHIzA&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&ab_channel=WebDevSimplified