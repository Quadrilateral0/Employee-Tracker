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
            'Add a department', 'Add a role', 'Add an employee', new inquirer.Separator(), 'Update an employee role']
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
        fs.appendFile('schema.sql', content, (err) =>
        err ? console.log(err) : console.log('Success!'));
        return;
    })}});

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
