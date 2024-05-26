CREATE DATABASE IF NOT EXISTS Donkey_Company_db;
USE Donkey_Company_db;

CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,  
)

CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
)

CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
)