-- Delete and then create a new database if it exists. Then use it.
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;


-- Makes department table
CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL
);

-- Makes role table
CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

-- Makes employee table
CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL

);