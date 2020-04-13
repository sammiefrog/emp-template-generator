// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    }
  
    getName() {
      console.log(`This employee's name is ${this.name}.`);
      return this.name;

    }
    getId() {
        console.log(`This employee's id is ${this.id}.`);
        return this.id;

      }
    getEmail() {
        console.log(`This employee's email is ${this.email}.`);
        return this.email;

      }
    getRole() {
        return this.role;
      }
  }

  module.exports = Employee;