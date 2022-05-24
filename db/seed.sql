-- Seed info for department
INSERT INTO department (name)
VALUE 
('Engineering'),
('Art & Design'),
('Sales'), 
('Finance'),
('Legal');


-- Seed info for role
INSERT INTO role (title, salary, department_id)
VALUE
('Software Engineer', 100000, 1),
('Hardware Engineer', 100000, 1),
('Engineering Manager', 120000, 1),
('Graphic Designer', 50000, 2),
('Digital Sculptor', 60000, 2),
('Art & Design Manager', 70000, 2),
('Junior Sales Representative', 50000, 3),
('Senior Sales Representative', 70000, 3),
('Sales Manager', 80000, 3),
('Actuary', 80000, 4),
('Financial Analyst', 80000, 4),
('Finance Manager', 90000, 4),
('Patent Attorney', 90000, 5),
('Legal Analyst', 90000, 5),
('Legal Manager', 100000, 5);



-- Seed info for employee
