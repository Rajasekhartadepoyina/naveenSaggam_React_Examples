import React, { useState } from "react";
import { ContactService } from "./services/contactService";
const ContactList = (props) => {
  const data = ContactService;

const clickContact = (data) =>{
props.sendContact(data);
}
  return (
    <React.Fragment>
      <table className="table table-hover text-center table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 && data.map((each,index ) => {
              return (
                <tr key={index} onClick={() => clickContact(each)}>
                  <td>{each.id}</td>
                  <td>{each.name}</td>
                  <td>{each.username}</td>
                  <td>{each.email}</td>
                  <td>{each.phone}</td>
                  <td>{each.address.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ContactList;
