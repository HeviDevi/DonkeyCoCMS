const inquirer = require('inquirer');
const { addEmployee, addRole, addDepartment, viewEmployees, viewRoles, viewDepartments, updateEmployeeRole, removeEmployee } = require('./app')






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
        viewRoles().then(startPrompt);
    } else if (answers.action === 'Add Role') {
        addRole();
    } else if (answers.action === 'View All Departments') {
        viewDepartments().then(startPrompt);
    } else if (answers.action === 'Add Department') {
        addDepartment();
    } else if (answers.action === 'Fire Employee') {
        removeEmployee();
    } else if (answers.action === 'Exit') {
        process.exit();
    }

})
};

startPrompt();

//Import Parameterized Queries from app.js
//create inquirer prompts
//create if then statements for each prompt that will call the appropriate function
