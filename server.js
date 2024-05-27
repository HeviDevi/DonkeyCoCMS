const inquirer = require('inquirer');
const {viewEmployees, addEmployee, updateEmployeeRole, viewRoles} = require('./app')






 function startPrompt() {
    console.log('Welcome to the Employee Tracker!');
inquirer.prompt(start).then((answers) => {
    if (answers.action === 'View All Employees') {
        viewEmployees().then(startPrompt);
    } else if (answers.action === 'Add Employee') {
        addEmployee();
    } else if (answers.action === 'Update Employee Role') {
        updateEmployeeRole();
    } else if (answers.action === 'View All Roles') {
        viewRoles();
    } else if (answers.action === 'Add Role') {
        addRole();
    } else if (answers.action === 'View All Departments') {
        viewDepartments();
    } else if (answers.action === 'Add Department') {
        addDepartment();
    } else {
        process.exit();
    }

})
};

startPrompt();

//Import Parameterized Queries from app.js
//create inquirer prompts
//create if then statements for each prompt that will call the appropriate function
