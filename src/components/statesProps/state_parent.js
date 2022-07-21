import React, { Fragment } from 'react';
import Child from './state_child';
function Parent_State() {
  return (
    <div>
        <Fragment>
            <nav className='navbar'>
                <span>welcome to parent component</span>
                   <Child/>
            </nav>
        </Fragment>
    </div>
  )
}

export default Parent_State