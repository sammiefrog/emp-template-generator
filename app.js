const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let team = [];

const questions = [{
      type: "input",
      message: "What is your full name?",
      name: "fullName"
    },
    {
      type: "input",
      message: "What is your employee id?",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter your email:",
      name: "email"
    },
    {
        type: "list",
        message: "What type of employee are you?",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "role"
    }
];

function inquireQ(){

    inquirer
    .prompt([
        // build or finish
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["Build team", "Finish team"],
            name: "moreTeam"
        }
    ]).then(function (res) {
        const moreTeam = res.moreTeam;
        switch (moreTeam) {

        case "Build team":
        inquirer.prompt(questions)
        .then(function(response) {

        if(response.role === "Manager"){
            inquirer.prompt({
            type: "input",
            message: "What is your office number?",
            name: "officeNum"
            }).then(function(managerOffice){
                var newManager = new Manager(response.fullName, response.id, response.email, managerOffice.officeNum);
                team.push(newManager);
                console.log(team);
                inquireQ();

            })
        }
        else if(response.role === "Engineer"){
            inquirer.prompt({
            type: "input",
            message: "What is your github user name??",
            name: "github"
            }).then(function(engineerGH){
                var newEngineer = new Engineer(response.fullName, response.id, response.email, engineerGH.github);
                team.push(newEngineer);
                inquireQ();

            });
        }
        else if(response.role === "Intern"){
            inquirer.prompt({
            type: "input",
            message: "What school did you attend?",
            name: "school"
            }).then(function(internSchool){
                var newIntern = new Intern(response.fullName, response.id, response.email, internSchool.school);
                team.push(newIntern);
                console.log(team);
                inquireQ();

            });
        }
        

        });
        
    break;
        case "Finish team":
            if (team.length > 0){
                writeHTML(render(team));
                console.log("All done!")
            }
            else{
                console.log("There's no Team Members!");
                inquireQ();
            }
        break;

        default:
        break;
        //end of switch
    }
});
}

inquireQ();

function writeHTML(HTML){
    fs.writeFileSync(outputPath, HTML, function (err) {
        if (err) {
            return console.log(err);
        }  
    });
}
