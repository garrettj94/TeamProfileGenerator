const { default: inquirer } = require("inquirer");
const { ignoreElements } = require("rxjs");
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, getGithub) {

        super(name, id, getGithub)
        this.name = name;
        this.id = id;
        this.github = github;
    }





    getGithub() {
        return this.github;
    }

    getRole() {
        return "engineer ";
    };
}

module.exports = Engineer