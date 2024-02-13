// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// importing Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // override employee role to manager
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// to be exported
module.exports = Manager;
