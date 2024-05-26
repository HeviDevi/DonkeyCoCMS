require("dotenv").config();
const { Pool } = require("pg");
chosenFirstName = "Henry";
chosenLastName = "The Horse";
chosenRole = 4;
chosenManager = 13;

const pool = new Pool({
  database: "donkey_company_db",
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: "localhost",
  port: 5432,
});
//View all employees
const getEmployees = async () => {
  try {
    console.log(
      "Here are all of our current employees, their roles, and their managers:"
    );

    //Connect to the database
    const client = await pool.connect();
    // Get the Employee Data
    const employeeeData = await client.query("SELECT * FROM employee");
    console.log(employeeeData.rows);
  } catch (err) {
    console.error(err);
  }
};

//TODO: add parameterized queries for the following
//Add an employee
const addEmployee = async () => {
  try {
    console.log("Adding a new employee");

    const client = await pool.connect();
    const employeeData = await client.query(
      `
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
      [chosenFirstName, chosenLastName, chosenRole, chosenManager]
    );
    console.log(
      `Added ${chosenFirstName} ${chosenLastName} to the database, Welcome Aboard!`
    );
  } catch (err) {
    console.error(err);
  }
};

//Update an employee role
//view all roles
//add role
//View all departments
//add department

// addEmployee();
// getEmployees();
(exports = getEmployees), addEmployee;
