import { useState } from "react";

function Customers() {

  const [customers, setCustomers] = useState([
    "Narendar",
    "Sarath",
    "Dhivagar"
  ]);

  const [name, setName] = useState("");

  function addCustomer() {
    setCustomers([...customers, name]);
    setName("");
  }

  function deleteCustomer(index) {
    const newCustomers = customers.filter((customer, i) => i !== index);
    setCustomers(newCustomers);
  }

  return (
    <>
      <h1>Customer List</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter customer name"
      />

      <button onClick={addCustomer}>
        Add Customer
      </button>

      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}

            <button onClick={() => deleteCustomer(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Customers;