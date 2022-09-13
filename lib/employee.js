const manager = require("./lib/manager");
const engenier = require("./lib/engenier");
const intern = require("./lib/intern");

const Person = {
    name:"Garrett",
    age: 28,
    job: "Manager"
}

function Postion(name,job){
    this.name = name
    this.job = job
}