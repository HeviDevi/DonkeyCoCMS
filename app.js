require("dotenv").config();
const inquirer = require("inquirer");
const { Pool } = require("pg");
const { addEmployeeQuestions, updateEmployeeRoleQuestions } = require("./questions");

const pool = new Pool({
  database: "donkey_company_db",
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: "localhost",
  port: 5432,
});

//CRUD functions.
//Create, Read, Update & Delete functions in that order. To be called in the if then statment in server.js

//Create
//Add an employee
function addEmployee() {
  inquirer.prompt(addEmployeeQuestions).then(async (answers) => {
    let { first_name, last_name, role_id, manager_id } = answers;
    if (manager_id === "Hank the Donkey (CED)") {
      manager_id = 1;
    } else if (manager_id === "Rodger the Rooster (Sales Manager)") {
      manager_id = 2;
    } else if (manager_id === "Bruce the Bear (Marketing Manager)") {
      manager_id = 4;
    } else if (manager_id === "Molly the Mouse (Accounting Manager)") {
      manager_id = 6;
    } else if (manager_id === "Patricia the Pig (HR Manager)") {
      manager_id = 7;
    } else if (manager_id === "Gary the Goat (Legal Counsel)") {
      manager_id = 9;
    }

    try {
      console.log("Adding a new employee");

      const client = await pool.connect();
      const employeeData = await client.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *`,
        [first_name, last_name, role_id, manager_id]
      );
      console.log(
        `Added ${first_name} ${last_name} to the database, Welcome Aboard!`
      );
      console.table(employeeData.rows);
     
    } catch (err) {
      console.error(err);
    }
  });
}
//add role
async function addRole(addRoleQuestions) {
  try{} catch (err) {
    console.log(err);
  }
}  
//add department
async function addDepartment() {
  try{} catch (err) {
    console.log(err);
  }
}


//Read
//View all employees
const viewEmployees = async () => {
  try {
    console.log(
      "Here are all of our current employees, their roles, and their managers:");
    //Connect to the database
    const client = await pool.connect();
    // Get & display Employee Data
    const employeeeData = await client.query("SELECT * FROM employee");
    console.table(employeeeData.rows);
  } catch (err) {
    console.error(err);
  }
};
//View all roles
async function viewRoles() {
  try {
    console.log("Here are the current positions we have in the company & their salaries:");
    //Connect to the database
    const client = await pool.connect();
    // Get & display the Role Data
    const rolesData = await client.query("SELECT * FROM role");
    console.table(rolesData.rows);
  } catch (err) {
  console.error(err);
}
}

//View all departments
async function viewDepartments() {
  try {
    console.log("Here are our current hard working departments (staffed entirely by live animals):")
    //Connect to the database
    const client = await pool.connect();
    // Get & Display Department Data
    const departmentData = await client.query("SELECT * FROM department");
    console.table(departmentData.rows);
  } catch (err) {
    console.error(err);
  }
}

//Update
//Update an employee's role... TODO: & manager
function updateEmployeeRole() {
  inquirer.prompt(updateEmployeeRoleQuestions).then(async (answers) => {
    const {employee_id, role_id, manager_id} = answers;
    if (manager_id === "Hank the Donkey (CED)") {
      manager_id = 1;
    } else if (manager_id === "Rodger the Rooster (Sales Manager)") {
      manager_id = 2;
    } else if (manager_id === "Bruce the Bear (Marketing Manager)") {
      manager_id = 4;
    } else if (manager_id === "Molly the Mouse (Accounting Manager)") {
      manager_id = 6;
    } else if (manager_id === "Patricia the Pig (HR Manager)") {
      manager_id = 7;
    } else if (manager_id === "Gary the Goat (Legal Counsel)") {
      manager_id = 9;
    }
    try {
      const client = await pool.connect();
      const employeeData = await client.query(
        `UPDATE employee SET role_id = $2 WHERE id = $1 RETURNING * UPDATE employee SET manager_id = $3 WHERE id = $1 RETURNING *`,
        [employee_id, role_id, manager_id]
      );
      console.table(employeeData.rows);
      console.log(`Updated employee with id ${employee_id} to role id ${role_id} their new manager's id is ${manager_id}`)
    } catch (err) {
      console.log(err);
    }
  });
}

//Delete
//Remove an employee
async function removeEmployee() {
  try{} catch (err) {
    console.log(err);
  }
} 



module.exports = { viewEmployees, addEmployee, updateEmployeeRole, viewRoles, viewDepartments };
