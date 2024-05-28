
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

const addRoleQuestions = [];
const addDepartmentQuestions = [];

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
    {
        type: "list",
        name: "manager_id",
        message: "Who is their new manager?",
        choices: [
          "Hank the Donkey (CED)",
          "Rodger the Rooster (Sales Manager)",
          "Bruce the Bear (Marketing Manager)",
          "Molly the Mouse (Accounting Manager)",
          "Patricia the Pig (HR Manager)",
          "Gary the Goat (Legal Counsel)",
        ],
    }
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
        "Fire Employee",
        "Exit",
      ],
    },
  ];



    module.exports = {addEmployeeQuestions, updateEmployeeRoleQuestions, start}