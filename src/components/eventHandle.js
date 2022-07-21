import React, { useState } from 'react'

function EventHandel() {
    let [count,setCount]=useState({
        counter:0
    })
    const increment=()=>{

        // setCount({...count,state.counter})

    }
    const decrement=()=>{
        setCount(count--)
    }

  return (
    <div>
        <h1>
            Counter 
        </h1>
        <button  onClick={increment}>
            Increment 
        </button>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default EventHandel