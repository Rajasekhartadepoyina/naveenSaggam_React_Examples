import React, { useState,useEffect } from "react";
import Axios from "axios"
const ContactList = () => {
    const [state, setState]=useState()
  async function datafetch(){
    let serverurl="https://jsonplaceholder.typicode.com/users"
    let  responses= await Axios.get(serverurl)
     setState(responses.data)
    
  }
  useEffect(()=>{
    datafetch()  
  },[])
  const data = state
  console.log("DATA",state);
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
