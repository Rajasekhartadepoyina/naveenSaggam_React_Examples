import React from "react"
import "../class_state_management/naveen_saggam.css"

class Employee extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {
                    name: "venkateswarlu",
                    age: 20
                },

                {
                    name: "vinay",
                    age: 20
                }
            ]
        }
    }

    render() {
        return (
            <>
                <div className="navbar2">
                    <span >
                        Welcome to state management in class based compponent
                    </span>
                </div>
                <div className="card2">
                    <div>Name:{this.state.employees[0].name}</div>
                    <div>Age:{this.state.employees[0].age}</div>
                </div>
                <div className="card2">
                    <div>Name:{this.state.employees[1].name}</div>
                    <div>Age:{this.state.employees[1].age}</div>
                </div>

            </>
        )
    }
}
export default Employee