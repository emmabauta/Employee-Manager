const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

function appMenu() {
    createManager();
}
function createManager() {
    console.log("Please build your team.");
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your manager's id?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your manager's email?",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your manager's office number?",
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee to your team?'

        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        console.log(manager);
        //createTeam();Which member would you like to build?
    });
}

function createEmployee() {
    console.log('Who is in your team?');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ]).then(answers => {
        const employee = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);
        console.log(employee);
    });
}


function createEngineer() {
    console.log('Who is in your team?');
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'id',
            email: 'What is your id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerGithub);
    });
}

appMenu();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
render(employee, engineer, intern, manager);
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
