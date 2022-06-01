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
        answer.addDepartment
      );
      viewDepartments();
    });
};

const addRole = () => {
  let departmentOptions;
  dbConnection
    .promise()
    .query("SELECT id, name FROM department")
    .then(([results]) => {
      console.log(results);
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
          dbConnection.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
            [answer.addRole, answer.newSalary, answer.whichDepartment]
          );

          menuOptions();
        });
    });
  // console.log(departmentOptions);
};

const addEmployee = () => {
  let roleOptions;
  let managerChoices;
  dbConnection
    .promise()
    .query("SELECT id, title FROM role")
    .then(([results]) => {
      console.log(results);
      roleOptions = results.map((a) => {
        return {
          name: a.title,
          value: a.id,
        };
      });
    })
    .then(() => {
      dbConnection
        .promise()
        .query("SELECT id, first_name, last_name FROM employee")
        .then(([results]) => {
          // console.log(results);
          // TODO: make a selectable option for no manager ----------------------------------
          managerChoices = results.map((a) => {
            return {
              name: `${a.first_name} ${a.last_name}`,
              value: a.id,
            };
          });
        })

        .then(() => {
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
                type: "list",
                name: "employeeRole",
                message: "What is the role of this employee?",
                choices: roleOptions,
              },
              {
                type: "list",
                name: "employeeManager",
                message: "Who is the manager of this employee?",
                choices: managerChoices,
              },
            ])
            .then((answer) => {
              dbConnection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
                [
                  answer.employeeFirstName,
                  answer.employeeLastName,
                  answer.employeeRole,
                  parseInt(answer.employeeManager),
                ]
              );
              menuOptions();
            });
        });
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
  // get all the roles to choose from
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
    console.log(
      "Use the up or down arrow keys to select the next option of the menu."
    );
    menuOptions();
  });
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
