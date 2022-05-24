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
INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUE
-- Engineering
(1, 'Mark', 'Watney', 3, NULL),
(2, 'Bruce', 'Ng', 2, 1),
(3, 'Beth', 'Johanssen', 1, 1),
-- Art & Design
(4, 'Alex', 'Vogel', 6, NULL),
(5, 'Mike', 'Watkins', 5, 4),
(6, 'Tim', 'Grimes', 4, 4),
-- Sales
(7, 'Melissa', 'Lewis', 9, NULL),
(8, 'Rick', 'Martinez', 8, 7),
(9, 'Chris', 'Beck', 7, 7),
-- Finance
(10, 'Vincent', 'Kapoor', 12, NULL),
(11, 'Mindy', 'Park', 11, 10),
(12, 'Rich', 'Purnell', 10, 10),
-- Legal
(13, 'Teddy', 'Sanders', 15, NULL),
(14, 'Annie', 'Montrose', 14, 13),
(15, 'Mitch', 'Henderson', 13, 13);