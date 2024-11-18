// your code goes here
// good luck!

/* Task 1 - Employee Class
Create an Employee class which accepts 5 arguments and sets the following properties:

id: a number representing a unique identifier for an employee
firstName: a string for the first name of the employee
lastName: a string for the last name of the employee
taxId: a number representing a unique tax identifier
salary: a number for the yearly salary of an employee
The Employee class should have a generatePaySlip method which returns a string in the format:

       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary */

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    const monthlySalary = this.salary / 12;
    return `Employee ID: ${this.id} \nName: ${this.firstName} ${this.lastName} \nTax ID: ${this.taxId} \nPay: ${monthlySalary}`;
  }
}

const employee1 = new Employee(24, "Khush Bakht", "Naveed", 156555, 1000);
const employee2 = new Employee(25, "Khush", "Nav", 15655, 3000);

/* console.log(employee1.generatePaySlip()); */

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(id) {
    this.managedEmployees = this.managedEmployees.filter(
      (employee) => employee.id !== id
    );
  }

  getManagedEmployee() {
    return this.managedEmployees;
  }
}

const manager = new Manager(50, "abc", "xyz", 5655, 2000);

manager.addManagedEmployee(employee1);
manager.addManagedEmployee(employee2);

console.log(manager.getManagedEmployee());

manager.removeManagedEmployee(25);
console.log(manager.getManagedEmployee());
