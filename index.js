const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager')
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const generateHTML = require('./src/html');
let teamMembers = [];


function manager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your employee id?',
            name: 'id',

        },

        {
            type: 'input',
            message: 'what is your email:',
            name: 'email',

        },
        {
            type: 'input',
            message: 'what is your office number:',
            name: 'number',

        },

    ])
        .then((data) => {
            console.log(data)

        })

}



function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your employee id?',
            name: 'id',

        },

        {
            type: 'input',
            message: 'what is your email:',
            name: 'email',

        },
        {
            type: 'input',
            message: 'what is your github?',
            name: 'git',
        }
    ])
        .then((data) => {
            console.log(data)
        })
}

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your employee id?',
            name: 'id',

        },

        {
            type: 'input',
            message: 'what is your email:',
            name: 'email',

        },

        {
            type: 'input',
            message: 'what School do you attend?',
            name: 'school',

        },

    ])
        .then((data) => {
            console.log(data)
        })
}


function createEmployee () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What position is this employee in?:',
            name: 'choose',
            choices:['Engineer','Intern','Manager'] 

        },
        


    ])
    .then((data) => {
        console.log(data)
        if (data.choose === 'Engineer' )
        engineer()
        else if (data.choose === 'Intern')
        intern()
        else if (data.choose === 'Manager')
        manager()

    })   .then(() => {
        fs.writeFile('index.html', generateHTML(teamMembers), (err) =>
            err ? console.error(err) : console.log('Success!')
        )
        teamMembers.push(Manager, Intern, Engineer);
})
}

createEmployee()
