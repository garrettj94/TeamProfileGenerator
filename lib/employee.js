
//blank arry to push data through index.js

class Employee {
    constructor( name, id, email){
    this.name = name;
    this.id = id
    this.email = email
}

// if elese statment for manger intern and engenier prompts




getName(){
    return this.name 
};
    


getId(){
    return this.id;
};

getEmail(){
    return this.email
};

getRole(){
    return 'Employee'
};
}
module.exports = Employee