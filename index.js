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
      //database: 'schema'
    },
    console.log(`Connected to the Schema database.`)
  );

inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "What do you want to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', new inquirer.Separator(),
            'Add a department', 'Add a role', 'Add an employee', new inquirer.Separator(), 'Update an emplyee role',]
        }, 
        {
            type: "input",
            name: "title",
            message: "What",
        },
    ])

    .then((data) => {
//Creating table content
const schema = `${data.title}`

        //Write schema file
        const filename = `schema.sql`;

        fs.writeFile(filename, schema, (err) =>
        err ? console.log(err) : console.log('Success!'));
    })
    