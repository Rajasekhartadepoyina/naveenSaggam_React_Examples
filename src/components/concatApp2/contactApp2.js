import React from "react";
import ContactCard from "./contactCard2";
import ContactList from "./contactList2";

const ContactApp = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className='h3 text-success'>Contact App with Axios </p>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ContactList />
          </div>
          <div className="col-md-3">
            <ContactCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
