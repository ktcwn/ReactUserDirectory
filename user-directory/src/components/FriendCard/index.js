import React from "react";
import "./friend.css";


function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> </td>
              <td>{props.name}</td>
              <td>{props.phone}</td>
              <td>{props.email}</td>
              <td>{props.dob}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default FriendCard;

