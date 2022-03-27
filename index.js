//Require dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const fs = require('fs');

//Connect to MySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function menu() {
inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "Welcome to the Employee Navigation Menu. What do you want to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', new inquirer.Separator(),
            'Add a department', 'Add a role', 'Add an employee', new inquirer.Separator(), 'Update an employee role',
            new inquirer.Separator()]
        } 
    ])
    .then((answers) => {
        if (answers.menu === 'View all departments') {
            //PRINT SQL OUTPUT OF DEPARTMENT TABLE USING CTABLE;
            db.query('SELECT * FROM department', function (err, answers) {
                console.table(answers);
              });
            return;
        } else if (answers.menu === 'View all roles') {
            //PRINT SQL OUTPUT OF ROLES TABLE USING CTABLE;
            db.query('SELECT * FROM roles', function (err, answers) {
                console.table(answers);
              });
            return;
        } else if (answers.menu === 'View all employees') {
            //PRINT SQL OUTPUT OF EMPLOYEES TABLE USING CTABLE;
            db.query('SELECT * FROM employee', function (err, answers) {
                console.table(answers);
              });
            return;
        } else if (answers.menu === 'Add a department') {   
            inquirer.prompt([
                {
                    type: "input",
                    name: "department",
                    message: "What is the name of the new department?",
                }
            ])
            .then((answers) => {

            //Adding a department to department table
            db.query(`INSERT INTO department (names) VALUES (${answers})`, function (err, answers) {
                console.log(answers);
              });
            db.query('SELECT * FROM department', function (err, answers) {
                console.table(answers);
              });
            return;
            });

        } else if (answers.menu === 'Add a role') {   
            inquirer.prompt([
                {
                    type: "input",
                    name: "title",
                    message: "What is the name of the new employee role?",
                },
                {
                    type: "input",
                    name: "salary",
                    message: "What is the salary of the new employee role? Please do not use commas in your response.",
                },
                {
                    type: "list",
                    name: "dept",
                    message: "What department will this role be in?",
                    choices: ['Human Resources', 'Legal & Compliance', 'Operations', 'Sales']
                }
            ])
            .then((answers) => {

            //Adding a role to role table
            db.query(`INSERT INTO roles (title, salary) VALUES (${answers.title}, ${answers.salary})`, function (err, answers) {
                console.log(answers);
              });
            db.query('SELECT * FROM roles', function (err, answers) {
                console.table(answers);
              });
            return;
            });  

        } else if (answers.menu === 'Add an employee') {   
            inquirer.prompt([
                {
                    type: "input",
                    name: "first",
                    message: "What is the first name of the new employee?",
                },
                {
                    type: "input",
                    name: "last",
                    message: "What is the last name of the new employee?",
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the new employee's role?",
                    choices: ['Compliance Manager', 'Legal Consultant', 'HR Manager', 'HR Specialist',
                    'Operations Specialist', 'Operations Manager', 'Sales Specialist', 'Sales Manager']
                }
            ])
            .then((answers) => {

            //Adding an employee to employee table
            db.query(`INSERT INTO employee (first_name, last_name) VALUES (${answers.first}, ${answers.last})`, function (err, answers) {
                console.log(answers);
              });
            db.query('SELECT * FROM employee', function (err, answers) {
                console.table(answers);
              });
            return;
            });  
        } else if (answers.menu === 'Update an employee role') {   
            inquirer.prompt([
                {
                    type: "list",
                    name: "choose",
                    message: "What is the employee's last name?",
                    choices: ['Brown', 'White', 'Black', 'Redd', 'Greene']
                },
                {
                    type: "input",
                    name: "new",
                    message: "What is the new role of the employee?",
                },
            ])
            .then((answers) => {

                //Changing an employee's role
                db.query(`ENTER QUERY HERE`, function (err, answers) {
                    console.log(answers);
                  });
                return;
            });  
        }
    });
}

menu();
