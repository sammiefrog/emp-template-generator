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
                var newManager = new Manager(response.fullName, response.id, response.email, response.role, managerOffice.officeNum);
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
                var newEngineer = new Engineer(response.fullName, response.id, response.email, response.role, engineerGH.github);
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
                var newIntern = new Intern(response.fullName, response.id, response.email, response.role, internSchool.school);
                team.push(newIntern);
                console.log(team);
                inquireQ();

            });
        }
        

        });
        
    break;
        case "Finish team":
            if (team.length > 0){
                render(team);
                console.log("all done!")
            }
            else{
                console.log("no team members");
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

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

function writeHTML(render){
    fs.writeFile(outputPath, template, function (err) {
  
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
  
    });
}
console.log(writeHTML);


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```