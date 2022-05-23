// Importing mysql2, inquirer, and console.table
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connect to database and provide username and password.
// const dbConnection = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'rootroot',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
//   );

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
        console.log("Adding department");
        addDepartment();
      }
      if (answer.menu === "Add role") {
        console.log("Adding role");
        addRole();
      }
      if (answer.menu === "Add employee") {
        console.log("Adding Employee");
        addEmployee();
      }
      if (answer.menu === "Update employee role") {
        console.log("Adding Employee");
        updateEmployeeRole();
      }
      if (answer.menu === "View all departments") {
        console.log("View Departments");
        viewDepartments();
      }
      if (answer.menu === "View all roles") {
        console.log("Viewing Roles");
        viewRoles();
      }
      if (answer.menu === "View all employees") {
        console.log("Viewing Employees");
        viewEmployees();
      }
      if (answer.menu === "Quit Employee Management Application") {
        console.log("Quitting Application");
        quitApp();
      }
    });
};

const addDepartment = () => {
  inquirer.prompt({
    type: "input",
    name: "addDepartment",
    message: "What is the name of the new department?",
  });
};

const addRole = () => {
  inquirer.prompt({
    type: "input",
    name: "addRole",
    message: "What is the name of the new role?",
  });
};

const addEmployee = () => {
  inquirer.prompt({
    type: "input",
    name: "addEmployee",
    message: "What is the name of the new employee?",
  });
};

const updateEmployeeRole = () => [];
const viewDepartments = () => [];
const viewRoles = () => [];
const viewEmployees = () => [];
const quitApp = () => [];

menuOptions();
