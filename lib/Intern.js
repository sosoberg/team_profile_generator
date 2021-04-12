const Employee = require("./Employee");

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email)
    this.school = school;
}