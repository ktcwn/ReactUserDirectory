import React from "react";
import "./employee.css";
import { Table } from "react-bootstrap";



function EmployeeCard(props) {
 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <img src={props.image} /> </td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EmployeeCard;

