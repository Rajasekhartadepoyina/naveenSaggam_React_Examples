import React, { useState } from "react";
import { ContactService } from "./services/contactService";
const ContactList = () => {
  const data = ContactService;
  console.log("DATA", data);
  return (
    <React.Fragment>
      <h3>contactList</h3>
      <table className="table table-hover text-center table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.length > 0 && data.map((each,index ) => {
              return (
                <tr key={index}>
                  <td>{each.id}</td>
                  <td>{each.name}</td>
                  <td>{each.username}</td>
                  <td>{each.email}</td>
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
