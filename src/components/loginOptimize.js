import React, { useState } from "react";

let Loginform = () => {
    let [state, setState] = useState({
            user: {
                username: "",
                password: "",
            }
    });
    let{user}=state;
const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    user[name]=value;
    setState({...state,user:user})
}

console.log("d",state);

let login=(e)=>{
    e.preventDefault();
    console.log(state);
}
 
    return (
        <React.Fragment>
            <pre>{JSON.stringify(state)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col md-3">
                        <div className="card">
                            <div className="card-header bg-success text-white" >
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={login}> 
                                    <div className="mb-3">
                                        <input  type='text'  name='username' onChange={handleInput}  className="form-control" placeholder="username" />

                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' onChange={handleInput} className="form-control" placeholder="password" />

                                    </div>
                                    <div className="mb-3">
                                        <input type="submit"  className="btn btn-success btn-sm"  value="Login" />

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Loginform;