// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    getSchool(){
        if(this.school){
            console.log(`This employee attends school at ${this.school}`);
            return this.school;
        }
        return;
    }

    getRole(){
        return this.role;
    }

}

module.exports = Intern;