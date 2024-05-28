require("dotenv").config();
const inquirer = require("inquirer");
const { Pool } = require("pg");
const {
  addEmployeeQ,
  addRoleQ,
  addDepartmentQ,
  updateEmployeeRoleQ,
  upstateNewYorkVacationSelectionQ,
  viewEmployeesByDepartmentQ,
} = require("./questions");

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
  return new Promise((resolve, reject) => {
    inquirer.prompt(addEmployeeQ).then(async (answers) => {
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
      resolve();
    });
  });
}
//Create a role
async function addRole() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(addRoleQ).then(async (answers) => {
      let { title, salary, department_id } = answers;
      try {
        console.log("Adding a new role (I hope an animal gets this one)");
        const client = await pool.connect();
        const roleData = await client.query(
          `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *`,
          [title, salary, department_id]
        );
        console.table(roleData.rows);
        console.log(`Added ${title} to the database, Time for some new hires!`);
      } catch (err) {
        console.log(err);
      }
      resolve();
    });
  });
}
//create a department
async function addDepartment() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(addDepartmentQ).then(async (answers) => {
      let { department_name } = answers;
      try {
        console.log(
          "Adding a new department (To be fully staffed by live animals)"
        );
        const client = await pool.connect();
        const departmentData = await client.query(
          `INSERT INTO department (name) VALUES ($1) RETURNING *`,
          [department_name]
        );
      } catch (err) {
        console.log(err);
      }
      resolve();
    });
  });
}

//Read
//View all employees
const viewEmployees = async () => {
  try {
    console.log(
      "Here are all of our current employees, their roles, and their managers:"
    );
    //Connect to the database
    const client = await pool.connect();
    // Get & display Employee Data
    const employeeeData = await client.query(
      "SELECT * FROM employee ORDER BY role_id ASC"
    );
    console.table(employeeeData.rows);
  } catch (err) {
    console.error(err);
  }
};

//View employees by department
async function viewEmployeesByDepartment() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(viewEmployeesByDepartmentQ).then(async (answer) => {
      let { department_name } = answer;
      if (department_name === "Management") {
        department_id = 1;
      } else if (department_name === "Sales") {
        department_id = 2;
      } else if (department_name === "Marketing") {
        department_id = 3;
      } else if (department_name === "Accounting") {
        department_id = 4;
      } else if (department_name === "Human Resources") {
        department_id = 5;
      } else if (department_name === "Legal") {
        department_id = 6;
      }
      try {
        console.log(
          `Here are all of our employees in the ${department_name} department:`
        );
        const client = await pool.connect();
        // Get & display Employee Data
        const employeeData = await client.query(
          "SELECT employee.*, role.department_id FROM employee INNER JOIN role ON employee.role_id = role.id WHERE role.department_id = $1 ORDER BY role_id ASC",
          [department_id]
        );
        console.table(employeeData.rows);
      } catch (err) {
        console.log(err);
      }
      resolve();
    });  
  });
}
//View all roles
async function viewRoles() {
  try {
    console.log(
      "Here are the current positions we have in the company & their salaries:"
    );
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
    console.log(
      "Here are our current hard working departments (staffed entirely by live animals):"
    );
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
//Update an employee's role & manager
function updateEmployeeRole() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(updateEmployeeRoleQ).then(async (answers) => {
      let { employee_id, role_id, manager_id } = answers;
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
          `UPDATE employee SET role_id = $2, manager_id = $3 WHERE id = $1 RETURNING *`,
          [employee_id, role_id, manager_id]
        );
        console.table(employeeData.rows);
        console.log(
          `Updated employee with id ${employee_id} to role id ${role_id} their new manager's id is ${manager_id}`
        );
      } catch (err) {
        console.log(err);
      }
      resolve();
    });
  });
}

//Delete
//Remove an employee
async function removeEmployee() {
  return new Promise((resolve, reject) => {
    inquirer.prompt(upstateNewYorkVacationSelectionQ).then(async (answers) => {
      let { employee_id } = answers;
      try {
        const client = await pool.connect();
        const employeeData = await client.query(
          `DELETE FROM employee WHERE id = $1 RETURNING *`,
          [employee_id]
        );
        console.table(employeeData.rows);
        console.log(
          `Enjoy your new life in upstate New York! Beautiful this time of year!`
        );
      } catch (err) {
        console.log(err);
      }
      resolve();
    });
  });
}

module.exports = {
  addEmployee,
  addRole,
  addDepartment,
  viewEmployees,
  viewEmployeesByDepartment,
  viewRoles,
  viewDepartments,
  updateEmployeeRole,
  removeEmployee,
};
