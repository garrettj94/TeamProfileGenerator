const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./employee");
const Manager = require('./manager')
const Intern = require('./intern');
const Engenier = require('./engenier');


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
            type: 'input',
            message: 'what is your github url:',
            name: 'github url',

        },

    ])

    if (Employee === Manager)
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );


// const function generateHTML();