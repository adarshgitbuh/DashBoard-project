import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";


const CustomerHistory = () => {
  const customers = [
    {
      name: "user1",
      email: "user1@example.com",
      signupDate: "2024-01-15",
    },
    {
      name: "user2",
      email: "user2@example.com",
      signupDate: "2024-02-10",
    },
    {
      name: "user3",
      email: "user3@example.com",
      signupDate: "2024-03-05",
    },
  ];

  return (
    <div className="main-container main-center customer-sidebar-container">
      <div className="">
        <strong className="sub-heading">Customers</strong>
      </div>
      <div className="input-container search-container">
      <IoSearchOutline className="search-icon-2" />
        <input
          type="text"
          placeholder="Search Customer"
          className="search-bar"
        />
      </div>

      <div className="customer-table-container">
        <div className="table-header">
          <span className="table-heading">Name</span>
          <span className="table-heading">Email</span>
          <span className="table-heading">Signed Up</span>
        </div>
        <div className="table-body">
  {customers.map((customer, index) => (
    <div key={index} className="table-row">
      <span className="table-cell">
        <IoPersonAddOutline className="add-icon" />
        {customer.name}
      </span>
      <span className="table-cell">{customer.email}</span>
      <span className="table-cell">{customer.signupDate}</span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default CustomerHistory;
