// const inquirer = require('inquirer');
// const fs = require('fs');
// const employee = require('./lib/employee')

const generateHTML = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
    
        <title>Team Proifle Generator</title>
    </head>
    <body>
    <header class="container-fluid bg-dark text-light mb-5 p-3">
        <div class="d-flex align-items-center">
            <h1>Employee Sheet</h1>
            <h3 class="ml-auto">
               
            </h3>
        </div>
    </header>
    <body>`
}

module.exports = generateHTML