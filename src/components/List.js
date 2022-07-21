import React, { useState } from "react";
function List(){


    const [state,setState]=useState({
  
products:[
{

    sno:"001",
    img:"",
    name:"samsung",
    price:"1500",
    qty:"2",
},
{

    sno:"002",
    img:"",
    name:"samsung",
    price:"1500",
    qty:"2",
},
{

    sno:"003",
    img:"",
    name:"samsung",
    price:"2500",
    qty:"4",
},
{

    sno:"4",
    img:"",
    name:"samsung",
    price:"2000",
    qty:"3",
},
{

    sno:"005",
    img:"",
    name:"samsung",
    price:"2800",
    qty:"4",
},
]
})
let {products}=state;
    


    return(


<div>

    <div>list</div>



    
</div>


    )

}
export default List;