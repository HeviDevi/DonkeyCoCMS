INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Hank', 'The Donkey', 1, null),
('Rodger', 'The Rooster', 2, 1),
('Buck', 'The Bull', 3, 2),
('Bruce', 'The Bear', 4, 1),
('Pasquale', 'The Parrot', 5, 4),
('Molly', 'The Mouse', 6, 1),
('Patricia', 'The Pig', 8, 1),
('Walter', 'The Wolf', 9, 8),
('Gary', 'The Goat', 10, 1),
('Terry', 'The Turtle', 11, 9);

INSERT INTO department (name)
VALUES 
('Management'),
('Sales'),
('Marketing'),
('Accounting'),
('Human Resources'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('CED', 1000000000, 1),
('Sales Manager', 500000, 1),
('Salesperson', 100000, 2),
('Marketing Manager', 500000, 1),
('Marketing Specialist', 100000, 3),
('Accounting Manager', 500000, 1),
('Accountant', 100000, 4),
('HR Manager', 500000, 1),
('HR Specialist', 100000, 5),
('Legal Counsel', 1000000, 6),
('Legal Assistant', 100000, 6);
