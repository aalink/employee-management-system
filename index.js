// Importing mysql2, inquirer, and console.table
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connect to database and provide username and password.
const dbConnection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

// Prompts to be used when starting the app and choosing to perform additional actions.
const menuOptions = () => {
  inquirer.prompt({
    name: "menu",
    type: "list",
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
  });
};

menuOptions();
