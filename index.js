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

///////////////////////////////////////
/////////// Add Functions /////////////
///////////////////////////////////////
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      name: "addDepartment",
      message: "What is the name of the new department?",
    })
    .then((answer) => {
      dbConnection.query(
        "INSERT INTO department (name) VALUES (?);",
        answer.addDepartment);
      viewDepartments();
    });
};

const addRole = () => {
  let departmentOptions;
  dbConnection
    .promise().query("SELECT id, name FROM department")
    .then(([results]) =>{
      console.log(results)
      departmentOptions = results.map((a) => {
        return {
          name: a.name,
          value: a.id,
        };
      });
    })
    .then(() => {
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
            choices: departmentOptions,
          },
        ])
        .then((answer) => {
          // console.log(answer.addRole);
          // console.log(answer.newSalary);
          // console.log(answer.whichDepartment);
          menuOptions();
        });
    });
  // console.log(departmentOptions);
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
      menuOptions();
    });
};
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//------------------------------------
///////////////////////////////////////
/////////// Update Function ///////////
///////////////////////////////////////
const updateEmployeeRole = () => {
  console.log("Returning to menu options.");
};
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//------------------------------------
///////////////////////////////////////
/////////// View Functions ////////////
///////////////////////////////////////
const viewDepartments = () => {
  dbConnection.query("SELECT * FROM department", function (err, results) {
    let departmentTable = consoleTable.getTable(results);
    console.table(departmentTable);
    // console.log("Use the up or down arrow keys to select the next option of the menu.");
    // console.log(results)
    // let test3 = results.map(a => a.name);
    // console.log(test3)
  });
  menuOptions();
};
const viewRoles = () => {
  dbConnection.query("SELECT * FROM role", function (err, results) {
    let roleTable = consoleTable.getTable(results);
    console.table(roleTable);
    console.log(
      "Use the up or down arrow keys to select the next option of the menu."
    );
    menuOptions();
  });
};
const viewEmployees = () => {
  dbConnection.query("SELECT * FROM employee", function (err, results) {
    let employeeTable = consoleTable.getTable(results);
    console.table(employeeTable);
    console.log(
      "Use the up or down arrow keys to select the next option of the menu."
    );
    menuOptions();
  });
};
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//------------------------------------
const quitApp = () => {
  console.log("Quitting Application.");
  dbConnection.end();
};

menuOptions();
