import React, { useEffect, useState } from 'react'



let Digitalwatch = () => {

    let [state, setState] = useState({
        currentTime: new Date().toLocaleTimeString()
    });

    useEffect(() => {
        let interval = setInterval(() => {
            setState(() => ({
                currentTime: new Date().toLocaleTimeString()
            }))
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <React.Fragment>
            <div className='container mt-3 w-25'>
                <div className='card shadow-lg text-center'>
                    <div className='card-header bg-danger'>
                        <p className='h4 text-white'> India </p>
                    </div>
                    <div>
                        <h3 className='text-warning'> {state.currentTime} </h3>
                    </div>
                    <div className='card-header bg-success'>
                    <p className='h4 text-white'> Digital Watch </p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Digitalwatch;