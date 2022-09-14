const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require('./lib/manager')
const Intern = require('./lib/intern');
const Engenier = require('./lib/engenier');
const generateHTML= require('./lib/html');
let teamMembers = [];
//runnung class contrutors put in someiothng to say fuction for next question so that havter they enter name then can enter job title
//take data and put into  ghtml (teamMember comes into play) .push into an array
// make function called add interin add in quire promt
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your job title?',
            name: 'job title',
        },
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your employee id?',
            name: 'id',

        },
        {
            type: 'input',
            message: 'what is your office number:',
            name: 'number',

        },

        {
            type: 'input',
            message: 'what is your email:',
            name: 'email',

        },

    
        {
            type: 'choice',
            message: 'what would you like to do next:',
            name: 'next',
            choices: ['add engenier', 'add intern','finish']

        },



    ])
    .then((response) => {
        console.log(response)
        // if next === engeiner { addeneiner()}

        // fs.writeFile('index.html', generateHTML(teamMembers), (err) =>
        //     err ? console.error(err) : console.log('Success!')
        // )
    }

    );



 