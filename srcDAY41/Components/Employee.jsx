
import { useState } from "react";

function Employee() {

  const [empid, setEmpid] = useState(101);
  const [empname, setEmpname] = useState("Narendar");
  const [salary, setSalary] = useState(30000);
  const [desg, setDesg] = useState("Developer");
  const [deptno, setDeptno] = useState(10);

  return (
    <>
      <h1>Employee Details</h1>

      <p>Employee ID: {empid}</p>
      <p>Employee Name: {empname}</p>
      <p>Salary: {salary}</p>
      <p>Designation: {desg}</p>
      <p>Department No: {deptno}</p>
    </>
  );
}

export default Employee;