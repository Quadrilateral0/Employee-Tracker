//Require dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "Welcome to the Employee Navigation Menu. What do you want to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', new inquirer.Separator(),
            'Add a department', 'Add a role', 'Add an employee', new inquirer.Separator(), 'Update an employee role',
            new inquirer.Separator()]
        }, 
    ])
    .then((answers) => {
        if (answers.menu === 'View all departments') {
            //PRINT SQL OUTPUT OF DEPARTMENT TABLE USING CTABLE;
            return inquirer.prompt();
        } else if (answers.menu === 'View all roles') {
            //PRINT SQL OUTPUT OF ROLES TABLE USING CTABLE;
            return inquirer.prompt();
        } else if (answers.menu === 'View all employees') {
            //PRINT SQL OUTPUT OF EMPLOYEES TABLE USING CTABLE;
            return inquirer.prompt();
        } else if (answers.menu === 'Add a department') {   
            inquirer.prompt([
                {
                    type: "input",
                    name: "department",
                    message: "What is the name of the new department?",
                }
            ])
            .then((data) => {

            //Adding a department to department table
            const content = `${data.department}`//Write db.query() function here to insert data to table

             //Append to schema.sql file
            fs.appendFile("db/schema.sql", content, (err) =>
            err ? console.log(err) : console.log('Success!'));
            return;
            });

        } else if (answers.menu === 'Add a role') {   
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
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
            .then((data) => {

            //Adding a role to rolee table
            const content = `${data.name}`//Write db.query() function here to insert data to table

             //Append to schema.sql file
            fs.appendFile("db/schema.sql", content, (err) =>
            err ? console.log(err) : console.log('Success!'));
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
            .then((data) => {

            //Adding an employee to employee table
            const content = `${data.role}`//Write db.query() function here to insert data to table

             //Append to schema.sql file
            fs.appendFile("db/schema.sql", content, (err) =>
            err ? console.log(err) : console.log('Success!'));
            return;
            });  
        } else if (answers.menu === 'Update an employee role') {   
            inquirer.prompt([
                {
                    type: "list",
                    name: "choose",
                    message: "What is the employee's last name?",
                    choices: ['']
                },
                {
                    type: "input",
                    name: "new",
                    message: "What is the new role of the employee?",
                },
            ])
            .then((data) => {

            //Changing a role in rolee table
            const content = `${data.role}`//Write db.query() function here to insert data to table

             //Append to schema.sql file
            fs.appendFile("db/schema.sql", content, (err) =>
            err ? console.log(err) : console.log('Success!'));
            return;
            });  
        }
    });

// //Connect to MySQL database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'rootroot',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
//   );
