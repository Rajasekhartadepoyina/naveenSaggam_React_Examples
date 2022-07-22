import React, { useState } from 'react'
import './Login.css';


function Loginform() {

    const [state, setState] = useState({
        username: '',
        password: '',


    });

    const handleOnInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    // console.log(state)

    const onSubmitLogin = (e) => {
        e.preventDefault();
        console.log(state);



    }


    return (
        <React.Fragment>
            <div className="text-danger ">
                <h4>Login from</h4>
                <form onSubmit={onSubmitLogin}>
                    <div>

                        <input type="text" name="username" value={state.username} onChange={handleOnInput} className='form-control' placeholder='username'></input>
                    </div>
                    <div>
                        <input type="password" value={state.password} name="password" className='form-control' placeholder='password' onChange={handleOnInput} ></input>
                    </div>
                    <div >
                        <input type="submit" className='form-control' value="login" placeholder='username'/>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )

}

export default Loginform;