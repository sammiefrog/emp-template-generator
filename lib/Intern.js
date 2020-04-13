const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    getSchool(){
        if(this.school){
            return this.school;
        }
        return;
    }

    getRole(){
        return this.role;
    }

}

module.exports = Intern;