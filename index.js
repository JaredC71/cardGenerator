
const render = require('./src/render');
//import classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


//import inquirer for the prompts and fs for generating html doc
const inquirer = require('inquirer');
const fs = require('fs');

const employeeData = [];
//create a function for the manager questions
function managerPrompt() {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'managers name'
        },
        {
            name: 'id',
            type: 'input',
            message: 'managers id'
        },
        {
            name: 'email',
            type: 'input',
            message: 'managers email'
        },
        {
            name: 'officeNum',
            type: 'input',
            message: 'managers office number'
        },
        {
            name: 'selectMember',
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
}
function engineerPrompt() {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'engineer name'
        },
        {
            name: 'id',
            type: 'input',
            message: 'engineer id'
        },
        {
            name: 'email',
            type: 'input',
            message: 'engineer email'
        },
        {
            name: 'github',
            type: 'input',
            message: 'engineer github username'
        },
        {
            name: 'selectMember',
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
}
function internPrompt() {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'intern name'
        },
        {
            name: 'id',
            type: 'input',
            message: 'intern id'
        },
        {
            name: 'email',
            type: 'input',
            message: 'intern email'
        },
        {
            name: 'school',
            type: 'input',
            message: 'what school does the intern attend?'
        },
        {
            name: 'selectMember',
            type: 'list',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
}
function getEngineerData() {
    engineerPrompt().then(function(response) {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        if(response.selectMember == 'Engineer') {
            employeeData.push(newEngineer);
            getEngineerData();
        } else if(response.selectMember == 'Intern') {
            employeeData.push(newEngineer);
            getInternData();
        } else {
            employeeData.push(newEngineer);
            fs.writeFile('./index.html', render(employeeData), (err) => {
                err ? console.error(err) : console.log('Html was generated');
            });
            return;
        }
    })
}
function getInternData() {
    internPrompt().then(function(response) {
        const newIntern = new Intern(response.name, response.id, response.email, response.school);
        if(response.selectMember == 'Engineer') {
            employeeData.push(newIntern);
            getEngineerData();
        } else if(response.selectMember == 'Intern') {
            employeeData.push(newIntern);
            getInternData();
        } else {
            employeeData.push(newIntern);
            fs.writeFile('./index.html', render(employeeData), (err) => {
                err ? console.error(err) : console.log('Html was generated');
            });
            return;
        }
    })
    
}
function getManagerData() {
    managerPrompt().then(function(response) {
        const newManager = new Manager(response.name, response.id, response.email, response.officeNum)
        if(response.selectMember == 'Engineer') {
            employeeData.push(newManager);
            getEngineerData();
        } else if(response.selectMember == 'Intern') {
            employeeData.push(newManager);
            getInternData();
        } else {
            employeeData.push(newManager);
            fs.writeFile('./index.html', render(employeeData), (err) => {
                err ? console.error(err) : console.log('Html was generated');
            });
            return;
        }
    })
}

getManagerData(); //start the app