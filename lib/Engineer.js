// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }

    getGithub(){
            console.log(`This employee's github is ${this.github}`);
            return this.github;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Engineer;