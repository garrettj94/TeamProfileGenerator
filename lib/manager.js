const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, officeNumber){
    super(name )
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber;
}}

getRole(){
    return "manager";
};

module.exports = Manager