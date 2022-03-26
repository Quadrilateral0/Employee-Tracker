INSERT INTO department (names)
VALUES ("Human Resources"),
       ("Legal & Compliance"),
       ("Operations"),
       ("Sales");

INSERT INTO roles (department_id, title, salary)
VALUES (2, "Compliance Manager", 90000),
       (2, "Legal Consultant", 50000),
       (1, "HR Manager", 90000),
       (1, "HR Specialist", 60000),
       (3, "Operations Specialist", 60000),
       (3, "Operations Manager", 90000),
       (4, "Sales Specialist", 50000),
       (4, "Sales Manager", 90000),
       (3, "CEO", 150000);



INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "Sam", "Brown", 9),
       (2, "Sally", "White", 1),
       (9, "Bob", "Black", NULL),
       (3, "Jane", "Redd", 9),
       (4, "Stef", "Greene", 3);
