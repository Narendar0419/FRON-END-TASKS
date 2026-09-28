drop database sample;
create database sample;
use sample;
-- 1. Calculate Employee Annual Salary
-- Create a function get_annual_salary() that accepts an employee's monthly salary and returns the annual salary.
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    salary DECIMAL(10,2)
);
INSERT INTO employees VALUES
(1, 'Naren', 30000),
(2, 'Arun', 40000),
(3, 'Kumar', 50000);
DELIMITER $$

CREATE FUNCTION get_annual_salary(monthly_salary DECIMAL(10,2))
RETURNS DECIMAL(12,2)
DETERMINISTIC
BEGIN
    RETURN monthly_salary * 12;
END $$

DELIMITER ;
SELECT 
    emp_name,
    salary AS monthly_salary,
    get_annual_salary(salary) AS annual_salary
FROM employees;
-- 2. Find Employee Experience
-- Create a function calculate_experience() that accepts the employee's joining year and returns the number of years of experience.

CREATE TABLE employee_experience (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    joining_year INT
);
INSERT INTO employee_experience VALUES
(1, 'Naren', 2022),
(2, 'Arun', 2020),
(3, 'Kumar', 2018);
delimiter $$
create function calculate_experience(joining_year INT)
returns int
DETERMINISTIC
BEGIN
    RETURN YEAR(CURDATE()) - joining_year;
END $$

DELIMITER ;
SELECT
    emp_name,
    joining_year,
    calculate_experience(joining_year) AS experience
FROM employee_experience; 

-- 3. Calculate Student Grade
-- Create a function get_grade() that accepts a student's mark and returns the grade.
-- Use the following rules:
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    mark INT
);
INSERT INTO students VALUES
(1, 'Naren', 95),
(2, 'Arun', 82),
(3, 'Kumar', 68),
(4, 'Ravi', 55),
(5, 'Vijay', 40);
select * from students;
delimiter $$ 
create function get_grade(mark int)
returns varchar (1)
deterministic 
begin  
if mark >= 90 and mark <= 100 then 
return 'S' ;
elseif 
mark >= 80 then
return 'A' ;
elseif
mark >= 70  then  
return 'B' ;
elseif
mark >= 60 then
return 'C' ;
elseif 
mark >=40 then
return 'D';
else 
return 'F' ;
end if;
end $$
DELIMITER ;

SELECT
    student_name,
    mark,
    get_grade(mark) AS grade
FROM students;

---

-- 4. Calculate Product Discount
-- Create a function calculate_discount() that accepts **product price** and **discount percentage**,
-- then returns the discount amount.

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);
INSERT INTO products VALUES
(1, 'Laptop', 60000),
(2, 'Mobile', 30000),
(3, 'Tablet', 20000);
select * from products ;
drop function calculate_discount;
delimiter $$ 
create function calculate_discount( product_price DECIMAL(10,2),
    discount_percentage DECIMAL(5,2))
    returns decimal (10,2)
    deterministic
    begin
     RETURN product_price * discount_percentage / 100;
     end $$
     delimiter ;
     SELECT
    product_name,
    price,
    calculate_discount(price, 10) AS discount_amount
FROM products;

