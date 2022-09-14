const Employee = require("./employee");

class Enginer extends Employee {
    constructor(name, id, getGithub ){

    super(name, id, getGithub)
    this.name = name;
    this.id = id;
    this.github = github;
}
}
    

// const engenier = [
//     new Enginer(name,)
// ]

getGithub(){
    return this.github;
}

getRole(){
    return "enginer ";
};


module.exports = Enginer