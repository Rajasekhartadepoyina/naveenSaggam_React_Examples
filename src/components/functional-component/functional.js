import React, { Fragment } from 'react'
import MessageCard from './MessageCard';


let Functional=()=> {

    return (
        <Fragment>
            <nav className='navbar text-white'>
                Welcome to React!
            </nav>
            <MessageCard/>
        </Fragment>
    );
}
export default Functional;