start = [
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View Employees by Department",
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

  //Questions in CRUD order
  //Create
const addEmployeeQ= [
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

const addRoleQ = [
    {
    type: "input",
    name: "title",
    message: "What is the title of the new role?",
    }, 
    {
    type: "input",
    name: "salary",
    message: "What is the salary of the new role?",
    },
    {
    type: "input",
    name: "department_id",
    message: "What is the department id of the new role?",
    },
];
const addDepartmentQ = [
    {
        type: "input",
        name: "department_name",
        message: "What is the name of the new department?",
    },
];

//Read
const viewEmployeesByDepartmentQ = [
    {
      type: "list",
      name: "department_name",
      message: "Which department would you like to view?",
      choices: [
        "Management",
        "Sales",
        "Marketing",
        "Accounting",
        "Human Resources",
        "Legal",
      ]
    },
];

//Update
const updateEmployeeRoleQ = [
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

//Delete
  upstateNewYorkVacationSelectionQ= [
    {
        type: "input", 
        name: "employee_id",
        message: "Which employee would you like to send on a permanent (unpaid) vacation to upstate New York? (ENTER EMPLOYEE ID)",
        validate: function(answer) {
            if (isNaN(answer) === false) {
                return true;
            }
            return false;
        }
    }
  ]
  
 



    module.exports = { start, addEmployeeQ, addRoleQ, addDepartmentQ, viewEmployeesByDepartmentQ, updateEmployeeRoleQ,  upstateNewYorkVacationSelectionQ}