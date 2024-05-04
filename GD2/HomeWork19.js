const user = {
    name: "Thang",
    age: 22,
    address: null,
    email: undefined,
  };
  
  const address = {
    tinhThanh: "Quảng Nam",
    quanHuyen: "Thăng Bình",
    phuongXa: "Bình Trung"
  };
  
  const result = {
    ...user,
    ...address,
  };
  
  // console.log(result);

  function removeNullUndefined(user) {
    const arr = Object.entries(user);
    const fill = arr.filter(([key, value]) => value !== null && value !== undefined);
    const result = Object.fromEntries(fill);
    return result;
  }
  // console.log(removeNullUndefined(user));

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  
    setSalary(Salary) {
      this.salary = Salary;
    }
  }
  
  // const john = new Employee("Thắng", 22, 1000);
  // console.log(john.salary);
 

  
  // john.setSalary(6000);
  // console.log(john.getSalary()); 

  const add = require('./add.js').default;
  const sub = require('./sub.js').default;
  const div = require('./div.js').default;
  const mul = require('./mul.js').default;

function main() {
  console.log(add(2, 3)); 
  console.log(sub(5, 2));
  console.log(mul(4, 3)); 
  console.log(div(10, 2)); 
}
main();