// Importing mysql2, inquirer, and console.table
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connect to database and provide username and password.
const dbConnection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// Prompts to be used when starting the app and choosing to perform additional actions.
const menuOptions = () => {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message:
        "Welcome to the Employee Management Application. Select from the following options:",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
        "Quit Employee Management Application",
      ],
    })
    .then((answer) => {
      console.log(answer.menu);
      if (answer.menu === "Add department") {
        // console.log("Adding department");
        addDepartment();
      }
      if (answer.menu === "Add role") {
        // console.log("Adding role");
        addRole();
      }
      if (answer.menu === "Add employee") {
        // console.log("Adding Employee");
        addEmployee();
      }
      if (answer.menu === "Update employee role") {
        // console.log("Adding Employee");
        updateEmployeeRole();
      }
      if (answer.menu === "View all departments") {
        // console.log("View Departments");
        viewDepartments();
      }
      if (answer.menu === "View all roles") {
        // console.log("Viewing Roles");
        viewRoles();
      }
      if (answer.menu === "View all employees") {
        // console.log("Viewing Employees");
        viewEmployees();
      }
      if (answer.menu === "Quit Employee Management Application") {
        // console.log("Quitting Application");
        quitApp();
      }
    });
};

// Add Functions //////////////////////
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "addDepartment",
      message: "What is the name of the new department?",
    })
    .then((answer) => {
      console.log(answer.addDepartment);
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole",
        message: "What is the name of the new role?",
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the salary of the new role?",
      },
      {
        type: "list",
        name: "whichDepartment",
        message: "In which department is the new role?",
        choices: ["Department 1", "Department 2", "Department 3"],
      },
    ])
    .then((answer) => {
      console.log(answer.addRole);
      console.log(answer.newSalary);
      console.log(answer.whichDepartment);
      menuOptions();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeFirstName",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "What is the last name of the new employee?",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What is the role of this employee?",
      },
      {
        type: "input",
        name: "employeeManager",
        message: "Who is the manager of this employee?",
      },
    ])
    .then((answer) => {
      console.log(answer.employeeFirstName);
      console.log(answer.employeeLastName);
      console.log(answer.employeeRole);
      console.log(answer.employeeManager);
      menuOptions()
    });
};
///////////////////////////////////////

const updateEmployeeRole = () => {
  console.log("Returning to menu options.");
};
const viewDepartments = () => {
  console.log("Returning to menu options.");
  menuOptions();
};
const viewRoles = () => {
  console.log("Returning to menu options.");
  menuOptions();
};
const viewEmployees = () => {
  console.log("Returning to menu options.");
  menuOptions();
};
const quitApp = () => {
  console.log("Quitting Application.");
  dbConnection.end();
};

menuOptions();
