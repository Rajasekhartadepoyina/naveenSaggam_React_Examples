import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TableMapping = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    console.log(data);

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit= async (e) => {
        e.preventDefault();
        return await axios.get(`https://jsonplaceholder.typicode.com/users?q=${value}`).then((response) => {
            setData(response.data);
            setValue("");
        })
            .catch((err) => console.log(err))

    }
    const handleReset = () => {
        fetchData();
    }

    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <a href="#" className='navbar-brand'>React with Conditional & list Rendering</a>
            </nav>
            <div className='container'>
                <h2 style={{ color: 'green' }}>User List</h2>
                <p>Specifies the identifier for the table to describe. If the identifier contains spaces or special characters, the entire string must be enclosed in double quotes. Identifiers enclosed in double quotes are also case-sensitive.</p>
                <div className='mb-4'>
                    <input type="text" name='search' placeholder='search' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' onClick={handleSubmit}>Search</button>
                    <button onClick={handleReset}>Reset</button>
                </div>

                <Table striped bordered hover style={{ textAlign: 'center' }}>
                    <thead variant="dark" >
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>STREET</th>
                            <th>CITY</th>
                            <th>WEBSITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data &&
                            data.map((each, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{each.id}</td>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{each.address.street}</td>
                                        <td>{each.address.city}</td>
                                        <td>{each.website}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default TableMapping