// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        console.log(`The Managers office number is ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole(){
        return this.role;
    }

}

module.exports = Manager;