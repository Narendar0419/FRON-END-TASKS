drop database sample;
create database sample;
use sample;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
INSERT INTO employees VALUES
(1, 'Naren', 'IT', 50000),
(2, 'Arun', 'IT', 60000),
(3, 'Kumar', 'HR', 35000),
(4, 'Ravi', 'HR', 40000),
(5, 'Vijay', 'Sales', 45000),
(6, 'Ajay', 'Sales', 55000),
(7, 'Suresh', 'IT', 70000),
(8, 'Prakash', 'Finance', 65000);
-- 1. Find Employees with Salary Greater Than Average
WITH avg_salary AS (
    SELECT AVG(salary) AS average_salary
    FROM employees
)
SELECT emp_id, emp_name, department, salary
FROM employees
WHERE salary > (SELECT average_salary FROM avg_salary);

-- 2. Calculate Department-Wise Average Salary
WITH dept_salary AS (
    SELECT department, AVG(salary) AS average_salary
    FROM employees
    GROUP BY department
)
SELECT department, average_salary
FROM dept_salary;


CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    course VARCHAR(50),
    mark INT
);
INSERT INTO students VALUES
(1, 'Naren', 'Java', 85),
(2, 'Arun', 'Python', 72),
(3, 'Kumar', 'Java', 65),
(4, 'Ravi', 'Python', 90),
(5, 'Vijay', 'React', 55),
(6, 'Ajay', 'React', 78),
(7, 'Suresh', 'Java', 45),
(8, 'Prakash', 'Python', 88);

-- 3. Find Students Who Scored Above Average
WITH average_mark AS (
    SELECT AVG(mark) AS avg_mark
    FROM students
)
SELECT
    student_name,
    course,
    mark
FROM students
WHERE mark > (SELECT avg_mark FROM average_mark);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO products VALUES
(1, 'Laptop', 'Electronics', 60000),
(2, 'Mobile', 'Electronics', 30000),
(3, 'Tablet', 'Electronics', 20000),
(4, 'Keyboard', 'Accessories', 1500),
(5, 'Monitor', 'Electronics', 25000),
(6, 'Headphones', 'Accessories', 5000),
(7, 'Smart TV', 'Electronics', 45000),
(8, 'Printer', 'Electronics', 18000);

-- 4. Find High-Priced Products
-- Then display products whose price is greater than ₹20,000.
WITH product_data AS (
    SELECT product_name, category, price
    FROM products
)
SELECT product_name, category, price
FROM product_data
WHERE price > 20000;

-- 5. Calculate Employee Bonus
-- Using the employees table:
WITH employee_bonus AS (
    SELECT
        emp_id,
        emp_name,
        salary,
        salary * 10 / 100 AS bonus
    FROM employees
)
SELECT
    emp_name,
    salary,
    bonus,
    salary + bonus AS total_salary
FROM employee_bonus;