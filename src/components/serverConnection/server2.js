import React, { Fragment, useState } from "react";

let Server1 = () => {
    const [state, setState] = useState({
        user: []
    });

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">userlist</p>
                        <p >these are the list</p>

                    </div>
                </div>
            </div>

            {/* <h2>welcome to fragment</h2>
            <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>welcome to fragment</h2>
                        <pre>{JSON.stringify(state.user)}</pre>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Server1;