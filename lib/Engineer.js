// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// importing Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling employee constructor
    super(name, id, email);

    this.github = github;
  }

  // returning github from input
  getGithub() {
    return this.github;
  }

  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// to be exported
module.exports = Engineer;
