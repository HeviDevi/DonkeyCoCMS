require("dotenv").config();
const inquirer = require("inquirer");
const { Pool } = require("pg");

const pool = new Pool({
  database: "donkey_company_db",
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: "localhost",
  port: 5432,
});


const addEmployeeQuestions = [
  {
    type: "input",
    name: "first_name",
    message: "What is their first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is their last name?",
  },
  {
    type: "input",
    name: "role_id",
    message: "What is their role id?",
  },
  {
    type: "list",
    name: "manager_id",
    message: "Who is their manager?",
    choices: [
      "Hank the Donkey (CED)",
      "Rodger the Rooster (Sales Manager)",
      "Bruce the Bear (Marketing Manager)",
      "Molly the Mouse (Accounting Manager)",
      "Patricia the Pig (HR Manager)",
      "Gary the Goat (Legal Counsel)",
    ],
  },
];

const updateEmployeeRoleQuestions = [
  {
    type: "input",
    name: "employee_id",
    message: "What is their employee id?",
  },
  {
    type: "input",
    name: "role_id",
    message: "what is their new role id?",
  },
];

start = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Exit",
    ],
  },
];

//TODO: add parameterized queries for the following
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

//Update an employee's role and manager
function updateEmployeeRole() {
  inquirer.prompt(updateEmployeeRoleQuestions).then(async (answers) => {
    const {employee_id, role_id} = answers;
    try {
      const client = await pool.connect();
      const employeeData = await client.query(
        `UPDATE employee SET role_id = $2 WHERE id = $1 RETURNING *`,
        [employee_id, role_id]
      );
      console.table(employeeData.rows);
      console.log(`Updated employee with id ${employee_id} to role id ${role_id}`)
    } catch (err) {
      console.log(err);
    }
  });
}

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
//add role
//View all departments
//add department

module.exports = { viewEmployees, addEmployee, updateEmployeeRole, viewRoles };
