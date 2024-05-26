INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Hank', 'The Donkey', 1, 1),
('Rodger', 'The Rooster', 2, 2),
('Buck', 'The Bull', 2, 3),
('Bruce', 'The Bear', 3, 4),
('Pasquale', 'The Parrot', 3, 5),
('Molly', 'The Mouse', 4, 6),
('Patricia', 'The Pig', 5, 7),
('Walter', 'The Wolf', 5, 8),
('Gary', 'The Goat', 6, 9),
('Terry', 'The Turtle', 6, 10);

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
('Sales Manager', 500000, 2),
('Marketing Manager', 500000, 3),
('Accountant', 500000, 4),
('HR Manager', 500000, 5),
('Legal Counsel', 1000000, 6);
