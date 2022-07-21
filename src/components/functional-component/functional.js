import React, { Fragment } from 'react'
import MessageCard from './MessageCard';


function Functional() {

    return (
        <Fragment>
            <nav className='navbar'>
                Welcome to React!
            </nav>
            <MessageCard/>
        </Fragment>
    );
}
export default Functional;