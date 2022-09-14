const Employee = require("./employee");
class Intern extends Employee {
    constructor(name, id, school){
    super(name )
    this.name = name;
    this.id = id;
    this.school = school;
}}

getSchool(){
    return this.school;
}

getRole(){
    return "intern";
};

module.exports = Intern