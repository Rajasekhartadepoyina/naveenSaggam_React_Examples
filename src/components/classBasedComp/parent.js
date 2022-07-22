import React, { Fragment } from "react";
import Employee from '../classBasedComp/employee';
// import '../../App.css';
import '../classBasedComp/classbase.css';

let ParentToChild=()=>{
    return(
        <Fragment>
        <nav className="navbar text-white">
            <span>Welcome to the component</span>
        </nav>
        <Employee name="Raja" age={25}/>
        <Employee name="Sekhar" age={25}/>
        
        </Fragment>
    )
}
export default ParentToChild;