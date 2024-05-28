const inquirer = require('inquirer');
const { addEmployee, addRole, addDepartment, viewEmployees, viewEmployeesByDepartment, viewRoles, viewDepartments, updateEmployeeRole, removeEmployee } = require('./app')






 function startPrompt() {
    console.log(`           
    W                        
   W   <|__<|"       Hank the Donkey (CED)
  W     00==|" 
 W     / __,|-------------_
|_|===''/  |             /||
           |__  _____   / ||
             |||     |||  WW 
             |||     |||   
__M____M____//,]____//,]_________M_`);
inquirer.prompt(start).then((answers) => {
    if (answers.action === 'View All Employees') {
        viewEmployees().then(startPrompt);
    } else if (answers.action === 'View Employees by Department') {
        viewEmployeesByDepartment().then(startPrompt);    
    } else if (answers.action === 'Add Employee') {
        addEmployee().then(startPrompt);
    } else if (answers.action === 'Update Employee Role') {
        updateEmployeeRole().then(startPrompt);
    } else if (answers.action === 'View All Roles') {
        viewRoles().then(startPrompt);
    } else if (answers.action === 'Add Role') {
        addRole().then(startPrompt);
    } else if (answers.action === 'View All Departments') {
        viewDepartments().then(startPrompt);
    } else if (answers.action === 'Add Department') {
        addDepartment().then(startPrompt);
    } else if (answers.action === 'Fire Employee') {
        removeEmployee().then(startPrompt);
    } else if (answers.action === 'Exit') {
        process.exit();
    }

})
};

startPrompt();

//Import Parameterized Queries from app.js
//create inquirer prompts
//create if then statements for each prompt that will call the appropriate function
